<script setup>
import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const booksStore = useBooksStore()
const book= booksStore.selectedBook

//cart
const cartStore= useCartStore()
const quantity = ref(1)

function buy(book){
  book.quantity = quantity.value
  cartStore.updateCart(book)
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col md="2">
        <v-btn icon="mdi-arrow-left " color="secondary" to="/books" class="ma-12"></v-btn>
      </v-col>
      <v-col md="10" > 
        <div  class="text-display-medium mb-12 mt-12 ">
          Book Title
        </div>
      </v-col>
    </v-row>
   <v-row>
            <v-col md="6">
            <v-card >
                <v-img class="align-end text-white"  height="620" :src="book.image"  ></v-img>
            </v-card>
            </v-col>
            <v-col md="6">
                <v-card height="620" color="primary">
                    <v-card-item>
                        <v-card-title class="mb-4">{{ book.name }}</v-card-title>
                        <v-chip class="mb-4">{{ book.genre }}</v-chip>
                            <v-row>
                                <v-col md="4">
                                    <v-rating :model-value="book.rating" :size="24" readonly ></v-rating>
                                </v-col>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>
                        <v-card-text style="height:300px; overflow-y: auto"> {{ book.long_description }}</v-card-text>
                        <v-card-subtitle>{{ book.price }}</v-card-subtitle>
                        <v-card-text> 
                            <v-row>
                                <v-col md="4">Quantity</v-col>
                                <v-col md="6">
                                    <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10" > </v-number-input>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card-item>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-card-text>Total: 0</v-card-text>
                        <v-btn elevation="4" variant="elevated" @click="buy(book)"> Add to Cart </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
          </v-row>
  </v-container>

  <!-- Footer -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div allign="center">
                <router-link to="/">
                    <v-img src="/logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Book Bloom Online Book Store &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@bookbloomonline.com</p>
                <p>Phone: 254738344927</p>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>