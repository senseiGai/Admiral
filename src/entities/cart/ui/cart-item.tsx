import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from '../../../shared/ui/text/text'
import MyTouchableOpacity from '../../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import LinearGradient from 'react-native-linear-gradient'
import { IFoodItem } from '../../food/model/food-store'

interface Props {
    item: IFoodItem
    onIncrement: () => void
    onDecrement: () => void
}

const CartItem = ({ item, onIncrement, onDecrement }: Props) => {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.priceRow}>
                    <Text style={styles.currentPrice}>${item.currentPrice}</Text>
                    {item.originalPrice && (
                        <Text style={styles.originalPrice}>${item.originalPrice}</Text>
                    )}
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.details}>{item.calories} Kcal, {item.weight} g</Text>
                <View style={styles.quantityContainer}>
                    <LinearGradient
                        colors={['#FFB800', '#0DBD00']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}
                    >
                        <MyTouchableOpacity onPress={onDecrement} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>-</Text>
                        </MyTouchableOpacity>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <MyTouchableOpacity onPress={onIncrement} style={styles.quantityButton}>
                            <Text style={[styles.quantityButtonText, { color: '#D40000' }]}>+</Text>
                        </MyTouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFCB00',
        borderRadius: 20,
        padding: 11,
        flexDirection: 'row',
        marginBottom: 16,
        gap: 20,
        height: 155
    },
    image: {
        width: 131,
        height: 135,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
    },
    content: {
        width: 171,
        height: 135,
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    currentPrice: {
        fontSize: 20,
        fontWeight: '700',
        color: '#303030',
    },
    originalPrice: {
        fontSize: 12,
        color: '#303030',
        textDecorationLine: 'line-through',
        fontWeight: '400',
        marginTop: 4,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#303030',
        marginTop: 4,
    },
    details: {
        fontSize: 12,
        color: '#303030',
        marginTop: 2,
        fontWeight: '500',
    },
    quantityContainer: {
        marginTop: 12,
    },
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 38,
        borderRadius: 12,
    },
    quantityButton: {
        width: 60,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        fontSize: 16,
        color: '#303030',
        fontWeight: '500',
    },
    quantityButtonText: {
        fontSize: 24,
        color: '#303030',
        fontWeight: '500',
    },
})

export default CartItem
