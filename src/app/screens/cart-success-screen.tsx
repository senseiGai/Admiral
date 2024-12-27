import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import QRIcon from '../../shared/icons/qr-icon'

const CartSuccessScreen = () => {
    const navigation = useNavigation()

    return (
        <AppLayout isBack title='Order' marginLeft={80}>
            <View style={styles.container}>
                <Text style={styles.title} font="sf">
                    Your order has been{'\n'}successfully placed!
                </Text>

                <QRIcon />

                <MyTouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>Back to menu</Text>
                </MyTouchableOpacity>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 35,
        marginBottom: 90,
        marginTop: 94,
        fontWeight: '700',
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 144,
        backgroundColor: '#FFCB00',
        borderRadius: 30,
        width: 245,
        height: 52,
        marginBottom: 40,
    },
    backButtonText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '500',
    },
})

export default CartSuccessScreen
