import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import contactReducer from "@api/reducers/contact";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
