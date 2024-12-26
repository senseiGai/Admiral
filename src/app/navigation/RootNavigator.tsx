import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { MainStack } from "./MainStack";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const RootNavigator = () => {
    return (
        <SafeAreaProvider>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default RootNavigator