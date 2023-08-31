import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontFamily: 'extrabold',
    fontSize: 20,
  },
})
