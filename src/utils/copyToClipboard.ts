export const copyToClipboard = (url: string) => {
  try {
    navigator.clipboard.writeText(url);
  } catch (error) {
    console.error("copyToClipboard error", error);
  }
};
