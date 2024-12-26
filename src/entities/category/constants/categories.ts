export const CATEGORIES = [
    'Favorite',
    'Lunch',
    'Dinner',
] as const

export type CategoryType = typeof CATEGORIES[number]
