import { defineStore } from 'pinia';
import axios from 'axios';

export const useFrontStore = defineStore('front', {
    state: ()=>({
        cart: [],
        dummyProducts: [
            {   id: 1,
                name: 'Nivea Body Lotion Q10 400ml',
                image: '/images/products/nivea.jpg',
                price: '29.99',
                redirect_url: '/product/1'
            },
            {   id: 2,
                name: "Babysoft 18's",
                image: '/images/products/tissue.jpg',
                price: '39.99',
                redirect_url: '/product/2'
            },
            {   id: 3,
                name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
                image: '/images/products/vaseline.jpg',
                price: '49.99',
                redirect_url: '/product/3'
            },
            {   id: 4,
                name: 'Sunlight Dishwasher Lemon 750ml',
                image: '/images/products/sunlight.jpg',
                price: '59.99',
                redirect_url: '/product/4'
            },
            {   id: 5,
                name: 'Harpic Toilet Cleaner Potpourri 500ml',
                image: '/images/products/harpic.jpg',
                price: '69.99',
                redirect_url: '/product/5'
            },
            {   id: 6,
                name: 'Nivea Body Lotion Q10 400ml',
                image: '/images/products/nivea.jpg',
                price: '29.99',
                redirect_url: '/product/1'
            },
            {   id: 7,
                name: "Babysoft 18's",
                image: '/images/products/tissue.jpg',
                price: '39.99',
                redirect_url: '/product/2'
            },
            {   id: 8,
                name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
                image: '/images/products/vaseline.jpg',
                price: '49.99',
                redirect_url: '/product/3'
            },
            {   id: 9,
                name: 'Sunlight Dishwasher Lemon 750ml',
                image: '/images/products/sunlight.jpg',
                price: '59.99',
                redirect_url: '/product/4'
            },
            {   id: 10,
                name: 'Harpic Toilet Cleaner Potpourri 500ml',
                image: '/images/products/harpic.jpg',
                price: '69.99',
                redirect_url: '/product/5'
            },
            {   id: 11,
                name: 'Nivea Body Lotion Q10 400ml',
                image: '/images/products/nivea.jpg',
                price: '29.99',
                redirect_url: '/product/1'
            },
            {   id: 12,
                name: "Babysoft 18's",
                image: '/images/products/tissue.jpg',
                price: '39.99',
                redirect_url: '/product/2'
            },
            {   id: 13,
                name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
                image: '/images/products/vaseline.jpg',
                price: '49.99',
                redirect_url: '/product/3'
            },
            {   id: 14,
                name: 'Sunlight Dishwasher Lemon 750ml',
                image: '/images/products/sunlight.jpg',
                price: '59.99',
                redirect_url: '/product/4'
            },
            {   id: 15,
                name: 'Harpic Toilet Cleaner Potpourri 500ml',
                image: '/images/products/harpic.jpg',
                price: '69.99',
                redirect_url: '/product/5'
            },
            {   id: 16,
                name: 'Nivea Body Lotion Q10 400ml',
                image: '/images/products/nivea.jpg',
                price: '29.99',
                redirect_url: '/product/1'
            },
            {   id: 17,
                name: "Babysoft 18's",
                image: '/images/products/tissue.jpg',
                price: '39.99',
                redirect_url: '/product/2'
            },
            {   id: 18,
                name: 'Vaseline Blue Seal Petroleum Jelly 100ml',
                image: '/images/products/vaseline.jpg',
                price: '49.99',
                redirect_url: '/product/3'
            },
            {   id: 19,
                name: 'Sunlight Dishwasher Lemon 750ml',
                image: '/images/products/sunlight.jpg',
                price: '59.99',
                redirect_url: '/product/4'
            },
            {   id: 20,
                name: 'Harpic Toilet Cleaner Potpourri 500ml',
                image: '/images/products/harpic.jpg',
                price: '69.99',
                redirect_url: '/product/5'
            },
            {   id: 21,
                name: 'Handy And All Purpose Cleaner Lavendar 750ml',
                image: '/images/products/handy_andy.jpg',
                price: '79.99',
                redirect_url: '/product/6'
            },
            {   id: 22,
                name: 'Raid',
                image: '/images/products/raid.jpg',
                price: '89.99',
                redirect_url: '/product/7'
            },
            {   id: 23,
                name: 'Sta Soft',
                image: '/images/sta-soft.jpg',
                price: '99.99',
                redirect_url: '/product/8'
            },
            {   id: 24,
                name: 'Geisha Soup',
                image: '/images/products/geisha.jpg',
                price: '99.99',
                redirect_url: '/product/8'
            },
            {   id: 25,
                name: 'Dettol Anti Bacterial Soap Even Tone 175g',
                image: '/images/products/detol.jpg',
                price: '99.99',
                redirect_url: '/product/8'
            }
        ]
    }),
    getters: {},
    actions: {
      
    }
   })