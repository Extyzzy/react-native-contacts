export const DELETE_CONTACT_TYPE = "DELETE_CONTACT_TYPE";

interface DeleteContactProps {
  id: string;
}

export const deleteContact = (payload: DeleteContactProps) => {
  return {
    type: DELETE_CONTACT_TYPE,

    id: payload.id,
  };
};
