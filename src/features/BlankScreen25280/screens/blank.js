import React from "react"
import { View } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input
} from "react-native-ui-kitten"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { Radio_5: true, CheckBox_6: true }

  render = () => (
    <View
      style={{
        overflow: "visible",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <Button
        style={{
          overflow: "visible",
          borderStyle: "solid",
          backgroundColor: "#3366FF"
        }}
        onPress={() => alert("Pressed!")}
      >
        Button
      </Button>
      <Text style={{ overflow: "visible", borderStyle: "solid" }}>Text</Text>
      <Input
        date
        placeholder="Text input placeholder"
        editable={true}
        value=""
        style={{ overflow: "visible", borderStyle: "solid" }}
      />
      <Radio
        text="Radio button"
        disabled={false}
        style={{ overflow: "visible", borderStyle: "solid" }}
        checked={this.state.Radio_5}
        onChange={nextChecked => this.setState({ Radio_5: nextChecked })}
      />
      <CheckBox
        text="Checkbox"
        disabled={false}
        style={{ overflow: "visible", borderStyle: "solid" }}
        checked={this.state.CheckBox_6}
        onChange={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
