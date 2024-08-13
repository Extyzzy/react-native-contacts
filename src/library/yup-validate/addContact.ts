import { InferType, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneRegExp } from "@library/regex";

const shape = object({
  phone: string().matches(phoneRegExp, "Phone number is not valid"),
  name: string().trim("Invalid data").required("required"),
  email: string().trim("Invalid data").email("Invalid email"),
});

const add_contact_form_schema = yupResolver(shape);

type AddContactFormFields = InferType<typeof shape>;

export { add_contact_form_schema, type AddContactFormFields };
