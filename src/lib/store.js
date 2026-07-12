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
    setSelectedCategory: (category) => set({ selectedCategory: category}),
    setSearchQuery: (query) => set({ searchQuery: query}),
    setSortBy: (sort) => set({ sortBy: sort}),

    //pagination state
    currentPage: 1,
    setCurrentPage: (page) => set({ currentPage: page }),

    //filtered products state
    getFilteredProducts: () => {
        const { products, selectedCategory, searchQuery, sortBy } = get();
        return products
            .filter((p) => selectedCategory === "ALL" || p.category === selectedCategory)
            .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
                if (sortBy === "price-asc") return a.price - b.price
                if (sortBy === "price-desc") return b.price - a.price
                if (sortBy === "rating") return b.rating.rate - a.rating.rate
                return 0
            })
    },

    // paginated products state
    getPaginatedProducts: () => {
        const { getFilteredProducts, currentPage } = get();
        const filtered = getFilteredProducts();
        const start = (currentPage -1) * 8;
        const end = start + 8;
        return filtered.slice(start,end);
    },

    // total pages
    getTotalPages: () => {
        const { getFilteredProducts } = get();
        const filtered = getFilteredProducts();
        return Math.ceil(filtered.length / 8);
    },

    //Cart state
    isCartOpen: false,
    setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen}),
    cart: [],
    toast: null,
    setToast: (message) => set({ toast: message }),
    addToCart: (product) => {
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                return {
                    cart: state.cart.map((item) => 
                    item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                    )
                }
            }
            return {
                cart: [...state.cart, {...product, quantity: 1}]
            }
        })
        set({ toast: product.title})
    },
    removeFromCart: (productId) => {
        const cart = get().cart;
        set({ cart: cart.filter((item) => item.id !== productId) });
    },
    clearCart: () => set({ cart: [] }),
    updateQuantity: (product, amount) => {
        set((state) => ({ 
            cart: state.cart
            .map((item) => item.id === product.id
            ? { ...item, quantity: item.quantity + amount } 
            : item)
        .filter((item) => item.quantity > 0)
        }))
    },

    getCartCount: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0)
    },
    getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.quantity * item.price, 0)
    },
}));

export default useProductStore;