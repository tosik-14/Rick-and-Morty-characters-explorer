export const parseIdFromUrl = (url: string) =>
    url.split("/").filter(Boolean).pop();
