import { View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text }), 500;
  });

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className=" flex flex-row rounded-xl items-center justify-between bg-accent-100 border text-black-100 border-primary-100 p-4">
      <View className="flex flex-row gap-2 ">
        <Image
          tintColor="#8C8E98"
          source={icons.search}
          className="size-5"
          resizeMode="contain"
        />
        <TextInput
          className="text-black-100 w-72"
          placeholder="Search something"
          placeholderTextColor="#8C8E98"
          onChangeText={handleSearch}
        />
      </View>
      <TouchableOpacity>
        <Image
          source={icons.filter}
          tintColor="#8C8E98"
          className="size-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
