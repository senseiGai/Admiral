import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Text from '../text/text'
import MyTouchableOpacity from '../my-touchable-opacity/my-touchable-opacity'
import HeartIcon from '../../icons/heart-icon'
import LinearGradient from 'react-native-linear-gradient'

interface IFoodCardProps {
    title: string
    image: any
    currentPrice: number
    originalPrice?: number
    calories: number
    weight: number
    onAddToBasket?: () => void
    onFavorite?: () => void
    isFavorite?: boolean
    quantity?: number
    onIncrement?: () => void
    onDecrement?: () => void
}

const FoodCard = ({
    title,
    image,
    currentPrice,
    originalPrice,
    calories,
    weight,
    onAddToBasket,
    onFavorite,
    isFavorite = false,
    quantity = 0,
    onIncrement,
    onDecrement,
}: IFoodCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.content}>
                <View style={styles.priceRow}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.currentPrice}>${currentPrice}</Text>
                        {originalPrice && (
                            <Text style={styles.originalPrice}>${originalPrice}</Text>
                        )}
                    </View>
                    <MyTouchableOpacity onPress={onFavorite}>
                        <View style={styles.favoriteButton}>
                            <HeartIcon isFavorite={isFavorite} />
                        </View>
                    </MyTouchableOpacity>
                </View>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.details}>{calories} Kcal, {weight} g</Text>

                {quantity === 0 ? (
                    <View style={styles.buttonContainer}>
                        <MyTouchableOpacity onPress={onAddToBasket} style={styles.addButton}>
                            <Text style={styles.addButtonText}>Add to basket</Text>
                        </MyTouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.buttonContainer}>
                        <LinearGradient
                            colors={['#FFCB00', '#0DBD00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.quantityContainer}
                        >
                            <MyTouchableOpacity onPress={onDecrement} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </MyTouchableOpacity>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <MyTouchableOpacity onPress={onIncrement} style={styles.quantityButton}>
                                <Text style={[styles.quantityButtonText, { color: '#D40000', marginTop: 4 }]}>+</Text>
                            </MyTouchableOpacity>
                        </LinearGradient>
                    </View>
                )}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        overflow: 'hidden',
        width: 171,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        height: 314,
        alignItems: 'center',
    },
    imageContainer: {
        width: 160,
        height: 166,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
        marginTop: 4,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    content: {
        marginTop: 12,
        width: '100%',
        paddingHorizontal: 12,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
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
    favoriteButton: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#FFB800',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#303030',
    },
    details: {
        marginTop: 2,
        fontSize: 12,
        color: '#303030',
        fontWeight: '500',
        opacity: 0.5,
    },
    buttonContainer: {
        marginTop: 12,
        width: '100%',
    },
    addButton: {
        backgroundColor: '#FFB800',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#303030',
        fontSize: 14,
        fontWeight: '500',
        width: '100%',
        height: 38,
        borderRadius: 12
    },
    addButtonText: {
        color: '#303030',
        fontSize: 14,
        fontWeight: '500',
        width: '100%',
        textAlign: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
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
        minWidth: 24,
        textAlign: 'center',
    },
    quantityButtonText: {
        fontSize: 24,
        color: '#303030',
        fontWeight: '500',
        lineHeight: 24,
    },
})

export default FoodCard
