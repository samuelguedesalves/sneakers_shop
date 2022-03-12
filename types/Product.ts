export type Media = {
  image: {
    url: string;
    alt: string;
  };
  thumbnail: {
    url: string;
    alt: string;
  };
}

export type Product = {
  id: number,
  name: string;
  label: string;
  tags: string[];
  price: number;
  inventory: number;
  gallery: Media[];
}