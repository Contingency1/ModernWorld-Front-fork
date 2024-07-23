interface ShopItemDataType {
  theme: string;
  type: string;
}

interface ShopCharacterDataType {
  species: string;
}

export interface ShopDataType extends ShopCharacterDataType, ShopItemDataType {
  no: number;
  name: string;
  description: string;
  image: string;
  price: number;
}
