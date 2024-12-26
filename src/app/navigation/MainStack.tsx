import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import MenuScreen from "../screens/menu-screen";
import ShopScreen from "../screens/shop-screen";
import CartScreen from "../screens/cart-screen";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Shop" component={ShopScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}