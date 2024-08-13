import { ContactProps } from "@api/index";

export const EDIT_CONTACT_TYPE = "EDIT_CONTACT_TYPE";

export const editContact = (payload: ContactProps) => {
  return {
    type: EDIT_CONTACT_TYPE,

    payload,
  };
};
