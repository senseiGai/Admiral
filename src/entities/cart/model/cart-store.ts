import { create } from 'zustand'

interface CartStore {
    total: number
    updateTotal: (amount: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
    total: 0,
    updateTotal: (amount) => set((state) => ({ total: state.total + amount })),
    clearCart: () => set({ total: 0 })
}))
