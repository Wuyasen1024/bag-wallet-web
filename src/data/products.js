import { ref } from 'vue';

export function useProducts() {
    const products = ref([
        /* bags */
        {
            id: 'b1',
            name: 'Ember Glow Tote',
            price: 150,
            image: '/home/pic/b1.png',
            isBestSeller: true,
            isBags: true,
            dateAdded: '2023-01-01'
        },
        {
            id: 'b2',
            name: 'Celestial Clutch',
            price: 200,
            image: '/home/pic/b2.png',
            isBestSeller: true,
            isBags: true,
            dateAdded: '2023-01-15'
        },
        {
            id: 'b3',
            name: 'Voyager Crossbody',
            price: 350,
            image: '/home/pic/b3.png',
            isBestSeller: true,
            isBags: true,
            dateAdded: '2023-02-01'
        },
        {
            id: 'b4',
            name: 'Whisperwood Satchel',
            price: 400,
            image: '/home/pic/b4.png',
            isBestSeller: true,
            isBags: true,
            dateAdded: '2023-02-15'
        },
        {
            id: 'b5',
            name: 'Minimalist Clutch',
            price: 500,
            image: '/home/pic/b5.png',
            isBestSeller: true,
            isBags: true,
            dateAdded: '2023-03-01'
        },
        {
            id: 'b6',
            name: 'Travel Duffel Bag',
            price: 250,
            image: '/home/pic/b6.png',
            isBestSeller: true,
            isBags: true,
            dateAdded: '2023-03-15'
        },
        {
            id: 'b7',
            name: 'Vintage Handbag',
            price: 600,
            image: '/home/pic/b7.png',
            isBestSeller: true,
            isBags: true,
            dateAdded: '2023-04-01'
        },
        {
            id: 'b8',
            name: 'Modern Satchel',
            price: 450,
            image: '/home/pic/b8.png',
            isBestSeller: true,
            isBags: true,
            dateAdded: '2023-04-15'
        },
        {
            id: 'b9',
            name: 'Urban Tote',
            price: 300,
            image: '/home/pic/b9.png',
            isBestSeller: false,
            isBags: true,
            dateAdded: '2023-05-01'
        },
        {
            id: 'b10',
            name: 'Classic Shopper',
            price: 150,
            image: '/home/pic/b10.png',
            isBestSeller: false,
            isBags: true,
            dateAdded: '2023-05-15'
        },
        {
            id: 'b11',
            name: 'Elegant Satchel',
            price: 500,
            image: '/home/pic/b11.png',
            isBestSeller: false,
            isBags: true,
            dateAdded: '2023-06-01'
        },
        {
            id: 'b12',
            name: 'Signature Carryall',
            price: 500,
            image: '/home/pic/b12.png',
            isBestSeller: false,
            isBags: true,
            dateAdded: '2023-06-15'
        },

         /* wallets */
        {
            id: 'w1',
            type: 'product',
            name: 'Lunafold Wallet',
            price: 100,
            image: '/home/pic/w1.png',
            isWallets: true,
            dateAdded: '2023-07-01'
        },
        {
            id: 'w2',
            name: 'Velvet Crest Wallet',
            price: 150,
            image: '/home/pic/w2.png',
            isWallets: true,
            dateAdded: '2023-07-15'
        },
        {
            id: 'w3',
            name: 'Urban Pulse Wallet',
            price: 300,
            image: '/home/pic/w3.png',
            isWallets: true,
            dateAdded: '2023-08-01'
        },
        {
            id: 'w4',
            name: 'Midnight Echo Wallet',
            price: 250,
            image: '/home/pic/w4.png',
            isWallets: true,
            dateAdded: '2023-08-15'
        },
        {
            id: 'w5',
            name: 'Terra Nova Wallet',
            price: 100,
            image: '/home/pic/w5.png',
            isWallets: true,
            dateAdded: '2023-09-01'
        },
        {
            id: 'w6',
            name: 'Prism Fold Wallet',
            price: 150,
            image: '/home/pic/w6.png',
            isWallets: true,
            dateAdded: '2023-09-15'
        },
        {
            id: 'w7',
            name: 'Emberline Wallet',
            price: 300,
            image: '/home/pic/w7.png',
            isWallets: true,
            dateAdded: '2023-10-01'
        },
        {
            id: 'w8',
            name: 'Frosted Leaf Wallet',
            price: 100,
            image: '/home/pic/w8.png',
            isWallets: true,
            dateAdded: '2023-10-15'
        },
        {
            id: 'w9',
            name: 'Solstice Zip Wallet',
            price: 250,
            image: '/home/pic/w9.png',
            isWallets: true,
            dateAdded: '2023-11-01'
        },
        
        /* belts */
        {
            id: 'be1',
            type: 'product',
            name: 'Terra Cinch Belt',
            price: 50,
            image: '/home/pic/be1.png',
            isBelts: true,
            dateAdded: '2023-11-15'
        },
        {
            id: 'be2',
            name: 'Eclipse Weave Belt',
            price: 100,
            image: '/home/pic/be2.png',
            isBelts: true,
            dateAdded: '2023-12-01'
        },
        {
            id: 'be3',
            name: 'Urban Trek Belt',
            price: 50,
            image: '/home/pic/be3.png',
            isBelts: true,
            dateAdded: '2023-12-15'
        },
        {
            id: 'be4',
            name: 'Horizon Loop Belt',
            price: 50,
            image: '/home/pic/be4.png',
            isBelts: true,
            dateAdded: '2024-01-01'
        },
        {
            id: 'be5',
            name: 'Emberline Strap',
            price: 100,
            image: '/home/pic/be5.png',
            isBelts: true,
            dateAdded: '2024-01-15'
        },
        {
            id: 'be6',
            name: 'Solace Buckle Belt',
            price: 50,
            image: '/home/pic/be6.png',
            isBelts: true,
            dateAdded: '2024-02-01'
        },
        {
            id: 'be7',
            name: 'Driftwood Band',
            price: 100,
            image: '/home/pic/be7.png',
            isBelts: true,
            dateAdded: '2024-02-15'
        },
        {
            id: 'be8',
            name: 'Nova Thread Belt',
            price: 100,
            image: '/home/pic/be8.png',
            isBelts: true,
            dateAdded: '2024-03-01'
        },
        {
            id: 'be9',
            name: 'Granite Edge Belt',
            price: 50,
            image: '/home/pic/be9.png',
            isBelts: true,
            dateAdded: '2024-03-15'
        },


        /* banners */
        {
            id: 'B1',
            type: 'banner',
            text: 'MINI LEATHER GOODS',
            image: '/home/pic/wallet.jpg',
        },
        {
            id: 'B2',
            type: 'banner',
            text: 'LEATHER BELTS',
            image: '/home/pic/B2.jpg',
        },

    ]);

    return { products };
} 