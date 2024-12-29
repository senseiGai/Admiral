import { View, StyleSheet, ScrollView, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import CategoryButton from '../../shared/ui/category-button/category-button'
import { CATEGORIES } from '../../entities/category/constants/categories'
import { useCategoryStore } from '../../entities/category/model/category-store'
import FoodCard from '../../shared/ui/food-card/food-card'
import { useFoodStore } from '../../entities/food/model/food-store'

const ShopScreen = () => {
    const { activeCategory, setActiveCategory } = useCategoryStore()
    const { foods, toggleFavorite, incrementQuantity, decrementQuantity, addToBasket, loadFavorites } = useFoodStore()

    useEffect(() => {
        loadFavorites()
    }, [])

    const filteredFoods = foods.filter(food => {
        if (activeCategory === 'Favorite') return food.isFavorite
        return food.category === activeCategory
    })

    const showEmptyFavorites = activeCategory === 'Favorite' && filteredFoods.length === 0

    // Create pairs of foods for the grid layout
    const foodPairs = []
    for (let i = 0; i < filteredFoods.length; i += 2) {
        foodPairs.push(filteredFoods.slice(i, i + 2))
    }

    return (
        <AppLayout title="Shop">
            <View style={styles.categoryContainer}>
                {CATEGORIES.map((category, index) => (
                    <CategoryButton
                        key={index}
                        title={category}
                        isActive={activeCategory === category}
                        onPress={() => setActiveCategory(category)}
                    />
                ))}
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {showEmptyFavorites ? (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Add your favorite dishes</Text>
                        <Image
                            source={require('../../../assets/images/cart01.png')}
                            style={styles.emptyImage}
                            resizeMode="contain"
                        />
                    </View>
                ) : (
                    foodPairs.map((pair, index) => (
                        <View key={index} style={styles.row}>
                            {pair.map((food, index) => (
                                <FoodCard
                                    key={index}
                                    title={food.title}
                                    image={food.image}
                                    currentPrice={food.currentPrice}
                                    originalPrice={food.originalPrice}
                                    calories={food.calories}
                                    weight={food.weight}
                                    isFavorite={food.isFavorite}
                                    quantity={food.quantity}
                                    onFavorite={() => toggleFavorite(food.id)}
                                    onAddToBasket={() => addToBasket(food.id)}
                                    onIncrement={() => incrementQuantity(food.id)}
                                    onDecrement={() => decrementQuantity(food.id)}
                                />
                            ))}
                        </View>
                    ))
                )}
            </ScrollView>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 12,
        marginBottom: 12
    },
    scrollContent: {
        paddingHorizontal: 6,
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        minHeight: 600,
    },
    emptyImage: {
        width: 235,
        height: 235,
        marginTop: 93,
        marginBottom: 138,
    },
    emptyText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
    }
})

export default ShopScreen