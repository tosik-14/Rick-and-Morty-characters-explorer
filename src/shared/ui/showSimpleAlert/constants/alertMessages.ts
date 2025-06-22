import { AlertMessagesEnum } from "@/src/shared/ui/showSimpleAlert/constants/alertMessagesEnum";

export const AlertMessages: Record<
    AlertMessagesEnum,
    { title: string; message: string }
> = {
    [AlertMessagesEnum.NoInternet]: {
        title: "No internet connection",
        message: "Please check your internet connection and try again.",
    },
    [AlertMessagesEnum.UnknownError]: {
        title: "Something went wrong",
        message: "Please try again later.",
    },
};
