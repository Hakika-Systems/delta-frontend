import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
export const useAuthStore = defineStore('auth', {
  state: () => ({
   isLoading: false,
    
  }),
  getters: {
  
  },
  actions: {
    async login(info:any){
        let data = JSON.stringify({
           "email": info.email,
           "password": info.password
       });
  
        const config = {
           method: 'post',
           url: '/auth/user',
           headers: { 
              'Content-Type': 'application/json'
           },
           data : data
        }; 
  
        const result: any = await axios(config).then(function (response) {
           return {
              data: response.data,
              success: true
           }
        }).catch(function (error) {
           console.log(error);
  
           return {
              success: false
           }
        });
        return result;
     },
     async logout() {
      Swal.fire({
        icon: 'question',
        title: 'Log Out',
        text: 'Do you want to log out?',
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            // Reset Offline DB
    
            // Send logout request
            const response = await $fetch('/auth/logout', {
              method: "POST",
              headers: { "Content-Type": "application/json" },
            });
    
            // Check if the response indicates success
            if (response.success) {
              // Reload the app to reset state and ensure a fresh session
              reloadNuxtApp();
            } else {
              // Handle unsuccessful logout attempt
              console.error('Logout failed:', response.message);
              Swal.fire({
                icon: 'error',
                title: 'Logout Failed',
                text: response.message || 'Error: Unable to log out. Please try again later.',
              });
            }
          } catch (error) {
            // Catch and log any network or unexpected errors
            console.error('Network error during logout:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error: Server Error. Please try again later.',
            });
          }
        }
      });
    }
    
  }
});

