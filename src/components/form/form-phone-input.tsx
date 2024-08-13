import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";

import { Controller, Path, useFormContext } from "react-hook-form";

interface IFormPhoneInput<T extends Record<string, any>> {
  name: Path<T>;
  placeholder: string;
  defaultValue?: string;
}

const FormPhoneInput = <T extends Record<string, any>>({ name, placeholder, defaultValue, ...rest }: IFormPhoneInput<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <TextInput style={styles.input} onChangeText={field.onChange} placeholder={placeholder} value={defaultValue} />
            {error?.message && <Text style={styles.error}>{error?.message}</Text>}
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    marginLeft: 15,
    color: "red",
  },
});

export { FormPhoneInput };
