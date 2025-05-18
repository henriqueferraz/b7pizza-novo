import { CartItem } from "@/types/cart-item";
import { create } from "zustand";

type Store = {
    open: boolean;
    items: CartItem[];
    setOpen: (open: boolean) => void;
    addItem: (item: CartItem) => void;
    removeItem: (productId: number) => void;
}

export const useCart = create<Store>()((set) => ({
    open: false,
    items: [],
    setOpen: (open) => set(state => ({ ...state, open })),
    addItem: (item) => set(state => {
        let cloneItens = [...state.items];
        const existing = state.items.find(i => i.productId === item.productId);

        if (existing) {
            for (let key in cloneItens) {
                if (cloneItens[key].productId === item.productId) {
                    cloneItens[key].quantity += item.quantity;
                }
            }


        } else {
            cloneItens.push(item);
        }

        return {
            ...state,
            items: cloneItens
        }
    }),
    removeItem: (productId) => set(state => ({
        ...state,
        items: state.items.filter(item => item.productId !== productId)
    }))
}))