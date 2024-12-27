import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import { useFoodStore } from '../../entities/food/model/food-store'
import { useCartStore } from '../../entities/cart/model/cart-store'
import Text from '../../shared/ui/text/text'
import CartItem from '../../entities/cart/ui/cart-item'
import { Image } from 'react-native'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
    const { foods, incrementQuantity, decrementQuantity } = useFoodStore()
    const { total } = useCartStore()
    const navigation = useNavigation()

    const cartItems = foods.filter(food => food.quantity > 0)

    const handleOrder = () => {
        if (cartItems.length > 0) {
            setTimeout(() => {
                useCartStore.getState().clearCart()
                useFoodStore.getState().resetQuantities()
            }, 1000)
            navigation.navigate('CartSuccess' as never)
        }
    }

    if (cartItems.length === 0) {
        return (
            <AppLayout title="Cart" isBack>
                <View style={styles.emptyContainer}>
                    <Text font="sf" style={styles.emptyTitle}>Your cart is empty</Text>
                    <Text font="sf" style={styles.emptySubtitle}>Select the first item</Text>
                    <Image
                        source={require('../../../assets/images/cart01.png')}
                        style={styles.sadIcon}
                    />
                    <MyTouchableOpacity
                        style={styles.shopButton}
                        onPress={() => navigation.navigate('Shop' as never)}
                    >
                        <Text style={styles.shopButtonText}>Shop</Text>
                    </MyTouchableOpacity>
                </View>
            </AppLayout>
        )
    }

    return (
        <AppLayout title="Cart" isBack>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onIncrement={() => incrementQuantity(item.id)}
                        onDecrement={() => decrementQuantity(item.id)}
                    />
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <MyTouchableOpacity
                    style={styles.totalButton}
                    onPress={handleOrder}
                >
                    <Text style={styles.totalText}>Total: {total.toFixed(2)}$</Text>
                </MyTouchableOpacity>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        marginTop: 13
    },
    scrollContent: {
        paddingVertical: 16,
        paddingHorizontal: 10
    },
    footer: {
        padding: 16,
        paddingBottom: 32,
    },
    totalButton: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 265,
        height: 55,
        borderRadius: 29.94,
        backgroundColor: '#FFCB00'
    },
    totalText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',

    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    emptySubtitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFCB00',
        marginTop: 17,
    },
    sadIcon: {
        width: 235,
        height: 235,
        marginTop: 93,
        marginBottom: 138,
    },
    shopButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 265,
        height: 55,
        borderRadius: 29.94,
        backgroundColor: '#FFCB00'
    },
    shopButtonText: {
        fontSize: 20, fontWeight: '500'
    },
})

export default CartScreen