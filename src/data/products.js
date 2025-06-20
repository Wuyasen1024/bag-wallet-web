import { ref } from 'vue';

export function useProducts() {
    const products = ref([
        /* bags */
        {
            id: 'b1',
            name: 'Ember Glow Tote',
            price: 150,
            image: '/home/pic/b1.png',
            isBestSeller: true
        },
        {
            id: 'b2',
            name: 'Celestial Clutch',
            price: 200,
            image: '/home/pic/b2.png',
            isBestSeller: true
        },
        {
            id: 'b3',
            name: 'Voyager Crossbody',
            price: 350,
            image: '/home/pic/b3.png',
            isBestSeller: true
        },
        {
            id: 'b4',
            name: 'Whisperwood Satchel',
            price: 400,
            image: '/home/pic/b4.png',
            isBestSeller: true
        },
        {
            id: 'b5',
            name: 'Minimalist Clutch',
            price: 500,
            image: '/home/pic/b5.png',
            isBestSeller: true
        },
        {
            id: 'b6',
            name: 'Travel Duffel Bag',
            price: 250,
            image: '/home/pic/b6.png',
            isBestSeller: true
        },
        {
            id: 'b7',
            name: 'Vintage Handbag',
            price: 600,
            image: '/home/pic/b7.png',
            isBestSeller: true
        },
        {
            id: 'b8',
            name: 'Modern Satchel',
            price: 450,
            image: '/home/pic/b8.png',
            isBestSeller: true
        },
        {
            id: 'b9',
            name: 'Urban Tote',
            price: 300,
            image: '/home/pic/b9.png',
            isBestSeller: false
        },
        {
            id: 'b10',
            name: 'Classic Shopper',
            price: 150,
            image: '/home/pic/b10.png',
            isBestSeller: false
        },
        {
            id: 'b11',
            name: 'Elegant Satchel',
            price: 500,
            image: '/home/pic/b11.png',
            isBestSeller: false
        },
        {
            id: 'b12',
            name: 'Signature Carryall',
            price: 500,
            image: '/home/pic/b12.png',
            isBestSeller: false
        },

         /* wallets */
        {
            id: 'p1',
            type: 'product',
            name: 'Lunafold Wallet',
            price: 100,
            image: '/home/pic/p1.png',
        },
        
        /* belts */
        {
            id: 'p2',
            type: 'product',
            name: 'Terra Cinch Belt',
            price: 50,
            image: '/home/pic/p2.png',
        },
        /* banners */
        {
            id: 'b1',
            type: 'banner',
            text: 'MINI LEATHER GOODS',
            image: '/home/pic/wallet.jpg',
        },
        {
            id: 'b2',
            type: 'banner',
            text: 'LEATHER BELTS',
            image: '/home/pic/B2.jpg',
        },

    ]);

    return { products };
} 