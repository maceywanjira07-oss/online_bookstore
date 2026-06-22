<script setup>
import { computed } from 'vue'
import { useBooksStore } from '@/stores/books' // Adjust this path to match your project directory

// Access your existing central Pinia store
const booksStore = useBooksStore()

// Keep UI reactive to any external changes inside your central store array
const wishlist = computed(() => booksStore.wishlist)

// Dispatches action execution directly to your state store core
const buy = (book) => {
  if (booksStore.addToCart) {
    booksStore.addToCart(book)
  } else {
    alert(`${book.title} added to cart!`)
  }
}

const remove = (id) => {
  booksStore.removeFromWishlist(id)
}
</script>

<template>
  <v-container class="py-6">

    <!-- Header Section using Vuetify Typography Classes -->
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-bold my-6">
          <v-icon color="error" class="mr-2">mdi-heart</v-icon>My Wishlist ({{ wishlist.length }})
        </h1>
      </v-col>
    </v-row>

    <!-- Empty State Fallback using Vuetify Layout and Components -->
    <v-row v-if="!wishlist || wishlist.length === 0" justify="center">
      <v-col cols="12" sm="8" md="6" class="text-center py-12">
        <v-card variant="flat" class="py-8 bg-grey-lighten-4 rounded-xl">
          <v-icon size="72" color="grey-darken-1">mdi-heart-broken</v-icon>
          <v-card-title class="text-h5 text-grey-darken-2 mt-4 justify-center">
            Your wishlist is currently empty.
          </v-card-title>
          <v-card-text class="text-body-1 text-grey">
            Browse our catalog to save your favorite books here!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dynamic Wishlist Grid using Vuetify List/Card Architecture -->
    <v-row v-else>
      <v-col
        cols="12"
        v-for="book in wishlist"
        :key=id:1
      >
        <v-card class="pa-4 mb-2 rounded-lg" elevation="2" border>
          <v-row align="center" no-gutters>

            <!-- Book Cover Column -->
            <v-col cols="12" sm="3" md="2" class="d-flex justify-center justify-sm-start mb-4 mb-sm-0">
              <v-img
                :src="Book1.jpg"
                max-width="130"
                max-height="190"
                cover
                class="rounded-lg bg-grey-lighten-2 elevation-2"
                :alt="book.title"
              />
            </v-col>

            <!-- Book Details Column -->
            <v-col cols="12" sm="5" md="6" class="text-center text-sm-left px-sm-4">
              <v-card-item class="pa-0">
                <v-card-title class="text-h5 font-weight-medium text-wrap mb-1">
                  {{ book.title }}
                </v-card-title>
              </v-card-item>

              <v-chip
                :color="book.inStock ? 'success' : 'error'"
                variant="flat"
                class="mt-4 font-weight-medium"
                size="small"
                :prepend-icon="book.inStock ? 'mdi-check-circle' : 'mdi-alert-circle'"
              >
                {{ book.inStock ? 'In Stock' : 'Out of Stock' }}
              </v-chip>
            </v-col>

            <!-- Action Buttons Column -->
            <v-col
              cols="12"
              sm="4"
              class="d-flex flex-column flex-sm-row justify-center justify-sm-end align-center mt-4 mt-sm-0"
            >
              <v-btn
                color="primary"
                variant="flat"
                elevation="1"
                class="mr-0 mr-sm-2 mb-2 mb-sm-0 px-6 font-weight-bold"
                :disabled="!book.inStock"
                prepend-icon="mdi-cart-plus"
                @click="buy(book)"
              >
                Add to Cart
              </v-btn>

              <v-btn
                color="error"
                variant="outlined"
                class="px-4 font-weight-bold"
                prepend-icon="mdi-delete-outline"
                @click="remove(book.id)"
              >
                Remove
              </v-btn>
            </v-col>

          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>