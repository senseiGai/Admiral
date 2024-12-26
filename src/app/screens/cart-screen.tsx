import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import { useFoodStore } from '../../entities/food/model/food-store'
import { useCartStore } from '../../entities/cart/model/cart-store'
import Text from '../../shared/ui/text/text'
import CartItem from '../../entities/cart/ui/cart-item'

const CartScreen = () => {
    const { foods, incrementQuantity, decrementQuantity } = useFoodStore()
    const { total } = useCartStore()

    const cartItems = foods.filter(food => food.quantity > 0)

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
                <View style={styles.totalButton}>
                    <Text style={styles.totalText}>Total: {total.toFixed(2)}$</Text>
                </View>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
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
        backgroundColor: '#FFB800',
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#303030',
    },
})

export default CartScreen