import { create } from "zustand";

const useProductStore = create((set, get) => ({
    // fetch products state
    products: [],
    fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        set({ products: data });
    },

    //Filter state
    selectedCategory: "ALL",
    searchQuery: "",
    sortBy: "default",
    setCategory: (category) => set({ selectedCategory: category}),
    setSearchQuery: (query) => set({ searchQuery: query}),
    setSortBy: (sort) => set({ sortBy: sort}),

    //Cart state
    cart: [],
    addToCart: (product) => {
        const cart = get().cart;
        set({ cart: [...cart, product] });
    },
    removeFromCart: (productId) => {
        const cart = get.cart();
        set({ cart: cart.filter((item) => item.id !== productId) });
    },
    clearCart: () => set({ cart: [] }),
}));

export default useProductStore;