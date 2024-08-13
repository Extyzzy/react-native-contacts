import React from "react";
import { Button, FlatList, View } from "react-native";
import { ContactItem } from "@components/Card/ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { APP_SCREEN, RootStackScreenProps } from "@typings/navigation";
import { ContactProps, StateInterface } from "@typings/index";
import { deleteContact } from "@api/actions";
import NotificationOffLinBar from "@components/NotificationOffLinBar";

// @ts-ignore
const AllContacts: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const contactsState = useSelector((state: StateInterface) => state.contacts);

  const goToForm = () => {
    return navigation.navigate(APP_SCREEN.FORM_CONTACT);
  };

  const goToFormWithContact = (contact: ContactProps) => {
    return navigation.navigate(APP_SCREEN.FORM_CONTACT, { contact });
  };

  const onDeleteContact = (id: string) => {
    dispatch(
      deleteContact({
        id,
      }),
    );
  };

  return (
    <View>
      <NotificationOffLinBar />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={contactsState as never}
        refreshing={false}
        onRefresh={() => {}}
        renderItem={data => {
          return (
            <ContactItem
              contact={data.item}
              onEditHandler={() => {
                goToFormWithContact(data.item);
              }}
              onDeleteHandler={() => onDeleteContact(data.item.id)}
            />
          );
        }}
        onEndReachedThreshold={0.2}
        contentContainerStyle={{ flexGrow: 1 }}
        //ListEmptyComponent={<Empty />}
        keyExtractor={(item, index) => "default-renderer-" + index}
      />

      <Button title="Create contact" onPress={goToForm} />
    </View>
  );
};

export { AllContacts };
