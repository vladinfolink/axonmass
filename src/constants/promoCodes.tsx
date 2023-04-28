type PromoCode = {
  Code: string;
  Description: string;
  Type: number;
  Discount?: number;
  Category?: string;
};

export const promoCodes: {
  [key: string]: PromoCode;
} = {
  'freeShipping!': {
    'Code': 'freeShipping!',
    'Description': 'Free Shipping',
    'Type': 1
  },
  'APPL10': {
    'Code': 'APPL10',
    'Description': '10 % on all Apple Products',
    'Type': 2
  },
  'AUDIO15': {
    'Code': 'AUDIO15',
    'Description': '15% on all Audio Products',
    'Type': 3,
    'Discount': 0.15,
    'Category': 'audio'
  },
  'ELEC25': {
    'Code': 'ELEC25',
    'Description': '25% on all Electronic Products',
    'Type': 4
  },
}