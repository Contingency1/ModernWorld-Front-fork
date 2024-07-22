interface Props {
  height: string;
  width: string;
  margin: string;
  borderTop: string;
  borderBottom: string;
  borderRight: string;
  borderLeft: string;
  backColor: string;
  color: string;
  img: string;
  fontSize: string;
  inputColor: string;
  justifyContent: string;
  textAlign: string;
  check: boolean;
  display: string;
  flexDirection: string;
  alignItems: string;
  $imgWidth: string;
  $imgHeight: string;
  $imgMarginRight: string;
  imgmarginleft: string;
  font: string;
  props: string;
  //MainLogo
  $grid1: string;
  $grid2: string;
  grid3: string;
  grid4: string;
  marginLeft: string;
  marginRight: string;
  margintop: string;
  z_index: number;
  border: string;
  textcolor: string;
}

export interface StyleType extends Partial<Props> {}
