import images from "@/constants/images";
import icons from "@/constants/icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white ">
      <View className="px-5">
        <View className="flex flex-row justify-between items-center my-4">
          <View className="flex flex-row items-center gap-2">
            <Image
              source={images.avatar}
              className="size-11"
              resizeMode="contain"
            />
            <View className="flex flex-col items-start">
              <Text className="text-black-100 text-base font-rubik">
                Hello,
              </Text>
              <Text className="text-black-300 text-lg font-rubik-medium">
                Pupa!
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={icons.bell}
              className="size-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Search />
      </View>
    </SafeAreaView>
  );
}
