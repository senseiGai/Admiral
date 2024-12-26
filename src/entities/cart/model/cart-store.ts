import { create } from 'zustand'

interface CartStore {
    total: number
    updateTotal: (amount: number) => void
}

export const useCartStore = create<CartStore>((set) => ({
    total: 0,
    updateTotal: (amount) => set((state) => ({ total: state.total + amount })),
}))
