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

export const hideModal = () => {
  const modalElement = document.getElementById(
    "download-modal"
  ) as HTMLDialogElement;
  modalElement?.close();
};

export const showModal = () => {
  const modalElement = document.getElementById(
    "download-modal"
  ) as HTMLDialogElement;
  modalElement?.showModal();
};

export const truncate = (str: string, maxLength: number) => {
  return str.length <= maxLength ? str : str.slice(0, maxLength) + "...";
};
