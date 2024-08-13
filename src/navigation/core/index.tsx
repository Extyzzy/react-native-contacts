import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { APP_SCREEN, RootStackParamList } from "@typings/navigation";
import { ContactsScreen } from "@screens/ContactsScreen";
import { ContactFormScreen } from "@screens/ContactFormScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const CoreNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={APP_SCREEN.ALL_CONTACTS} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={APP_SCREEN.ALL_CONTACTS} component={ContactsScreen} />
      <Stack.Screen name={APP_SCREEN.FORM_CONTACT} component={ContactFormScreen} />
    </Stack.Navigator>
  );
};

export default CoreNavigator;
