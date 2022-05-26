import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import handleCart from "../redux/reducer/handleCart";
import {userLoginReducer} from "../redux/reducer/userReducer";
import { productsreducer } from "./reducer/ProductReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);


const rootReducer = combineReducers({
    mycart:handleCart,
    login:userLoginReducer,
    products:productsreducer

  });
  
  export const store = createStore(rootReducer, enhancer);

 

   
    