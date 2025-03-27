import images from "@/constants/images";
import icons from "@/constants/icons";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";
import { FeaturedCard } from "@/components/Cards";
import { Card } from "@/components/Cards";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="px-6  flex flex-col gap-6">
          <View className="flex flex-row justify-between items-center mt-4">
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

          <FeaturedCard />

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
          <View className="flex flex-col gap-3 ">
            <View className="flex flex-row items-center justify-between">
              <Card />
              <Card />
            </View>
            <View className="flex flex-row items-center justify-between">
              <Card />
              <Card />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
