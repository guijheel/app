import { combineReducers } from './combineReducers';
import { sessionsReducer } from './sessionReducers';
import { userReducer } from './userReducers';
import {Order } from './models';

export const initialState: AppState = {
  data: {
    propheticmessage : "" as any,
    verseoftoday : "" as any,
    events: [],
    shopping: [],
    shoppingitems: [],
    teachings: [],
    lessons: [],
    myunlockedteachings : [],
    myOrders : [],
    branches : [],
    loading: false,
    currentorder : {} as Order

  },
  user: {
    hasSeenTutorial: false,
    isLoggedin: false,
    loading: false

  }
};


export const reducers = combineReducers({
  data: sessionsReducer,
  user: userReducer
});


export type AppState = ReturnType<typeof reducers>;