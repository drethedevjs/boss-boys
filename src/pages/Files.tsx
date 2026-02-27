import { BossPage } from "../components/BossPage";
import { files } from "../data/files";

export const Files = () => {
  return (
    <BossPage header="Files">
      <div className="flex flex-wrap gap-4">
        {files.length
          ? files.map((f, idx) => (
              <div
                key={idx}
                className="card bg-boss-green w-96 text-primary-content border dark:border-boss-gold"
              >
                <div className="card-body">
                  <h2 className="card-title dark:text-boss-gold! text-white!">
                    {f.title}
                  </h2>
                  <p className="dark:text-boss-gold! text-white!">
                    {f.description}
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href={`/files/${f.fileName}`}
                      className="boss-btn boss-btn-color"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))
          : "No files uploaded. Contact the webmaster if you see this message."}
      </div>
    </BossPage>
  );
};
