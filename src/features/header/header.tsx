import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import ChevronIcon from '../../shared/icons/chevron-icon'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'
import PriceWidget from '../price-widget/price-widget'

interface IHeaderProps {
    title: string
    isBack?: boolean
}

const Header = ({ title, isBack = true }: IHeaderProps) => {
    const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isBack ? '54%' : '100%',
        }}>
            <MyTouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }} onPress={() => navigation.goBack()}>
                <ChevronIcon />
                <Text style={{ fontSize: 17, fontWeight: '400', color: '#FFF7F7' }}>Back</Text>
            </MyTouchableOpacity>
            <Text style={{ fontSize: 17, fontWeight: '500', color: '#FFF7F7', marginLeft: 64 }}>{title}</Text>
            {isBack ? null : <PriceWidget />}
        </View>
    )
}



export default Header;