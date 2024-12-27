import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../../features/header/header'

interface Props {
    children: React.ReactNode
    title: string
    isBack?: boolean
    marginLeft?: number
}

const AppLayout = ({ children, title, isBack = false, marginLeft }: Props) => {
    return (
        <LinearGradient
            colors={['#032356', '#0D47A3']}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <Header title={title} isBack={isBack} marginLeft={marginLeft} />
                <View style={styles.content}>
                    {children}
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        opacity: 1
    },
    fullScreen: {
        flex: 1,
        backgroundColor: '#000',
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 16,
        zIndex: 2
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    content: {
        flex: 1
    }
})

export default AppLayout