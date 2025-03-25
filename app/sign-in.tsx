import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className="bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10 -mt-6 flex flex-col gap-6">
          <Text className="font-rubik uppercase text-base text-center text-black-200 tracking-[0.2em] ">
            Welcome to Restate
          </Text>
          <Text className="  text-center capitalize font-rubik-semibold text-3xl text-black">
            Let’s get you closer to{" "}
            <Text className="text-primary-300">your ideal home</Text>
          </Text>
          <Text className="text-black-200 text-lg text-center font-rubik">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            className="bg-white p-4 shadow-md  shadow-zinc-300 rounded-full"
            onPress={handleLogin}
          >
            <View className="flex flex-row justify-center items-center gap-3">
              <Image
                source={icons.google}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="font-rubik-medium text-black text-lg text-center">
                Sign Up with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
