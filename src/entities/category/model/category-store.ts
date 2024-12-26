import { create } from 'zustand'

interface CategoryStore {
    activeCategory: string
    setActiveCategory: (category: string) => void
}

export const useCategoryStore = create<CategoryStore>((set) => ({
    activeCategory: 'Lunch',
    setActiveCategory: (category) => set({ activeCategory: category }),
}))
