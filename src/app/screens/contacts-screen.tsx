import React, { useState } from 'react'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { View, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'

const ContactsScreen = () => {
    const navigation = useNavigation()

    return (
        <AppLayout isBack title='Contacts' marginLeft={90}>
            <View style={styles.container}>
                <View>
                    <View style={[styles.inputContainer, { marginTop: 39 }]}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Number</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the text.."
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Address</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the text.."
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>City</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the text.."
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        />
                    </View>

                    <View style={[styles.inputContainer]}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Index</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the text.."
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <MyTouchableOpacity
                    style={[
                        styles.reservationButton, { marginBottom: 69 }
                    ]}
                    onPress={() => navigation.navigate('Menu' as never)}
                >
                    <Text style={[
                        styles.reservationButtonText,
                    ]}>Back to menu</Text>
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
        justifyContent: 'space-between',
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


export default ContactsScreen
