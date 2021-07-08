import { Dispatch } from "@reduxjs/toolkit";


export interface Props {
  route: any;
  navigation: any;
}

export interface SlicesLogin {}

export interface SlicesHome {
  getIndicadoresRedux: () => (dispatch: Dispatch) => void;
}

export interface SlicesDetail {
  getIndicadoresByTypeRedux: (type: string) => (dispatch: Dispatch) => void;
}