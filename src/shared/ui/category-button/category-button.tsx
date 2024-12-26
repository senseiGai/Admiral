import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../text/text'
import MyTouchableOpacity from '../my-touchable-opacity/my-touchable-opacity'

interface ICategoryButtonProps {
    title: string
    isActive?: boolean
    onPress: () => void
}

const CategoryButton = ({ title, isActive = false, onPress }: ICategoryButtonProps) => {
    return (
        <MyTouchableOpacity onPress={onPress} style={[styles.button, isActive && styles.activeButton]}>
            <Text style={[styles.text, isActive && styles.activeText]}>{title}</Text>
            {isActive && <View style={styles.underline} />}
        </MyTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        position: 'relative',
    },
    activeButton: {
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    activeText: {
        fontSize: 14,
        color: '#FFCB00',
        fontWeight: '500',
    },
    underline: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        right: 20,
        height: 3,
        backgroundColor: '#FFB800',
        borderRadius: 2,
    },
})

export default CategoryButton