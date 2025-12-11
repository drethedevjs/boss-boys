import { Download } from "lucide-react";
import { useState } from "react";
import { BossPage } from "../components/BossPage";
import { showModal } from "../utils/download";

export const FileVault = () => {
  const [pathToFile, setPathToFile] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const showDownloadModal = (fileName: string, filePath: string) => {
    setPathToFile(filePath);
    setFileName(fileName);
    showModal();
  };

  return (
    <BossPage header="File Vault">
      <h2>Student Forms</h2>
      <ul>
        <div
          onClick={() =>
            showModal("Good Times woff font file", "fonts/good-times-rg.woff")
          }
        >
          <li>
            Nomination & Signature Form
            <Download />
          </li>
        </div>
      </ul>
    </BossPage>
  );
};
