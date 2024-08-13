export enum Categories {
  Work = "Work",
  Friends = "Friends",
  Family = "Family",
}

export interface ContactProps {
  id: string;
  name: string;
  email: string;
  phone: number;
  category: Categories;
}

export interface StateInterface {
  contacts: ContactProps[];
}
