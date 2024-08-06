interface Props {
  height: string;
  width: string;
  $margin: string;
  $borderTop: string;
  $borderBottom: string;
  $borderRight: string;
  $borderLeft: string;
  $backColor: string;
  color: string;
  img: string;
  $fontSize: string;
  $inputColor: string;
  $justifyContent: string;
  $textAlign: string;
  $check: boolean;
  $display: string | boolean;
  $flexDirection: string;
  $alignItems: string;
  $imgWidth: string;
  $imgHeight: string;
  $imgMarginRight: string;
  $imgMarginLeft: string;
  font: string;
  props: string;
  //MainLogo
  $grid1: string;
  $grid2: string;
  $grid3: string;
  $grid4: string;
  $marginLeft: string;
  $marginRight: string;
  $marginTop: string;
  z_index: number;
  $border: string;
  $textColor: string;
  isSelected: boolean;
}

export interface StyleType extends Partial<Props> {}
