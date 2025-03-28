import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

export const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selected, setSelected] = useState(params.filter || "All");

  const handleFilter = (category: string) => {
    if (selected === category) {
      setSelected("All");
      router.setParams({ filter: "All" });
      return;
    }

    setSelected(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => handleFilter(item.category)}
            key={index}
            className={`py-3 px-5 rounded-full mr-3 ${
              selected === item.category
                ? `bg-primary-300 `
                : `bg-primary-100 border border-primary-200 `
            }`}
          >
            <Text
              className={`${
                selected === item.category
                  ? "text-white font-rubik-semibold"
                  : "text-black-300"
              }`}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
