import C from "./actionTypes";
import { v4 } from "uuid";

export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
});

export const removeColor = id => ({
  type: C.REMOVE_COLOR,
  id
});

export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
});
export const selectColor = id => ({
  type: C.SELECT_COLOR,
  id
});

export const savePallet = palletObj => ({
  type: C.ADD_PALLET,
  palletObj
});

export const addPalletColors = (palletName, colors) => ({
  type: C.ADD_PALLET_COLORS,
  colors,
  palletName
});
