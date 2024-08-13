import { ContactProps } from "@api/index";

export const ADD_CONTACT_TYPE = "ADD_CONTACT_TYPE";

export const addContact = (payload: ContactProps) => {
  return {
    type: ADD_CONTACT_TYPE,

    payload,
  };
};
