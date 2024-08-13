import { ADD_CONTACT_TYPE, DELETE_CONTACT_TYPE, EDIT_CONTACT_TYPE } from "@api/actions";
import { ContactProps, StateInterface } from "@typings/index";

const initialState = {
  contacts: [],
};

const contactReducer = (
  state: StateInterface = initialState,
  action: {
    id: string;
    type: any;
    payload: never;
  },
) => {
  switch (action.type) {
    case ADD_CONTACT_TYPE:
      return Object.assign({}, state, {
        contacts: [...state.contacts, action.payload],
      });
    case EDIT_CONTACT_TYPE:
      const contactIndex = state.contacts.findIndex(({ id }) => id === (action.payload as ContactProps).id);

      state.contacts.splice(contactIndex, 1);

      return Object.assign({}, state, {
        contacts: [...state.contacts, action.payload],
      });
    case DELETE_CONTACT_TYPE:
      return Object.assign({}, state, {
        contacts: state.contacts.filter(contact => contact.id !== action.id),
      });

    default:
      return state;
  }
};

export default contactReducer;
