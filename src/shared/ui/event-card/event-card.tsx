import React, { ReactNode } from 'react'
import { View, StyleSheet, Platform, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList, EventType } from '../../../app/navigation/MainStack'
import Text from '../text/text'
import { BlurView } from '@react-native-community/blur'
import CalendarIcon from '../../icons/calendar-icon'
import MyTouchableOpacity from '../my-touchable-opacity/my-touchable-opacity'

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'EventDetails'>

interface EventCardProps extends EventType {}

const EventCard = (event: EventCardProps) => {
    const navigation = useNavigation<NavigationProp>()

    const handlePress = () => {
        navigation.navigate('EventDetails', {
            event,
        })
    }

    return (
        <MyTouchableOpacity style={styles.container} onPress={handlePress}>
            <Image source={event.image} style={styles.backgroundImage} resizeMode="cover" />
            <View style={styles.overlay}>
                <View style={styles.contentContainer}>
                    {Platform.OS === 'ios' ? (
                        <>
                            <BlurView
                                style={styles.content}
                                blurType="dark"
                                blurAmount={10}
                                overlayColor="#2D264B80"
                                reducedTransparencyFallbackColor="#2D264B80"
                            />
                            <View style={styles.textWrapper}>
                                <View style={styles.textContent}>
                                    <Text font="sf" style={styles.title}>{event.title}</Text>
                                    <View style={styles.timeContainer}>
                                        <CalendarIcon />
                                        <Text style={styles.time}>Time: {event.time}</Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    ) : (
                        <View style={[styles.content, styles.androidContent]}>
                            <View style={styles.textContent}>
                                <Text font="sf" style={styles.title}>{event.title}</Text>
                                <View style={styles.timeContainer}>
                                    <CalendarIcon />
                                    <Text style={styles.time}>Time: {event.time}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </MyTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 186,
        borderRadius: 16,
        overflow: 'hidden',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 16,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    contentContainer: {
        position: 'relative',
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    content: {
        position: 'absolute',
        left: 7,
        right: 7,
        bottom: 8,
        borderRadius: 16,
        height: 63,
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#2D264B80',
    },
    textWrapper: {
        position: 'absolute',
        left: 7,
        right: 7,
        bottom: 8,
        height: 63,
        justifyContent: 'center',
        zIndex: 1,
    },
    textContent: {
        paddingHorizontal: 16,
    },
    androidContent: {
        backgroundColor: '#2D264B80',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 8,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    time: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '400',
    },
})

export default EventCard
