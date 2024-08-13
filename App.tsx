import React from "react";
import AppNavigation from "@navigation/index";
import { Provider } from "react-redux";
import { store, persistor } from "@store/index";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
