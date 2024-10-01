import { defineStore } from 'pinia';
import axios from 'axios';
import { SHOP_URL } from '~/services/global.variables';
export const useFrontStore = defineStore('front', {
    state: ()=>({
        cart: [],
        brands: [],
        shop_id: null,
        current_template: "home",
        product: null,
        brand_id: null,
        old_cart_id: null,
        brand_featured_products: {},
        cart_total: null,
        currencies: [],
        selected_currency: null,
        cart_id: null,
        guest_id: null,
        products: [],
        dummyProducts: [
            {   
              id: 1,
              name: 'Nivea Body Lotion Q10 400ml',
              image: '/images/products/nivea.jpg',
              price: '29.99',
              redirect_url: '/product/1',
              description: 'A rich body lotion that provides intense moisture and smoothness.',
              category: 'Skincare',
              brand: 'Nivea'
            },
            {   
              id: 2,
              name: "Babysoft 18's",
              image: '/images/products/tissue.jpg',
              price: '39.99',
              redirect_url: '/product/2',
              description: 'Soft and absorbent tissues, ideal for everyday use.',
              category: 'Household',
              brand: 'Babysoft'
            },
            {   
              id: 3,
              name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
              image: '/images/products/vaseline.jpg',
              price: '49.99',
              redirect_url: '/product/3',
              description: 'Multi-purpose petroleum jelly that helps protect and heal the skin.',
              category: 'Skincare',
              brand: 'Vaseline'
            },
            {   
              id: 4,
              name: 'Sunlight Dishwasher Lemon 750ml',
              image: '/images/products/sunlight.jpg',
              price: '59.99',
              redirect_url: '/product/4',
              description: 'Dishwasher liquid with a refreshing lemon scent and effective grease removal.',
              category: 'Cleaning',
              brand: 'Sunlight'
            },
            {   
              id: 5,
              name: 'Harpic Toilet Cleaner Potpourri 500ml',
              image: '/images/products/harpic.jpg',
              price: '69.99',
              redirect_url: '/product/5',
              description: 'Powerful toilet cleaner with a pleasant potpourri fragrance.',
              category: 'Cleaning',
              brand: 'Harpic'
            },
            {   
              id: 6,
              name: 'Nivea Body Lotion Q10 400ml',
              image: '/images/products/nivea.jpg',
              price: '29.99',
              redirect_url: '/product/1',
              description: 'A rich body lotion that provides intense moisture and smoothness.',
              category: 'Skincare',
              brand: 'Nivea'
            },
            {   
              id: 7,
              name: "Babysoft 18's",
              image: '/images/products/tissue.jpg',
              price: '39.99',
              redirect_url: '/product/2',
              description: 'Soft and absorbent tissues, ideal for everyday use.',
              category: 'Household',
              brand: 'Babysoft'
            },
            {   
              id: 8,
              name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
              image: '/images/products/vaseline.jpg',
              price: '49.99',
              redirect_url: '/product/3',
              description: 'Multi-purpose petroleum jelly that helps protect and heal the skin.',
              category: 'Skincare',
              brand: 'Vaseline'
            },
            {   
              id: 9,
              name: 'Sunlight Dishwasher Lemon 750ml',
              image: '/images/products/sunlight.jpg',
              price: '59.99',
              redirect_url: '/product/4',
              description: 'Dishwasher liquid with a refreshing lemon scent and effective grease removal.',
              category: 'Cleaning',
              brand: 'Sunlight'
            },
            {   
              id: 10,
              name: 'Harpic Toilet Cleaner Potpourri 500ml',
              image: '/images/products/harpic.jpg',
              price: '69.99',
              redirect_url: '/product/5',
              description: 'Powerful toilet cleaner with a pleasant potpourri fragrance.',
              category: 'Cleaning',
              brand: 'Harpic'
            },
            {   
              id: 11,
              name: 'Nivea Body Lotion Q10 400ml',
              image: '/images/products/nivea.jpg',
              price: '29.99',
              redirect_url: '/product/1',
              description: 'A rich body lotion that provides intense moisture and smoothness.',
              category: 'Skincare',
              brand: 'Nivea'
            },
            {   
              id: 12,
              name: "Babysoft 18's",
              image: '/images/products/tissue.jpg',
              price: '39.99',
              redirect_url: '/product/2',
              description: 'Soft and absorbent tissues, ideal for everyday use.',
              category: 'Household',
              brand: 'Babysoft'
            },
            {   
              id: 13,
              name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
              image: '/images/products/vaseline.jpg',
              price: '49.99',
              redirect_url: '/product/3',
              description: 'Multi-purpose petroleum jelly that helps protect and heal the skin.',
              category: 'Skincare',
              brand: 'Vaseline'
            },
            {   
              id: 14,
              name: 'Sunlight Dishwasher Lemon 750ml',
              image: '/images/products/sunlight.jpg',
              price: '59.99',
              redirect_url: '/product/4',
              description: 'Dishwasher liquid with a refreshing lemon scent and effective grease removal.',
              category: 'Cleaning',
              brand: 'Sunlight'
            },
            {   
              id: 15,
              name: 'Harpic Toilet Cleaner Potpourri 500ml',
              image: '/images/products/harpic.jpg',
              price: '69.99',
              redirect_url: '/product/5',
              description: 'Powerful toilet cleaner with a pleasant potpourri fragrance.',
              category: 'Cleaning',
              brand: 'Harpic'
            },
            {   
              id: 16,
              name: 'Nivea Body Lotion Q10 400ml',
              image: '/images/products/nivea.jpg',
              price: '29.99',
              redirect_url: '/product/1',
              description: 'A rich body lotion that provides intense moisture and smoothness.',
              category: 'Skincare',
              brand: 'Nivea'
            },
            {   
              id: 17,
              name: "Babysoft 18's",
              image: '/images/products/tissue.jpg',
              price: '39.99',
              redirect_url: '/product/2',
              description: 'Soft and absorbent tissues, ideal for everyday use.',
              category: 'Household',
              brand: 'Babysoft'
            },
            {   
              id: 18,
              name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
              image: '/images/products/vaseline.jpg',
              price: '49.99',
              redirect_url: '/product/3',
              description: 'Multi-purpose petroleum jelly that helps protect and heal the skin.',
              category: 'Skincare',
              brand: 'Vaseline'
            },
            {   
              id: 19,
              name: 'Sunlight Dishwasher Lemon 750ml',
              image: '/images/products/sunlight.jpg',
              price: '59.99',
              redirect_url: '/product/4',
              description: 'Dishwasher liquid with a refreshing lemon scent and effective grease removal.',
              category: 'Cleaning',
              brand: 'Sunlight'
            },
            {   
              id: 20,
              name: 'Harpic Toilet Cleaner Potpourri 500ml',
              image: '/images/products/harpic.jpg',
              price: '69.99',
              redirect_url: '/product/5',
              description: 'Powerful toilet cleaner with a pleasant potpourri fragrance.',
              category: 'Cleaning',
              brand: 'Harpic'
            },
            {   
              id: 21,
              name: 'Handy And All Purpose Cleaner Lavendar 750ml',
              image: '/images/products/handy_andy.jpg',
              price: '79.99',
              redirect_url: '/product/6',
              description: 'Versatile cleaner with a soothing lavender scent, ideal for various surfaces.',
              category: 'Cleaning',
              brand: 'Handy And'
            },
            {   
              id: 22,
              name: 'Raid',
              image: '/images/products/raid.jpg',
              price: '89.99',
              redirect_url: '/product/7',
              description: 'Effective insect killer with long-lasting protection.',
              category: 'Pest Control',
              brand: 'Raid'
            },
            {   
              id: 23,
              name: 'Sta Soft',
              image: '/images/sta-soft.jpg',
              price: '99.99',
              redirect_url: '/product/8',
              description: 'Softening fabric conditioner for a fresh and smooth feel.',
              category: 'Laundry',
              brand: 'Sta Soft'
            },
            {   
              id: 24,
              name: 'Geisha Soup',
              image: '/images/products/geisha.jpg',
              price: '99.99',
              redirect_url: '/product/8',
              description: 'Luxurious soap with a rich lather and pleasant fragrance.',
              category: 'Personal Care',
              brand: 'Geisha'
            },
            {   
              id: 25,
              name: 'Dettol Anti Bacterial Soap Even Tone 175g',
              image: '/images/products/detol.jpg',
              price: '99.99',
              redirect_url: '/product/8',
              description: 'Antibacterial soap that helps to even out skin tone and keep it healthy.',
              category: 'Personal Care',
              brand: 'Dettol'
            }
          ],
       
    }),
    getters: {},
    actions: {
      async getBrands() {
    
        const url = new URL(`${SHOP_URL}/api/shop-brands`);
        const token = useCookie('token').value || ""
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        try {
            const response = await fetch(url, {
                method: "GET",
                headers,
            });
            const data = await response.json();
            
            return data;
        } finally {
        }
    },
    async getProducts(my_params:any) {
      const url = new URL(`${SHOP_URL}/api/products/shop`);
      const params:any = {
          per_page: `${my_params.per_page}`,
          page:`${my_params.page}`,
          shop_brand_id: `${my_params.shop_brand_id}`,
          shop_id: `${my_params.shop_id}`
      };
      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      );
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getProductBrands(my_params:any) {
      const url = new URL(`${SHOP_URL}/api/product-brands`);
      const params:any = {
          per_page: `${my_params.per_page}`,
          page:`${my_params.page}`
      };
      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      );
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getSearchResults(search_params: any) {
      const url = `${SHOP_URL}/api/search`;
    
      try {
        const response = await axios.get(url, {
          params: {
            shop_id: search_params?.shop_id, // Defaulting to shop_id 8 if not provided
            search: search_params?.search_text, // Default search query if not provided
          },
          headers: {
            'accept': '*/*',
            'X-CSRF-TOKEN': '',  // Add CSRF token if required
          },
        });
    
        console.log(response.data); // Log the response data
        return response.data; // Return the data if needed
      } catch (error) {
        console.error('Error fetching search results:', error);
        throw error; // Re-throw the error to handle it in the calling function
      }
    },
    async getAllCategories(my_params:any) {
      const url = new URL(`${SHOP_URL}/api/categories/parent`);
      const params:any = {
          per_page: `${my_params.per_page}`,
          page:`${my_params.page}`
      };
      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      );
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getFeaturedProducts(my_params:any) {
      const url = new URL(`${SHOP_URL}/api/featured-products/${my_params.id}`);
      const params:any = {
          per_page: `${my_params.per_page}`,
          page:`${my_params.page}`,
          is_shop_brand: `${my_params.is_shop_brand}`
      };
      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      );
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getFeaturedMenus(id:any) {
      const url = new URL(`${SHOP_URL}/api/featured-menus/${id}`);
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getRelatedProducts(my_params:any) {
      const url = new URL(`${SHOP_URL}/api/products/related`);
      const params:any = {
          per_page: `${my_params.per_page}`,
          page:`${my_params.page}`,
          shop_brand_id: `${my_params.shop_brand_id}`,
          shop_id: `${my_params.shop_id}`,
          category_id: `${my_params.category_id}`
      };
      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      );
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getRelatedProductsByBrand(my_params:any) {
      const url = new URL(`${SHOP_URL}/api/products/brand`);
      const params:any = {
          per_page: `${my_params.per_page}`,
          page:`${my_params.page}`,
          shop_brand_id: `${my_params.shop_brand_id}`,
          shop_id: `${my_params.shop_id}`,
          brand_id: `${my_params.brand_id}`
      };
      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      );
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getAllCurrencies(my_params:any) {
      const url = new URL(`${SHOP_URL}/api/currencies`);
      const params:any = {
          per_page: `${my_params.per_page}`,
          page:`${my_params.page}`
      };
      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      );
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getAllAddressTypes() {
      const url = new URL(`${SHOP_URL}/api/address-types`);
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async getPaymentOptions(my_params:any) {
      const url = new URL(`${SHOP_URL}/api/payment-methods`);
      const params:any = {
          per_page: `${my_params.per_page}`,
          page:`${my_params.page}`
      };
      Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
      );
      const token = useCookie('token').value || ""
      const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
      };
  
      try {
          const response = await fetch(url, {
              method: "GET",
              headers,
          });
          const data = await response.json();
          return data;
      } finally {
      }
    },
    async individualRegistration(my_params: any) {
      const url = `${SHOP_URL}/api/auth/signup`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      const body = {
        name: my_params.name,
        email: my_params.email,
        contact_number: my_params.contact_number,
        whatsapp_number: my_params.whatsapp_number,
        password: my_params.password,
        password_confirmation: my_params.password_confirmation,
      };
      
      try {
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async createCart(my_params: any) {
      const url = `${SHOP_URL}/api/carts`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      const body = {
        user_id: my_params.user_id ? my_params.user_id : "",
        guest_id: my_params.guest_id ? my_params.guest_id : "",
        shop_id: my_params.shop_id ? my_params.shop_id : "",
        
      };
      
      try {
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async createAddress(my_params: any) {
      const url = `${SHOP_URL}/api/addresses`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      const body = {
        name: my_params.name,
        user_id: my_params.user_id,
        address_type_id: my_params.address_type,
        suburb: my_params.suburb,
        street: my_params.street,
        city: my_params.city,
        country: my_params.country
      };
      
      try {
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async addCartItem(my_params: any) {
      const url = `${SHOP_URL}/api/cart-items`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
 
      const body = {
        cart_id: my_params.cart_id,
        product_id: my_params.product_id,
        quantity: my_params.quantity,
        unit_price: my_params.unit_price,
        total_price: my_params.total_price
      };
      
      try {
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async initiatePayment(info: any) {
      // Prepare the FormData object
      console.log('inside payment initialization',info)
      const formData = new FormData();
      formData.append('order_id', info.order_id); // Assuming `info.id` contains the order ID
      formData.append('payment_method', info.payment_method); // Assuming `info.payment_method` is the payment method
    
      // Define the configuration for the axios request
      const config = {
        method: 'post',
        url: `${SHOP_URL}/api/payments`,
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
          'Content-Type': 'multipart/form-data',
          // Add X-CSRF-TOKEN if required by the API
          'X-CSRF-TOKEN': info.csrf_token || '',
        },
        data: formData, // Send the formData directly
      };
    
      // Make the axios request
      try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data));
        return {
          data: response.data,
          success: true,
        };
      } catch (error) {
        console.log(error);
        return {
          success: false,
        };
      }
    },
    
    async editCartItem(my_params: any) {
      const url = `${SHOP_URL}/api/cart-items/edit/${my_params.id}`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
 
      const body = {
        cart_id: my_params.cart_id,
        product_id: my_params.product_id,
        quantity: my_params.quantity,
        unit_price: my_params.unit_price,
        total_price: my_params.total_price
      };
      
      try {
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async getCart() {
      const url = `${SHOP_URL}/api/carts/${this.cart_id}`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      try {
        const response = await fetch(url, {
          method: "GET",
          headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async getOlderCart() {
      const url = `${SHOP_URL}/api/carts/${this.old_cart_id}`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      try {
        const response = await fetch(url, {
          method: "GET",
          headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async getMyAddresses(id:any) {
      const url = `${SHOP_URL}/api/addresses/${id}`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      try {
        const response = await fetch(url, {
          method: "GET",
          headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async getPaymentStatus(id:any) {
      const url = `${SHOP_URL}/api/payments/status/${id}`;
      const token = useCookie('token').value || "";
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      try {
        const response = await fetch(url, {
          method: "GET",
          headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async getChildrenCategories(id:any) {
      const url = `${SHOP_URL}/api/categories/${id}`;
      const token = useCookie('token').value || "";
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      try {
        const response = await fetch(url, {
          method: "GET",
          headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async getUser(id:any) {
      const url = `${SHOP_URL}/api/users/${id}`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      try {
        const response = await fetch(url, {
          method: "GET",
          headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async deleteCartItem(my_params:any) {
      const url = `${SHOP_URL}/api/cart-items/${my_params.id}`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      try {
        const response = await fetch(url, {
          method: "DELETE",
          headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    async createOrder(my_params: any) {
      const url = `${SHOP_URL}/api/orders`;
      const token = useCookie('token').value || "";
      
      const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      
      const body = {
        cart_id: my_params.cart_id,
        coupon_code: my_params.coupon_code,
        customer_name: my_params.customer_name,
        email: my_params.email,
        whatsapp_number: my_params.whatsapp_number,
        customer_mobile: my_params.customer_mobile,
        billing_address: {
          name: my_params.billing_address.name,
          address: my_params.billing_address.address,
          city: my_params.billing_address.city,
          country: my_params.billing_address.country,
          phone: my_params.billing_address.phone
        },
        delivery_address: {
          name: my_params.delivery_address.name,
          address: my_params.delivery_address.address,
          city: my_params.delivery_address.city,
          country: my_params.delivery_address.country,
          phone: my_params.delivery_address.phone
        },
        payment_method_id: my_params.payment_method_id,
        delivery_option: my_params.delivery_option,
        payment_method: my_params.payment_method,
        currency_id: my_params.currency_id,
        currency: my_params.currency,
        discount: 0,
        delivery_amount: my_params.delivery_amount,
        total_amount: my_params.total_amount,
      };
      
      try {
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
    }
   })