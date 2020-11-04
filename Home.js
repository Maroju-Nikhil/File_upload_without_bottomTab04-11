import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#009387" },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "sans-serif-condensed",
        },
        headerTitle: "Home",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Entypo
              name="menu"
              size={24}
              color="white"
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:17,textAlign:'center'}}>
        Welcome to Crimson Innovative Technologies!{"\n"}
        Please visit <Text style={{fontWeight:'bold'}}>File upload Page</Text> for amazing content
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
