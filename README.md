# react-native-cool-modal

An enhanced, animated, customizable and foremost a cool React Native modal.

Expanding the original React Native <Modal> component by adding animations, style customization options, while still providing a simple and easy to use API.

## Preview

<img align=top src="https://user-images.githubusercontent.com/63982703/228654395-c8acfdb5-b654-4e1e-936b-d60eeee1070f.gif" width="300" height="600" />

## Features

- Smooth enter/exit animations
- Plain simple and easy to use APIs
- Fullscreen , bottom and centered display types
- Customizable backdrop color

## Setup

```bash
npm install --save react-native-cool-modal
```

or

```bash
yarn add react-native-cool-modal
```

or

```bash
pnpm add react-native-cool-modal
```

## Usage

First import the modal component from `react-native-cool-modal` .

```javascript
import { Modal } from "react-native-cool-modal";
```

Then setup a boolean state inside your component and pass it as a prop to the `Modal` component .

```javascript
const [show, setShow] = React.useState(false);

<Modal modalVisible={show} setModalVisible={(e: boolean) => setShow(e)}>
  <Text>Modal content</Text>
</Modal>;
```

You can trigger the modal pop up by setting the state to `true` .

```javascript
<Button title="Show modal" onPress={() => setShow(true)} />
```

## Complete example

```javascript
import React, { useState } from "react";
import { Modal } from "react-native-cool-modal";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={{ alignItems: "center", flex: 1, paddingTop: 40 }}>
      <Modal
        modalVisible={show}
        setModalVisible={(e) => setShow(e)}
        type="fullscreen"
        rtl={false}
        closeIcon={
          <Image
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
            source={require("./close.png")}
          />
        }
        closeModalOverlayOnPress={true}
        title="Title"
        titleStyles={{ fontSize: 18, fontWeight: "bold" }}
        bgColor="white"
        overlayColor="rgba(0,0,0,0.4)"
        divider={
          <View
            style={{
              marginTop: 10,
              backgroundColor: "#c8c8c8",
              height: 0.5,
              width: "100%",
            }}
          />
        }
      >
        <Text>Modal content</Text>
      </Modal>
      <Button title="Show modal" onPress={() => setShow(true)} />
    </SafeAreaView>
  );
};
```

## Available props

| Name                     | Type                                 | Default           | Description                                                                     |
| ------------------------ | ------------------------------------ | ----------------- | ------------------------------------------------------------------------------- |
| children                 | `ReactNode`                          | **REQUIRED**      | Sets modal content                                                              |
| modalVisible             | `boolean`                            | **REQUIRED**      | Sets modal visibility state                                                     |
| setModalVisible          | `(modalState: boolean) => void`      | **REQUIRED**      | Handle modal on close event                                                     |
| type                     | `center` or `bottom` or `fullscreen` | `center`          | Sets the modal display type                                                     |
| rtl                      | `boolean`                            | `false`           | Sets the modal header direction                                                 |
| closeModalOverlayOnPress | `boolean`                            | `true`            | Should close modal when the overlay is pressed in center and bottom type modals |
| title                    | `string`                             | `null`            | Modal title                                                                     |
| titleStyles              | `TextStyle`                          | `null`            | Style applied to modal title                                                    |
| closeIcon                | `ReactNode`                          | `null`            | Sets the modal header close icon                                                |
| overlayColor             | `string`                             | `rgba(0,0,0,0.5)` | Sets the modal overlay color                                                    |
| bgColor                  | `string`                             | `#ffffff`         | Sets the modal header and content background color                              |
| divider                  | `ReactNode`                          | `null`            | Sets the divider element between modal header and content                       |

## Developer

[@1mehdifaraji](https://github.com/1mehdifaraji)
