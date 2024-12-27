import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import { EventType } from '../navigation/MainStack'
import EventCard from '../../shared/ui/event-card/event-card'

interface EventDetailsProps {
    route: {
        params: {
            event: EventType;
        }
    }
}

const EventDetailsScreen = ({ route }: EventDetailsProps) => {
    const { event } = route.params
    const { description, subText } = event

    return (
        <AppLayout title="Events" isBack marginLeft={100}>
            <View style={styles.container}>
                <EventCard {...event} />
                <View style={styles.content}>
                    <Text font="sf" style={styles.mainText}>
                        {description}
                    </Text>
                    <Text font="sf" style={styles.subText}>
                        {subText}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Back to menu</Text>
                </View>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 24,
        justifyContent: 'space-between',
    },
    content: {
        padding: 24,
        alignItems: 'center',
    },
    time: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 8,
    },
    mainText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 26,
        lineHeight: 28,
        width: '100%'
    },
    subText: {
        color: '#FCBF4C',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 32,
    },
    buttonContainer: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 265,
        height: 55,
        borderRadius: 29.94,
        backgroundColor: '#FFCB00',
        marginBottom: 69
    },
    buttonText: {
        fontSize: 20, fontWeight: '500'
    }
})

export default EventDetailsScreen
