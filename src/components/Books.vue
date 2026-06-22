<script setup>
import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const booksStore = useBooksStore()
const books= booksStore.books 

function view(book){
   booksStore.updateSelectedBook(book) // keep track of the selected item
    router.push('/view_book')
}

//cart
const cartStore= useCartStore()
const quantity = ref(1)

function buy(book){
  book.quantity = quantity.value
  cartStore.updateCart(book)
}

  //Wishlist
  function addToWishlist(book){
    
  }

</script>

<template>
    <v-container max-width="100%">
      <v-row>
        <v-col>
          <div  class="text-display-medium mb-12 mt-12 text-center"> 
            Browse Books
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for ="book in books">
         <v-card class = "h-100 d-flex flex-column" width="300" >
            <v-img :src="book.image" height="200px" class="mt-4"></v-img>
            <v-card-title>{{ book.name }}</v-card-title>
            <v-card-subtitle>ksh {{ book.price }}</v-card-subtitle>
            <v-card-text>By: {{ book.author }}</v-card-text>
            <v-card-text>{{ book.description }} </v-card-text>
            <v-card-actions>
              <v-btn  color="primary" variant="elevated" @click="buy(book)">Add to Cart</v-btn>
               <v-btn  color="primary" variant="elevated" @click="view(book)">View Book</v-btn>
               
                <v-btn icon="mdi-heart-outline" variant="text" @click="wishlistStore.addToWishlist(book)"></v-btn>
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