import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountScreen from '../Screens/account-screen';
import Stack1 from '../StackNavigation/stack-of-screens';
const Tab = createBottomTabNavigator();

export function MainTabNavigator() {
  return (
    <Tab.Navigator 
  screenOptions={{
    tabBarStyle: { backgroundColor: '#fffaf0' }
  }}
>
      <Tab.Screen 
  name="Apps" 
  component={Stack1} 
  options={{
    headerShown: false,
    tabBarIcon: ({ color, size}) => (
      <Icon name="apps" color={color} size={size} />
    ),
    tabBarActiveTintColor: 'black',
  }}
/>

<Tab.Screen 
  name="Account" 
  component={AccountScreen} 
  options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Icon1 name="account" color={color} size={size} />
    ),
    tabBarActiveTintColor: 'black',
  }}
/>

    </Tab.Navigator>
  );
}