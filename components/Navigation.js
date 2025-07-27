import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DatailsScreen";
import ProfileScreen from "../pages/ProfileScreen";

const Stack = createStackNavigator();

export default function NavigationContainer(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    );
}