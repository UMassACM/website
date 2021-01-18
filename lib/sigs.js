import fs from "fs";
import path from "path";

const sigsDirectory = path.join(process.cwd(), "sigs");

function sigDataHelper(params) {
  const fileNames = fs.readdirSync(sigsDirectory);

  // if no parameters are sent to the function call, this
  // branch get data for all available files in `sigs`
  if (params.empty) {
    const allSIGsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.json$/, "");

      const fullPath = path.join(sigsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const sigData = JSON.parse(fileContents);

      return {
        id,
        sigData,
      };
    });

    return allSIGsData;
  } else if (Object.keys(params.id).length !== 0) {
    // if the function call passes an id, we look for the json file
    // corresponding to the passed id
    const fullPath = path.join(sigsDirectory, `${params.id}.json`);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const sigData = JSON.parse(fileContents);

    // Combine the data with the id
    return {
      id: params.id,
      sigData,
    };
  } else {
    throw Error("Incorrect parameters");
  }
}

export function getAllSigsData() {
  const allSigs = sigDataHelper({ empty: true, func: "getAllSigsData" });
  return allSigs.map((sig) => {
    return {
      id: sig.id,
      ...sig.sigData,
    };
  });
}

export function getAllSigsIds() {
  const allSigs = sigDataHelper({
    empty: true,
    func: "getAllSigsIds",
  });

  return allSigs.map((sig) => {
    return {
      params: {
        id: sig.id,
      },
    };
  });
}

export async function getSigData(id) {
  const fileData = sigDataHelper({ id, empty: false, func: "getSigData" });
  const sigData = fileData.sigData;

  return {
    id,
    ...sigData,
  };
}
