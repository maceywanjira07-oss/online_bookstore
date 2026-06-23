<script setup>
import { useCartStore } from '@/stores/cart';
const cart = useCartStore().cart

function remove(bookId) {
  const index = cartStore.cart.findIndex(item => item.id === bookId)
  if (index !== -1) {
    cartStore.removeFromcart(index)
  }
}

</script>

<template>
  <v-container>
   
        <v-row>
            <v-col md="12">
                <div class="text-display-medium mb-12 mt-12 text-center">
                    Your Orders
                </div>
            </v-col>
        </v-row>
        <div v-if="cart.length === 0" class="text-center mt-12">
                <v-icon icon="mdi-cart-off" size="64" color="grey"></v-icon>
                <div class="text-h6 mt-4 text-grey">Your cart is empty</div>
                <v-btn color="primary" class="mt-4" to="/books">Browse Books</v-btn>
            </div>
        <v-row v-else>
            <v-col md="12" v-for="item in cart">
                <v-card color="secondary">
                    <v-row >
                        <v-col md="4"  class="text-center d-flex align text justify-center">
                            <v-img :src="item.image" max-width="150" max-height="220" class="ma-4"cover></v-img>
                        </v-col>
                        <v-col md="6" class="text-right">
                                <v-card-item>
                                    <v-card-title class="mb-4">{{ item.name }}</v-card-title>
                                    <v-card-subtitle>Ksh {{ item.price }}</v-card-subtitle>
                                    <v-card-subtitle>Quantity {{ item.quantity }}</v-card-subtitle>
                                    <v-card-text>Total:{{ item.price * item.quantity}} </v-card-text>
                                </v-card-item>
                                <v-card-actions>
                                    <v-spacer></v-spacer> 
                                    <v-btn elevation="4" variant="elevated"> Checkout </v-btn>
                                    <v-btn
                color="error"
                variant="outlined"
                class="px-4 font-weight-bold"
                prepend-icon="mdi-delete-outline"
                @click="remove(book.id)"
              >
                Remove
              </v-btn>
                                </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>