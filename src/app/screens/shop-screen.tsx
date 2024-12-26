import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import CategoryButton from '../../shared/ui/category-button/category-button'
import { CATEGORIES } from '../../entities/category/constants/categories'
import { useCategoryStore } from '../../entities/category/model/category-store'
import FoodCard from '../../shared/ui/food-card/food-card'
import { useFoodStore } from '../../entities/food/model/food-store'

const ShopScreen = () => {
    const { activeCategory, setActiveCategory } = useCategoryStore()
    const { foods, toggleFavorite, incrementQuantity, decrementQuantity, addToBasket } = useFoodStore()

    const filteredFoods = foods.filter(food => {
        if (activeCategory === 'Favorite') return food.isFavorite
        return food.category === activeCategory
    })

    // Create pairs of foods for the grid layout
    const foodPairs = []
    for (let i = 0; i < filteredFoods.length; i += 2) {
        foodPairs.push(filteredFoods.slice(i, i + 2))
    }

    return (
        <AppLayout title="Shop">
            <View style={styles.categoryContainer}>
                {CATEGORIES.map((category) => (
                    <CategoryButton
                        key={category}
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
                {foodPairs.map((pair, index) => (
                    <View key={index} style={styles.row}>
                        {pair.map((food) => (
                            <FoodCard
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
                ))}
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
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
})

export default ShopScreen