export const DownloadModal = ({
  onClose,
  link,
  fileName
}: {
  onClose: () => void;
  link: string;
  fileName: string;
}) => {
  return (
    <>
      <dialog id="download-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg font-good-times">Download</h3>
          <p className="py-4">Do you want to download {fileName}?</p>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              {/* if there is a button in form, it will close the modal */}
              <a
                className="boss-btn boss-btn-green"
                onClick={onClose}
                href={link}
                download
              >
                Yes
              </a>
              <button className="boss-btn boss-btn-error">No</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
