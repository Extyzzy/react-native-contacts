import { StyleSheet, Text, View } from "react-native";

interface IRadioButton {
  selected: boolean;
  text: string;
}

const RadioButton = (props: IRadioButton) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRadio}>{props.selected ? <View style={styles.containerRadioSelected} /> : null}</View>
      <View>
        <Text>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 15,
    marginBottom: 15,
  },
  containerRadio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  containerRadioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000",
  },

  error: {
    marginLeft: 15,
    color: "red",
  },
});

export default RadioButton;
