import React, { useState } from 'react'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { View, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'

const ReservationScreen = () => {
    const navigation = useNavigation()
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        tableNumber: '',
        time: '',
        date: ''
    })

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== '')
    }

    const handleInputChange = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleReservation = () => {
        if (isFormValid()) {
            navigation.navigate('ReservationSuccess' as never)
            setTimeout(() => {
                setFormData({
                    name: '',
                    phoneNumber: '',
                    tableNumber: '',
                    time: '',
                    date: ''
                })
            }, 1000)
        }
    }

    return (
        <AppLayout isBack title='Reservation' marginLeft={80}>
            <View style={styles.container}>
                <View style={[styles.inputContainer, { marginTop: 39 }]}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Name</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.name}
                        onChangeText={(text) => handleInputChange('name', text)}
                        placeholder="Enter the text.."
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Phone number</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.phoneNumber}
                        onChangeText={(text) => handleInputChange('phoneNumber', text)}
                        placeholder="Enter the text.."
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        keyboardType="phone-pad"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Table number</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.tableNumber}
                        onChangeText={(text) => handleInputChange('tableNumber', text)}
                        placeholder="Enter the text.."
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Indicate time of the visit</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.time}
                        onChangeText={(text) => handleInputChange('time', text)}
                        placeholder="Enter the text.."
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    />
                </View>

                <View style={[styles.inputContainer, { marginBottom: 132 }]}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Date</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.date}
                        onChangeText={(text) => handleInputChange('date', text)}
                        placeholder="Enter the text.."
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    />
                </View>

                <MyTouchableOpacity
                    style={[
                        styles.reservationButton,
                        !isFormValid() && styles.disabledButton
                    ]}
                    disabled={!isFormValid()}
                    onPress={handleReservation}
                >
                    <Text style={[
                        styles.reservationButtonText,
                        !isFormValid() && styles.disabledButtonText
                    ]}>Reservation</Text>
                </MyTouchableOpacity>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    backButton: {
        marginBottom: 20,
    },
    backText: {
        fontSize: 17,
        color: '#FFFFFF',
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 32,
    },
    labelContainer: {
        backgroundColor: '#FFCB00',
        alignSelf: 'flex-start',
        paddingHorizontal: 4,
        borderRadius: 12,
        marginBottom: -10,
        marginLeft: 10,
        zIndex: 1,
    },
    label: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '400',
    },
    input: {
        borderRadius: 33,
        borderWidth: 1,
        borderColor: '#FFFFFF80',
        padding: 16,
        color: '#FFFFFF',
        fontSize: 17,
    },
    reservationButton: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 265,
        height: 55,
        borderRadius: 29.94,
        backgroundColor: '#FFCB00'
    },
    disabledButton: {
        backgroundColor: 'rgba(255, 203, 0, 0.5)',
    },
    reservationButtonText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '500',
    },
    disabledButtonText: {
        color: 'rgba(0, 0, 0, 0.5)',
    },
})

export default ReservationScreen
