import images from "@/constants/images";
import icons from "@/constants/icons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";
import { FeaturedCard } from "@/components/Cards";
import { Card } from "@/components/Cards";
import { Filters } from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={(item) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 80 }}
        columnWrapperStyle={{
          display: "flex",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5 flex flex-col gap-6 mb-8">
            <View className="flex flex-row justify-between items-center mt-4">
              <View className="flex flex-row items-center gap-2">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full"
                  resizeMode="contain"
                />
                <View className="flex flex-col justify-center items-start">
                  <Text className="text-black-100 text-base font-rubik">
                    Hello,
                  </Text>
                  <Text className="text-black-300 text-lg font-rubik-medium ">
                    {user?.name}
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
            <View className="flex flex-row justify-between">
              <Text className="text-black-300 text-xl font-rubik-semibold">
                Featured
              </Text>
              <TouchableOpacity>
                <Text className="text-primary-300 text-base font-rubik-semibold">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={(item) => <FeaturedCard />}
              contentContainerStyle={{ display: "flex", gap: 16 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <View className="flex flex-row justify-between">
              <Text className="text-black-300 text-xl font-rubik-semibold">
                Our Recomendation
              </Text>
              <TouchableOpacity>
                <Text className="text-primary-300 text-base font-rubik-semibold">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
}
