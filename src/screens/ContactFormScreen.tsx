import React, { useState } from "react";
import { TouchableOpacity, Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { APP_SCREEN } from "@typings/navigation";
import { Form, FormInput, FormPhoneInput } from "@components/form";

import { useDispatch } from "react-redux";
import { generateUniqueId } from "@library/generateUniqueId";

import { addContact, editContact } from "@store/actions";
import { add_contact_form_schema } from "@library/yup-validate/addContact";
import { Categories, ContactProps } from "@typings//index";
import RadioButton from "@components/RadioButton";

// @ts-ignore
const ContactFormScreen: React.FC = ({ navigation, route }) => {
  const contact = route.params?.contact;

  const [category, setCategory] = useState<Categories>(contact?.category ?? Categories.Friends);

  const dispatch = useDispatch();

  const goToAllContacts = () => {
    return navigation.navigate(APP_SCREEN.ALL_CONTACTS);
  };

  const addContactInStore = (data: ContactProps) => {
    dispatch(
      addContact({
        id: generateUniqueId(10),
        name: data.name,
        email: data.email,
        phone: data.phone,
        category,
      }),
    );

    goToAllContacts();
  };

  const editContactInStore = (data: ContactProps) => {
    dispatch(
      editContact({
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        category,
      }),
    );

    goToAllContacts();
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>{contact ? "Edit" : "Create new"} contact</Text>
      </View>
      <Form defaultValues={contact} resolver={add_contact_form_schema}>
        {({ watch, formState, handleSubmit }) => {
          return (
            <>
              <FormInput name="name" defaultValue={watch("name")} placeholder="Your name" />
              <FormInput name="email" defaultValue={watch("email")} placeholder="Email" />
              <FormPhoneInput name="phone" defaultValue={watch("phone")} placeholder="Phone" />

              <View style={styles.radioGroup}>
                <TouchableOpacity onPress={() => setCategory(Categories.Family)}>
                  <RadioButton text="Family" selected={category === Categories.Family} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCategory(Categories.Friends)}>
                  <RadioButton text="Friends" selected={category === Categories.Friends} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCategory(Categories.Work)}>
                  <RadioButton text="Work" selected={category === Categories.Work} />
                </TouchableOpacity>
              </View>

              <Button
                title={contact ? "Save" : "Add new contact"}
                onPress={handleSubmit(contact ? editContactInStore : addContactInStore)}
              />
            </>
          );
        }}
      </Form>
      <Button title="Go to contacts" onPress={goToAllContacts} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    opacity: 0.7,
  },
  number: {
    fontSize: 16,
    color: "blue",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
});

export { ContactFormScreen };
