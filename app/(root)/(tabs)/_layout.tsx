import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const screenWidth = Dimensions.get("window").width;

const TabIcon = ({
  icon,
  title,
  focused,
}: {
  icon: any;
  title: string;
  focused: boolean;
}) => {
  return (
    <View className="flex-1 flex flex-col gap-2 items-center mt-2">
      <Image
        source={icon}
        tintColor={focused ? "#0061FF" : "#666876"}
        resizeMode="contain"
        className="size-7"
      />
      <Text
        className={`${
          focused
            ? "font-rubik-medium text-primary-300"
            : " font-rubik text-black-200"
        } text-xs`}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            borderTopColor: "#0061FF1A",
            borderTopWidth: 1,
            height: 100,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => {
              return (
                <TabIcon icon={icons.home} title={"Home"} focused={focused} />
              );
            },
            tabBarIconStyle: {
              width: screenWidth / 3,
            },
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ focused }) => {
              return (
                <TabIcon
                  icon={icons.search}
                  title="Explore"
                  focused={focused}
                />
              );
            },
            tabBarIconStyle: {
              width: screenWidth / 3,
            },
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => {
              return (
                <TabIcon
                  icon={icons.person}
                  title="Profile"
                  focused={focused}
                />
              );
            },
            tabBarIconStyle: {
              width: screenWidth / 3,
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
