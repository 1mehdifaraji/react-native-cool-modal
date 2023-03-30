import React from "react";
import {
  Modal as RNModal,
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  Text,
} from "react-native";

const Flex = ({ children, style }) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      ...style,
    }}
  >
    {children}
  </View>
);

const CenteredView = ({ children }) => (
  <View
    style={{
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      left: 0,
      right: 0,
      zIndex: 1,
    }}
  >
    {children}
  </View>
);

const Modal = ({
  children,
  modalVisible,
  setModalVisible,
  type = "center",
  rtl,
  title = "",
  titleStyles = {},
  closeIcon,
  closeModalOverlayOnPress = true,
  divider,
  bgColor = "#ffffff",
  overlayColor = "rgba(0,0,0,0.5)",
}) => {
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={type !== "fullscreen"}
      onRequestClose={() => setModalVisible(false)}
    >
      {type === "bottom" || type === "center" ? (
        <Pressable
          style={
            type === "bottom"
              ? styles({ overlayColor }).overlayContainer
              : styles({ overlayColor }).overlayCenterContainer
          }
          onPress={() => {
            if (closeModalOverlayOnPress) setModalVisible(false);
          }}
        >
          <Pressable
            style={
              type === "bottom"
                ? styles({ bgColor }).bottomContainer
                : styles({ bgColor }).centerContainer
            }
          >
            <Flex
              style={{
                justifyContent: rtl ? "flex-end" : "flex-start",
              }}
            >
              {closeIcon ? (
                <Pressable
                  style={{ zIndex: 2 }}
                  onPress={() => setModalVisible(false)}
                >
                  {closeIcon}
                </Pressable>
              ) : null}
              {title ? (
                <CenteredView>
                  <Text style={titleStyles}>{title}</Text>
                </CenteredView>
              ) : null}
            </Flex>
            {divider ? divider : null}
            <View style={{ paddingVertical: 15 }}>{children}</View>
          </Pressable>
        </Pressable>
      ) : (
        <SafeAreaView style={styles({ bgColor }).fullscreenContainer}>
          <Flex style={styles({ rtl }).fullscreenHeader}>
            {closeIcon ? (
              <Pressable
                style={{ zIndex: 2 }}
                onPress={() => setModalVisible(false)}
              >
                {closeIcon}
              </Pressable>
            ) : null}
            {title ? (
              <CenteredView>
                <Text style={titleStyles}>{title}</Text>
              </CenteredView>
            ) : null}
          </Flex>
          {divider ? divider : null}
          <View style={styles({}).fullscreenChildrenWrapper}>{children}</View>
        </SafeAreaView>
      )}
    </RNModal>
  );
};

const styles = ({ bgColor, overlayColor, rtl }) =>
  StyleSheet.create({
    fullscreenContainer: {
      flex: 1,
      backgroundColor: bgColor,
    },
    fullscreenHeader: {
      paddingHorizontal: 10,
      paddingVertical: 15,
      justifyContent: rtl ? "flex-end" : "flex-start",
    },
    fullscreenChildrenWrapper: {
      paddingTop: 15,
      paddingBottom: 10,
      paddingHorizontal: 10,
    },
    bottomContainer: {
      padding: 30,
      borderTopRightRadius: 60,
      borderTopLeftRadius: 60,
      marginTop: "auto",
      backgroundColor: bgColor,
    },
    centerContainer: {
      margin: 20,
      backgroundColor: bgColor,
      borderRadius: 35,
      padding: 20,
      shadowColor: "#ccc",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    overlayContainer: {
      flex: 1,
      backgroundColor: overlayColor,
    },
    overlayCenterContainer: {
      flex: 1,
      backgroundColor: overlayColor,
      justifyContent: "center",
    },
  });

export default Modal;
