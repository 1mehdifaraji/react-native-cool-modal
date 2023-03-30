import { ReactNode } from "react";
import { TextStyle } from "react-native";

declare module "react-native-cool-modal" {
  type ChildrenType = ReactNode | ReactNode[];

  interface ModalProps {
    children: ChildrenType;
    modalVisible: boolean;
    setModalVisible: (modalState: boolean) => void;
    type?: "bottom" | "fullscreen" | "center";
    rtl?: boolean;
    closeModalOverlayOnPress?: boolean;
    title?: string;
    titleStyles?: TextStyle;
    closeIcon?: ChildrenType;
    overlayColor?: string;
    bgColor?: string;
    divider?: ChildrenType;
  }

  export function Modal(props: ModalProps): any;
}
