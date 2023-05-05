import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CovidApp from '../Applications/CovidApplication/covid-app';
import HomeScreen from '../Screens/account-screen';
import AppScreens from '../Screens/apps-screens';
import EarthQuakeTracker from '../Applications/EarthQuakeApplication/Components/EarthQuakeTracker';
import FoodApp from '../Applications/FoodAppUI/foodApp-stack';
import MusicApp from '../Applications/MusicApplication/components/MusicApp';
import SongDetails from '../Applications/MusicApplication/components/SongDetails';
import SingerDetails from '../Applications/MusicApplication/components/SingerDetails';
const Stack = createStackNavigator();

const Stack1 = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="AppScreen" component={AppScreens} options={{headerShown:false}}/>
        <Stack.Screen name="CovidApp" component={CovidApp} options={{headerShown:false}}/>
        <Stack.Screen name="EarthQuakeTrackerApp" component={EarthQuakeTracker} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="FoodAppUI" component={FoodApp} options={{headerShown:false}}/>
        <Stack.Screen name='MusicApp' component={MusicApp} options={{headerShown:false}}/>
        <Stack.Screen name='SongDetails' component={SongDetails} options={{headerShown:false}}/>
        <Stack.Screen name='SingerDetails' component={SingerDetails} options={{headerShown:false}}/>

      </Stack.Navigator>
  );
};

export default Stack1;
