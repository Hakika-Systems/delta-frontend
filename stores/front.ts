import { defineStore } from 'pinia';
import axios from 'axios';

export const useFrontStore = defineStore('front', {
    state: ()=>({
        cart: [],
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
      
    }
   })