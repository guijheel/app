import {  setIsLoggedInData, setUsernameData} from './dataApi';
import { getAppDataFS } from './dataApi';

import { ActionType } from './types'; 
import { AppIfcmState, ShoppingCartItem, Order} from './models';


  export const loadAppData = () => async (dispatch: React.Dispatch<any>) => {

  console.log("debut loading data");
  dispatch(setLoading(true));

  //const data = await getAppData();
  //const data = await getAppDataFS();

  const data = await getAppDataFS();

  console.log("fin loading data");
  console.log(data);
  
  console.log("local storage data - setdata");
 // dispatch(setData(data));
  dispatch(setLoading(false));
  console.log("fin set data");

}


export const setLoading = (isLoading: boolean) => ({
type: 'set-app-loading',
isLoading
} as const);

export const setData = (data: Partial<AppIfcmState>) => ({
type: 'set-app-data',
data
} as const);

export const setIsLoggedIn = (loggedIn: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(loggedIn);
  return ({
    type: 'set-is-loggedin',
    loggedIn
  } as const)
};

export const setUsername = (username?: string) => async (dispatch: React.Dispatch<any>) => {
  await setUsernameData(username);
  return ({
    type: 'set-username',
    username
  } as const);
};

export const setCurrentOrder = (currentOrder: Order) => ({
  type: 'set-currentorder',
  currentOrder 
} as const);


export const addItemToShoppingCart = (product: ShoppingCartItem) => ({
  type: 'add-item',
  product
} as const);

export const removeItemToShoppingCart = (product: ShoppingCartItem) => ({
  type: 'remove-item',
  product
} as const);


export const incrementItemQty = (product: ShoppingCartItem) => ({
  type: 'increment-qty',
  product
} as const);

export const decreaseItemQty = (product: ShoppingCartItem) => ({
  type: 'decrease-qty',
  product
} as const);

export type SessionsActions =
| ActionType<typeof setLoading>
| ActionType<typeof setData>
| ActionType<typeof addItemToShoppingCart>
| ActionType<typeof removeItemToShoppingCart>
| ActionType<typeof incrementItemQty>
| ActionType<typeof decreaseItemQty>
| ActionType<typeof setCurrentOrder>
