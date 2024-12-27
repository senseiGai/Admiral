import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import MenuScreen from "../screens/menu-screen";
import ShopScreen from "../screens/shop-screen";
import CartScreen from "../screens/cart-screen";
import ReservationScreen from '../screens/reservation-screen';
import ReservationSuccessScreen from '../screens/reservation-success-screen';
import CartSuccessScreen from '../screens/cart-success-screen';

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

export const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Shop" component={ShopScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen
                name="CartSuccess"
                component={CartSuccessScreen}
            />
            <Stack.Screen
                name="Reservation"
                component={ReservationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ReservationSuccess"
                component={ReservationSuccessScreen}
            />
        </Stack.Navigator>
    )
}