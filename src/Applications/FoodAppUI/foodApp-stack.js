import {createStackNavigator} from '@react-navigation/stack';
import DeliveryApp from '../FoodAppUI/Components/DeliveryApp'
import Details from '../FoodAppUI/Components/Details'
const Stack=createStackNavigator();
export default function FoodApp(){
  return(
<Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DeliveryApp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  );
}