import React from 'react'
import Text from '../../shared/ui/text/text'
import CartShopIcon from '../../shared/icons/cart-shop-icon'
import LinearGradient from 'react-native-linear-gradient'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useCartStore } from '../../entities/cart/model/cart-store'
import { useNavigation } from '@react-navigation/native'

const PriceWidget = () => {
    const { total } = useCartStore()
    const navigation = useNavigation()

    return (
        <MyTouchableOpacity onPress={() => navigation.navigate('Cart' as never)}>
            <LinearGradient
                colors={['#FFCB00', '#0DBD00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 12, width: 117, height: 32, justifyContent: 'center' }}
            >
                <CartShopIcon />
                <Text style={{ fontWeight: '700', fontSize: 16, color: '#FFFFFF' }}>{total.toFixed(2)}$</Text>
            </LinearGradient>
        </MyTouchableOpacity>
    )
}

export default PriceWidget