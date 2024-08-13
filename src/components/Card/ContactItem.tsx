import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ContactProps } from "@api/index";

export interface IContactItem {
  contact: ContactProps;
  onDeleteHandler?: () => void;
  onEditHandler?: () => void;
}

export const ContactItem = ({ contact, onEditHandler, onDeleteHandler }: IContactItem) => {
  const { email, name, phone } = contact;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.phone}>{phone}</Text>
      {onEditHandler && <Button title="Edit" onPress={onEditHandler} />}
      {onDeleteHandler && <Button title="Delete" onPress={onDeleteHandler} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    opacity: 0.7,
  },
  phone: {
    fontSize: 16,
    color: "blue",
  },
  delete: {
    color: "red",
    position: "absolute",
    right: 5,
  },
});
