interface InventoryCharacterType {
  characterNo: number;
  character: {
    image: string;
  };
}
/** 인벤토리에 올라가는 아이템, 캐릭터 타입 정의 */
export interface InventoryItemType extends InventoryCharacterType {
  no: number;
  itemNo: number;
  status: boolean;
  item: {
    no: number;
    image: string;
    type?: string;
  };
}
