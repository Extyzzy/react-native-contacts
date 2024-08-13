import React from "react";

import { Controller, useFormContext, Path } from "react-hook-form";

import { StyleSheet, TextInput, Text } from "react-native";

interface IFormInput<T extends Record<string, any>> {
  name: Path<T>;
  placeholder: string;
  defaultValue?: string;
}

const FormInput = <T extends Record<string, any>>({ name, placeholder, defaultValue, ...rest }: IFormInput<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <TextInput style={styles.input} value={defaultValue} onChangeText={field.onChange} placeholder={placeholder} />
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

export { FormInput };
