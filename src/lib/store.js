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
    cart: [],
    addToCart: (product) => {
        const cart = get().cart;
        set({ cart: [...cart, product] });
    },
    removeFromCart: (productId) => {
        const cart = get().cart;
        set({ cart: cart.filter((item) => item.id !== productId) });
    },
    clearCart: () => set({ cart: [] }),
}));

export default useProductStore;