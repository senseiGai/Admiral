import { View, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import EventCard from '../../shared/ui/event-card/event-card'

const events = [
    {
        id: '1',
        title: 'A night with food',
        time: 'Every Friday, 20:00 - 24:00',
        image: require('../../../assets/images/events01.png'),
        description: 'Eat and enjoy your food in the dark with dimmed lights and live music, immerse yourself completely in this atmosphere.',
        subText: 'Get good vibes with it.',
        subImage: require('../../../assets/images/events04.png'),
    },
    {
        id: '2',
        title: 'Dancing with food',
        time: 'Every Friday, 14:00 - 22:00',
        image: require('../../../assets/images/events02.png'),
        description: 'Spend your time pleasantly, in a pleasant company, dance to cheerful music, forget about all your problems, and enjoy the moment.',
        subText: 'Our place will help you with that.',
        subImage: require('../../../assets/images/events05.png'),
    },
    {
        id: '3',
        title: 'Tea Day',
        time: 'Every Friday, 12:00 - 17:00',
        image: require('../../../assets/images/events03.png'),
        description: 'Drink tea in pleasant company, with interesting interactives and events.',
        subText: 'Immerse yourself in tea culture with us',
        subImage: require('../../../assets/images/events06.png'),
    }
]

const EventsScreen = () => {
    return (
        <AppLayout title="Events" isBack marginLeft={100}>
            <ScrollView style={styles.container}>
                {events.map((event) => (
                    <View key={event.id} style={styles.cardContainer}>
                        <EventCard
                            key={event.id}
                            event={event}
                            isClickable={true}
                        />
                    </View>
                ))}
            </ScrollView>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 24,
    },
    cardContainer: {
        marginBottom: 52
    }
})

export default EventsScreen