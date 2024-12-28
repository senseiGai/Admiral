import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import MenuScreen from "../screens/menu-screen";
import ShopScreen from "../screens/shop-screen";
import CartScreen from "../screens/cart-screen";
import ReservationScreen from '../screens/reservation-screen';
import ReservationSuccessScreen from '../screens/reservation-success-screen';
import CartSuccessScreen from '../screens/cart-success-screen';
import ContactsScreen from '../screens/contacts-screen';
import EventsScreen from '../screens/events-screen';
import EventDetailsScreen from '../screens/event-details-screen';

export type EventType = {
    id: string;
    title: string;
    time: string;
    image: any;
    description: string;
    subText: string;
    subImage: any;
}

export type MainStackParamList = {
    Menu: undefined;
    Shop: undefined;
    Cart: undefined;
    CartSuccess: undefined;
    Reservation: undefined;
    ReservationSuccess: undefined;
    Contacts: undefined;
    Events: undefined;
    EventDetails: {
        event: EventType;
    };
};

const Stack = createNativeStackNavigator<MainStackParamList>();

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
            <Stack.Screen
                name="Contacts"
                component={ContactsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Events"
                component={EventsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
        </Stack.Navigator>
    )
}