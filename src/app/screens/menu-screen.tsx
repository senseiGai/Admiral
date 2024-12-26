import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { View } from 'react-native'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import Text from '../../shared/ui/text/text'
import { useNavigation } from '@react-navigation/native'
import LogoIcon from '../../shared/icons/logo-icon'
import LinesIcon from '../../shared/icons/lines-icon'
import CartIcon from '../../shared/icons/cart-icon';


const buttons = [
    { link: 'Shop', label: 'Shop' },
    { link: 'Reservation', label: 'Reservation' },
    { link: 'Contacts', label: 'Contacts' },
    { link: 'Events', label: 'Events' },
]

const MenuScreen = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={['#032356', '#0D47A3']}
            style={styles.container}
        >
            <View style={styles.linesContainer}>
                <LinesIcon />
            </View>
            <SafeAreaView style={styles.safeArea}>
                <LogoIcon />
                <View style={styles.content}>
                    {buttons.map((button, index) => (
                        <MyTouchableOpacity key={index} style={{ marginTop: index == 0 ? -40 : 39 }} onPress={() => navigation.navigate(button.link as never)}>
                            <View style={styles.button}>
                                <Text style={{
                                    fontSize: 20, fontWeight: '500'
                                }}>{button.label}</Text>
                            </View>
                        </MyTouchableOpacity>
                    ))}
                </View >
            </SafeAreaView>
            <View style={{ position: 'absolute', right: 36, bottom: 72, zIndex: 10 }}>
                <MyTouchableOpacity onPress={() => navigation.navigate('Cart' as never)}>
                    <View style={styles.cart}>
                        <CartIcon />
                    </View>
                </MyTouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linesContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
    },
    safeArea: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        zIndex: 2,
        gap: 20
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 265,
        height: 55,
        borderRadius: 29.94,
        backgroundColor: '#FFCB00'
    },
    cart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 75,
        borderRadius: '100%',
        backgroundColor: '#FFCB00',
    },
    bookingText: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '600',
        color: '#4B018C',
        textAlign: 'center'
    }

})