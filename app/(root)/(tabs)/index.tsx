import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text className="font-bold text-2xl my-4 font-rubik">
          Welcome to app
        </Text>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/properties/1">Property</Link>
      </View>
    </SafeAreaView>
  );
}
