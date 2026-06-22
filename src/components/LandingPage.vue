<script setup>

</script>

<template>
  <v-container max-width="100%">
    <v-row>
      <v-col>
        <v-carousel cycle>
           <v-carousel-item src="carousel1.jpg" cover></v-carousel-item>
           <v-carousel-item src="carousel2.jpg" cover></v-carousel-item>
           <v-carousel-item src="carousel3.jpg"cover></v-carousel-item>
           <v-carousel-item src="carousel4.jpg" cover></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
  <!-- About us -->

   <v-container class="bg-secondary" max-width="100%"> 
    <v-row>
      <v-col class="text-center">
         <div class ="text-display-medium mb-12 text-white"> Welcome to Book Bloom</div>
         <div class = "text-title-large font-weight-light text-medium-emphasis mb-8 ">At Book Bloom ,we believe every book has the power to inspire, teach and transport you to new worlds.Our mission is to make discovering yor next favourite read simple, enjoyable and accesible for everyone.Whether you are a passionate reader,a curious learner, or just starting your reading journey, Book Bloom is here to help your love for books grow and flourish. </div>
         <div class = "text-title-large font-weight-light text-medium-emphasis mb-8 ">Read. Discover. Bloom!</div>
      </v-col>
    </v-row>
   </v-container>


   <!-- Our Best sellers -->
    <v-container max-width="100%">
      <v-row>
        <v-col md="3"> 
          <v-card >
            <v-img src="/Book1.jpg" cover></v-img>
            <v-card-title>How Innovation Works</v-card-title>
            <v-card-subtitle>Ksh 2000</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
        </v-col>

        <v-col md="3"> 
          <v-card>
            <v-img src="/Book2.png" cover></v-img>
            <v-card-title>The Fault In Our Stars</v-card-title>
            <v-card-subtitle>Ksh 1580</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
        </v-col>

        <v-col md="3"> 
          <v-card>
            <v-img src="/Book3.png" cover></v-img>
            <v-card-title>5 Ideas from Global Diplomacy</v-card-title>
            <v-card-subtitle>ksh 1250</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
        </v-col>

        <v-col md="3"> 
          <v-card >
            <v-img src="/Book4.png" cover></v-img>
            <v-card-title>The lightning Thief</v-card-title>
            <v-card-subtitle>ksh 1020</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
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