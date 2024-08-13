import React from "react";
import { FlatList, View } from "react-native";
import { ContactItem } from "@components/Card/ContactItem";
import { useSelector } from "react-redux";
import { Categories, ContactProps, StateInterface } from "@typings/index";

const FriendsContacts: React.FC = () => {
  const contactsState = useSelector((state: StateInterface) => state.contacts);

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={contactsState.filter((contact: ContactProps) => contact.category === Categories.Friends)}
        refreshing={false}
        onRefresh={() => {}}
        renderItem={data => {
          return <ContactItem contact={data.item} />;
        }}
        onEndReachedThreshold={0.2}
        contentContainerStyle={{ flexGrow: 1 }}
        //ListEmptyComponent={<Empty />}
        keyExtractor={(item, index) => "default-renderer-" + index}
      />
    </View>
  );
};

export { FriendsContacts };
