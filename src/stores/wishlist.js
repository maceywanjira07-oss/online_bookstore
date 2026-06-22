import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
    state: () => {
        const wishlist = []

        return {
            wishlist
        }
    },
    actions: {
        addToWishlist(payload) {
            this.wishlist.push(payload)
        },
        removeFromWishlist(index) {
            this.wishlist.splice(index, 1)
        },
    },
    persist: true,
})