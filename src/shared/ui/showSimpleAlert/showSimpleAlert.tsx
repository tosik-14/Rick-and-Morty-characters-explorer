import { Alert } from "react-native";
import { AlertMessagesEnum } from "@/src/shared/ui/showSimpleAlert/constants/alertMessagesEnum";
import { AlertMessages } from "@/src/shared/ui/showSimpleAlert/constants/alertMessages";

export const showSimpleAlert = (type: AlertMessagesEnum) => {
    const { title, message } = AlertMessages[type];

    Alert.alert(title, message, [{ text: "Ok" }]);
};
