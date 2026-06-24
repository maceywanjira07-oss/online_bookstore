<script setup>
import { ref } from 'vue'

// Fetch the user object stringified from your local registration session
const storedUser = JSON.parse(localStorage.getItem('user')) || {}

// Map your exact registration data model fields into read-only displays
const user = ref({
  firstname: storedUser.firstname || 'Guest',
  lastname: storedUser.lastname || '',
  email: storedUser.email || 'Not provided',
  phone: storedUser.phone || 'Not provided',
  location: storedUser.location || 'Not provided',
  address: storedUser.address || 'Not provided'
})
</script>

<template>
  <v-container class="py-8 max-width-container">
    
    <!-- Profile Visual Header Cover Card -->
    <v-card class="bg-primary text-white pa-6 rounded-xl mb-6 elevation-2" variant="flat">
      <v-row align="center" no-gutters>
        <v-col cols="12" sm="A" class="d-flex justify-center justify-sm-start mb-4 mb-sm-0">
          <!-- Dynamically generates profile initials from your registration fields -->
          <v-avatar size="90" color="white" class="text-h3 font-weight-bold text-primary elevation-1">
            {{ user.firstname.charAt(0).toUpperCase() }}{{ user.lastname ? user.lastname.charAt(0).toUpperCase() : '' }}
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="B" class="text-center text-sm-left pl-sm-4">
          <h1 class="text-h4 font-weight-black mb-1">
            {{ user.firstname }} {{ user.lastname }}
          </h1>
          <div class="text-subtitle-1 text-white-opacity">
            <v-icon size="small" class="mr-1">mdi-email-outline</v-icon>
            {{ user.email }}
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- Information Display Grid -->
    <v-row>
      <v-col cols="12">
        <v-card variant="flat" border class="pa-6 rounded-xl bg-white">
          <div class="text-h5 font-weight-bold text-grey-darken-4 mb-6">
            My Account Details
          </div>
          
          <v-row>
            <!-- First Name Display Column -->
            <v-col cols="12" sm="6" class="py-2">
              <div class="text-caption text-grey font-weight-bold text-uppercase mb-1">First Name</div>
              <div class="text-body-1 font-weight-medium px-3 py-2 bg-grey-lighten-4 rounded-lg border">
                {{ user.firstname }}
              </div>
            </v-col>

            <!-- Last Name Display Column -->
            <v-col cols="12" sm="6" class="py-2">
              <div class="text-caption text-grey font-weight-bold text-uppercase mb-1">Last Name</div>
              <div class="text-body-1 font-weight-medium px-3 py-2 bg-grey-lighten-4 rounded-lg border">
                {{ user.lastname || '—' }}
              </div>
            </v-col>

            <!-- Mobile Phone Display Column -->
            <v-col cols="12" sm="6" class="py-2">
              <div class="text-caption text-grey font-weight-bold text-uppercase mb-1">Phone Number</div>
              <div class="text-body-1 font-weight-medium px-3 py-2 bg-grey-lighten-4 rounded-lg border">
                {{ user.phone }}
              </div>
            </v-col>

            <!-- Town/City Location Display Column -->
            <v-col cols="12" sm="6" class="py-2">
              <div class="text-caption text-grey font-weight-bold text-uppercase mb-1">City / Location</div>
              <div class="text-body-1 font-weight-medium px-3 py-2 bg-grey-lighten-4 rounded-lg border">
                {{ user.location }}
              </div>
            </v-col>

            <!-- Street Address Display Column -->
            <v-col cols="12" class="py-2">
              <div class="text-caption text-grey font-weight-bold text-uppercase mb-1"> Shipping Address</div>
              <div class="text-body-1 font-weight-medium px-3 py-2 bg-grey-lighten-4 rounded-lg border text-wrap">
                {{ user.address }}
              </div>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.max-width-container {
  max-width: 800px;
}
.text-white-opacity {
  color: rgba(255, 255, 255, 0.85) !important;
}
</style>
