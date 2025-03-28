import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

export const FeaturedCard = () => {
  return (
    <TouchableOpacity className=" flex-1 flex flex-col w-60 h-80 relative ">
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
      <View className="bg-white/90 flex flex-row items-center rounded-full py-1.5 px-3 gap-1 absolute top-5 right-5">
        <Image source={icons.star} className="size-4" resizeMode="contain" />
        <Text className="text-primary-300 font-rubik-semibold text-sm">
          4.7
        </Text>
      </View>
      <View className=" flex flex-col gap-3 absolute bottom-5 left-4">
        <Text className="text-white font-rubik-bold text-xl">
          Apartment Name
        </Text>
        <Text className="text-white font-rubik-medium text-base">
          City, Country
        </Text>
        <Text className="text-white font-rubik-bold text-xl">Price$$$</Text>
      </View>
      <Image
        source={icons.heart}
        className="size-5 absolute bottom-5 right-5"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <TouchableOpacity className="flex flex-col gap-3 items-center w-48 h-68 bg-white p-5 rounded-xl shadow-lg shadow-black-100/20 mb-4">
      <View className="size-40 relative">
        <Image
          source={images.newYork}
          className="size-full rounded-xl"
          resizeMode="cover"
        />

        <View className="bg-white/90 flex flex-row items-center rounded-full py-1 px-2 gap-1 absolute top-2 right-2">
          <Image
            source={icons.star}
            className="size-3.5"
            resizeMode="contain"
          />
          <Text className="text-primary-300 font-rubik-semibold text-xs">
            4.7
          </Text>
        </View>
      </View>
      <View className="flex gap-2 flex-col items-start w-full">
        <Text className="text-black-300 font-rubik-semibold text-base">
          Apartment Name
        </Text>
        <Text className="font-rubik-medium text-xs text-black-100">
          Location
        </Text>
        <View className="w-full flex flex-row justify-between">
          <Text className="font-rubik-semibold text-base text-primary-300">
            Price
          </Text>
          <Image
            source={icons.heart}
            className="size-5"
            resizeMode="contain"
            tintColor="#8C8E98"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
