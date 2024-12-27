import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import CheckmarkIcon from '../../shared/icons/checkmark-icon'

const ReservationSuccessScreen = () => {
    const navigation = useNavigation()



    return (
        <AppLayout isBack title='Reservation' marginLeft={80}>
            <View style={styles.container}>
                <Text style={styles.title} font="sf">
                    Your reservation has been{'\n'}successfully placed!
                </Text>

                <CheckmarkIcon />

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
        fontWeight: '500',
    },
    checkmarkContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 120,
    },
    backButton: {
        marginTop: 144,
        backgroundColor: '#FFCB00',
        borderRadius: 30,
        paddingVertical: 16,
        paddingHorizontal: 40,
        marginBottom: 40,
    },
    backButtonText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '500',
    },
})

export default ReservationSuccessScreen
