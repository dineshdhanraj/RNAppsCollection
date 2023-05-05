import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MusicApp from './components/MusicApp'
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SongDetails from './components/SongDetails'
import SingerDetails from './components/SingerDetails'

const Stack= createNativeStackNavigator();
export default function App(){
return(
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name='Music' component={MusicApp}/>
  <Stack.Screen name='SongDetails' component={SongDetails}/>
  <Stack.Screen name='SingerDetails' component={SingerDetails}/>
  </Stack.Navigator>
</NavigationContainer>
)
}