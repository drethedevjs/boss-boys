export const writeToClipboard = async (
  text: string,
  setCopiedFunc: React.Dispatch<React.SetStateAction<Boolean>>
) => {
  try {
    setCopiedFunc(true);
    await navigator.clipboard.writeText(text);

    console.info("Copied to clipboard!");

    setTimeout(() => {
      setCopiedFunc(false);
    }, 3000);
  } catch (err) {
    console.error("Failed to copy to clipboard:", err);
  }
};
const modalElement = document.getElementById(
  "download-modal"
) as HTMLDialogElement;

export const hideModal = () => {
  modalElement?.close();
};

export const showModal = () => {
  modalElement?.showModal();
};
