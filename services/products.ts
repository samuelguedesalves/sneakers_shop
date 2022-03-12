import { Product } from "../types/Product"

const products: Product[] = [
  {
    id: 0,
    name: 'Court Vision',
    label: 'Nike',
    tags: ['nike', 'court', 'vision'],
    price: 30000,
    inventory: 10,
    gallery: [
      {
        image: {
          url: './images/image3.png',
          alt: 'Nike Court Vision',
        },
        thumbnail: {
          url: './images/image6.png',
          alt: 'Nike Court Vision',
        },
      },
      {
        image: {
          url: './images/image2.png',
          alt: 'Nike Court Vision',
        },
        thumbnail: {
          url: './images/image5.png',
          alt: 'Nike Court Vision',
        },
      },
      {
        image: {
          url: './images/image1.png',
          alt: 'Nike Court Vision',
        },
        thumbnail: {
          url: './images/image4.png',
          alt: 'Nike Court Vision',
        },
      },
    ]
  },
  {
    id: 1,
    name: 'Streetcheck',
    label: 'Adidas',
    tags: ['adidas', 'streetcheck'],
    price: 30000,
    inventory: 10,
    gallery: [
      {
        image: {
          url: './images/image9.png',
          alt: 'Adidas Streetcheck',
        },
        thumbnail: {
          url: './images/image12.png',
          alt: 'Adidas Streetcheck',
        },
      },
      {
        image: {
          url: './images/image8.png',
          alt: 'Adidas Streetcheck',
        },
        thumbnail: {
          url: './images/image11.png',
          alt: 'Adidas Streetcheck',
        },
      },
      {
        image: {
          url: './images/image7.png',
          alt: 'Adidas Streetcheck',
        },
        thumbnail: {
          url: './images/image10.png',
          alt: 'Adidas Streetcheck',
        },
      },
    ]
  },
  {
    id: 2,
    name: 'Chuck Taylor All Star',
    label: 'Converse',
    tags: ['converse', 'chuck', 'taylor', 'all', 'star'],
    price: 20000,
    inventory: 10,
    gallery: [
      {
        image: {
          url: './images/image15.png',
          alt: 'Converse Chuck Taylor All Star',
        },
        thumbnail: {
          url: './images/image18.png',
          alt: 'Converse Chuck Taylor All Star',
        },
      },
      {
        image: {
          url: './images/image13.png',
          alt: 'Converse Chuck Taylor All Star',
        },
        thumbnail: {
          url: './images/image16.png',
          alt: 'Converse Chuck Taylor All Star',
        },
      },
      {
        image: {
          url: './images/image14.png',
          alt: 'Converse Chuck Taylor All Star',
        },
        thumbnail: {
          url: './images/image17.png',
          alt: 'Converse Chuck Taylor All Star',
        },
      },

    ]
  },
]

export function loadProducts() {
  return products
}