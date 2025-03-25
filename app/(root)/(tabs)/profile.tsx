import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { logout } from "@/lib/appwrite";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";

const SettingsItem = ({
  title,
  icon,
}: {
  title: string;
  icon: ImageSourcePropType;
}) => {
  return (
    <TouchableOpacity className="flex flex-row justify-between items-center py-5">
      <View className="flex flex-row gap-2">
        <Image
          source={icon}
          className="size-7"
          resizeMode="contain"
          tintColor="#191D31"
        />
        <Text className="capitalize font-rubik-medium text-lg text-black-300">
          {title}
        </Text>
      </View>
      <Image
        source={icons.rightArrow}
        className="size-5"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      Alert.alert("Success", "You have been logout successfully");
      refetch();
    } else {
      Alert.alert("Error", "An error occured while logging out");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="py-8 px-7"
      >
        <View className="flex flex-row justify-between">
          <Text className="font-rubik-semibold text-xl text-black-300">
            Profile
          </Text>
          <Image source={icons.bell} resizeMode="contain" className="size-6" />
        </View>
        <View className="my-7 flex flex-col justify-center items-center gap-3">
          <View className="relative">
            <Image
              source={{ uri: user?.avatar }}
              className="size-36 rounded-full"
            />
            <TouchableOpacity className="absolute right-0 bottom-1">
              <Image
                source={icons.edit}
                className="size-8"
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <Text className="font-rubik-semibold text-2xl text-black-300">
            {user?.name}
          </Text>
        </View>
        <View className="border-t-primary-200 border-t-2">
          <SettingsItem icon={icons.calendar} title={"my booking"} />
          <SettingsItem icon={icons.wallet} title={"payments"} />
        </View>
        <View className="border-t-primary-200 border-t-2 mb-12">
          <SettingsItem icon={icons.person} title={"profile"} />
          <SettingsItem icon={icons.bell} title={"notifications"} />
          <SettingsItem icon={icons.shield} title={"security"} />
          <SettingsItem icon={icons.language} title={"language"} />
          <SettingsItem icon={icons.info} title={"help center"} />
          <SettingsItem icon={icons.people} title={"invite friends"} />
          <TouchableOpacity
            className="flex flex-row items-center py-5 "
            onPress={handleLogout}
          >
            <View className="flex flex-row gap-2">
              <Image
                source={icons.logout}
                className="size-7"
                resizeMode="contain"
              />
              <Text className="capitalize font-rubik-medium text-lg text-red">
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
