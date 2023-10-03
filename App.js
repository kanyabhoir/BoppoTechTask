import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './component/HomeScreen';
import Carousel from './component/HomeScreen';
import SideDrawer from './component/SideDrawer';
import NewsAdds from './component/NewsAdds';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="carousel" component={Carousel} />
        <Stack.Screen name="drawer" component={SideDrawer} />
        <Stack.Screen name="newsAdds" component={NewsAdds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
