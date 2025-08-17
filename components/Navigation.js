import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DatailsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import CounterScreen from "../pages/CounterScreen";
import ListManagerScreen from "../pages/ListManagerScreen";
import StyleExample from "../pages/StyleExample";
import FlexboxExample from "../pages/FlexboxExample";
import GridExample from "../pages/GridExample";

const Stack = createStackNavigator();

export default function NavigationContainer(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Counter" component={CounterScreen} />
            <Stack.Screen name="ListManager" component={ListManagerScreen} />
            <Stack.Screen name="StyleExample" component={StyleExample} />
            <Stack.Screen name="FlexboxExample" component={FlexboxExample} />
            <Stack.Screen name="GridExample" component={GridExample} />
      </Stack.Navigator>
    );
}