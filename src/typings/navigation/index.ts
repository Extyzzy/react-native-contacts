import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

enum APP_SCREEN {
  ALL_CONTACTS = "ALL_CONTACTS",
  FORM_CONTACT = "FORM_CONTACT",
}

type RootStackParamList = {
  [APP_SCREEN.ALL_CONTACTS]: NavigatorScreenParams<any>;
  [APP_SCREEN.FORM_CONTACT]: NavigatorScreenParams<any>;
};

type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export { APP_SCREEN };
export type { RootStackScreenProps, RootStackParamList };
