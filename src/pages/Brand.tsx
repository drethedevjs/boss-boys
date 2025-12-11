import { Copy, Download, Link } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import "../assets/css/brand.css";
import { BossPage } from "../components/BossPage";
import { DownloadModal } from "../components/modals/DownloadModal";

export const Brand = () => {
  const [primaryCopied, setPrimaryCopied] = useState<Boolean>(false);
  const [secondaryCopied, setSecondaryCopied] = useState<Boolean>(false);
  const [pathToFile, setPathToFile] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const writeToClipboard = async (
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

  const showModal = (fileName: string, filePath: string) => {
    setPathToFile(filePath);
    setFileName(fileName);
    document.getElementById("download-modal")?.showModal();
  };

  const hideModal = () => {
    document.getElementById("download-modal")?.close();
  };

  const logoImages = [
    {
      path: "logos/full-abbr-logo.png"
    },
    {
      path: "logos/full-logo.png"
    },
    {
      path: "logos/simple-green-logo.png"
    },
    {
      path: "images/boss-logo-dark.png"
    },
    {
      path: "images/boss-logo.png"
    }
  ];

  return (
    <BossPage header="Brand">
      <h2>Colors</h2>
      <h3>Main</h3>
      <div
        onClick={() => writeToClipboard("#222B21", setPrimaryCopied)}
        className="flex bg-boss-green justify-between place-items-center p-4 rounded-lg mb-5"
      >
        <p className="text-white! mb-0!">Dark Olive: #222B21</p>
        {primaryCopied ? (
          <span className="animate-bounce text-white">Copied!</span>
        ) : (
          <Copy className="text-white" />
        )}
      </div>

      <h3>Secondary</h3>
      <div
        onClick={() => writeToClipboard("#BF7507", setSecondaryCopied)}
        className="flex bg-boss-gold justify-between place-items-center p-4 rounded-lg mb-10"
      >
        <p className="text-white! mb-0!">Dark Goldenrod: #BF7507</p>
        {secondaryCopied ? (
          <span className="animate-bounce text-white">Copied!</span>
        ) : (
          <Copy className="text-white" />
        )}
      </div>

      <h2>Typography</h2>
      <h3>Main</h3>
      <p>Good Times Font</p>
      <ul className="ml-5">
        <div
          onClick={() =>
            showModal("Good Times woff2 font file", "fonts/good-times-rg.woff2")
          }
        >
          <li>
            Good Times (woff2)
            <Download />
          </li>
        </div>
        <div
          onClick={() =>
            showModal("Good Times woff font file", "fonts/good-times-rg.woff")
          }
        >
          <li>
            Good Times (woff)
            <Download />
          </li>
        </div>
        <div
          onClick={() =>
            showModal("Good Times ttf font file", "fonts/good-times-rg.ttf")
          }
        >
          <li>
            Good Times (ttf)
            <Download />
          </li>
        </div>
      </ul>

      <h3>Secondary</h3>
      <a
        className="flex space-x-5 place-items-center mb-10"
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      >
        <p className="mb-0!">Roboto Font</p>
        <Link />
      </a>

      <h2>Logos</h2>
      <h3>Transparent Background</h3>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {logoImages.map((image, idx) => (
          <div
            key={idx}
            onClick={() => showModal("logo", image.path)}
            className="ring-1 hover:ring-boss-gold inset-shadow-2xs rounded-md lg:w-full"
          >
            <img
              src={image.path}
              className="hover:scale-105 hover:rotate-1 transition-all"
            />
          </div>
        ))}
      </div>
      {createPortal(
        <DownloadModal
          link={pathToFile}
          fileName={fileName}
          onClose={() => hideModal()}
        />,
        document.body
      )}
    </BossPage>
  );
};
