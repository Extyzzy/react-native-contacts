import React from "react";
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TABS, TabsParams } from "@typings/navigation/contacts/tabs";
import { AllContacts } from "@screens/tabs/AllContacts";
import { FamilyContacts } from "@screens/tabs/FamilyContacts";
import { FriendsContacts } from "@screens/tabs/FriendsContacts";
import { WorkContacts } from "@screens/tabs/WorkContacts";

const Tab = createBottomTabNavigator<TabsParams>();

const ContactsScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TABS.ALL} component={AllContacts} />
      <Tab.Screen name={TABS.FAMILY} component={FamilyContacts} />
      <Tab.Screen name={TABS.FRIENDS} component={FriendsContacts} />
      <Tab.Screen name={TABS.WORK} component={WorkContacts} />
    </Tab.Navigator>
  );
};

export { ContactsScreen };
