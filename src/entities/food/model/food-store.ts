import { create } from 'zustand'
import { useCartStore } from '../../cart/model/cart-store'
import { CategoryType } from '../../category/constants/categories'

export interface IFoodItem {
    id: string
    title: string
    image: any
    currentPrice: number
    originalPrice?: number
    calories: number
    weight: number
    category: string
    isFavorite: boolean
    quantity: number
}

interface FoodStore {
    foods: IFoodItem[]
    toggleFavorite: (id: string) => void
    incrementQuantity: (id: string) => void
    decrementQuantity: (id: string) => void
    addToBasket: (id: string) => void
}

const mockFoods: IFoodItem[] = [
    {
        id: '1',
        title: 'Grilled Chicken',
        image: require('../../../../assets/images/lunch01.png'),
        currentPrice: 29,
        originalPrice: 35,
        calories: 282,
        weight: 224,
        category: 'Lunch',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '2',
        title: 'Zhaima',
        image: require('../../../../assets/images/lunch02.png'),
        currentPrice: 24,
        calories: 350,
        weight: 300,
        category: 'Lunch',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '3',
        title: 'Plov',
        image: require('../../../../assets/images/lunch03.png'),
        currentPrice: 22,
        calories: 400,
        weight: 200,
        category: 'Lunch',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '4',
        title: 'Manti',
        image: require('../../../../assets/images/lunch04.png'),
        currentPrice: 28,
        originalPrice: 34,
        calories: 420,
        weight: 250,
        category: 'Lunch',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '5',
        title: 'Soup',
        image: require('../../../../assets/images/lunch05.png'),
        currentPrice: 19,
        calories: 300,
        weight: 250,
        category: 'Lunch',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '6',
        title: 'Beshbarmak',
        image: require('../../../../assets/images/lunch06.png'),
        currentPrice: 32,
        originalPrice: 40,
        calories: 450,
        weight: 300,
        category: 'Lunch',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '7',
        title: 'Spaghetti',
        image: require('../../../../assets/images/dinner01.png'),
        currentPrice: 32,
        originalPrice: 40,
        calories: 450,
        weight: 300,
        category: 'Dinner',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '8',
        title: 'Shashlik',
        image: require('../../../../assets/images/dinner02.png'),
        currentPrice: 30,
        originalPrice: 38,
        calories: 500,
        weight: 250,
        category: 'Dinner',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '9',
        title: 'Burger',
        image: require('../../../../assets/images/dinner03.png'),
        currentPrice: 30,
        originalPrice: 38,
        calories: 500,
        weight: 250,
        category: 'Dinner',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '10',
        title: 'Pizza',
        image: require('../../../../assets/images/dinner04.png'),
        currentPrice: 30,
        originalPrice: 38,
        calories: 500,
        weight: 250,
        category: 'Dinner',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '11',
        title: 'Sandwich',
        image: require('../../../../assets/images/dinner05.png'),
        currentPrice: 30,
        originalPrice: 38,
        calories: 500,
        weight: 250,
        category: 'Dinner',
        isFavorite: false,
        quantity: 0,
    },
    {
        id: '12',
        title: 'Steak',
        image: require('../../../../assets/images/dinner06.png'),
        currentPrice: 30,
        originalPrice: 38,
        calories: 500,
        weight: 250,
        category: 'Dinner',
        isFavorite: false,
        quantity: 0,
    },
]

export const useFoodStore = create<FoodStore>((set) => ({
    foods: mockFoods,
    toggleFavorite: (id) =>
        set((state) => ({
            foods: state.foods.map((food) =>
                food.id === id ? { ...food, isFavorite: !food.isFavorite } : food
            ),
        })),
    incrementQuantity: (id) => {
        const cartStore = useCartStore.getState()
        set((state) => ({
            foods: state.foods.map((food) =>
                food.id === id
                    ? { ...food, quantity: food.quantity + 1 }
                    : food
            ),
        }))
        const food = mockFoods.find(f => f.id === id)
        if (food) {
            cartStore.updateTotal(food.currentPrice)
        }
    },
    decrementQuantity: (id) => {
        const cartStore = useCartStore.getState()
        set((state) => ({
            foods: state.foods.map((food) =>
                food.id === id && food.quantity > 0
                    ? { ...food, quantity: food.quantity - 1 }
                    : food
            ),
        }))
        const food = mockFoods.find(f => f.id === id)
        if (food) {
            cartStore.updateTotal(-food.currentPrice)
        }
    },
    addToBasket: (id) => {
        const cartStore = useCartStore.getState()
        set((state) => ({
            foods: state.foods.map((food) =>
                food.id === id ? { ...food, quantity: 1 } : food
            ),
        }))
        const food = mockFoods.find(f => f.id === id)
        if (food) {
            cartStore.updateTotal(food.currentPrice)
        }
    },
}))
