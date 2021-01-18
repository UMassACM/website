import fs from "fs";
import path from "path";

const officersDirectory = path.join(process.cwd(), "officers");

function officersDataHelper() {
    const fileNames = fs.readdirSync(officersDirectory);
    
    const allOfficersData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.json$/, "").replace("-", " ");
  
        const fullPath = path.join(officersDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");
        console.log(id);
        const officerData = JSON.parse(fileContents);
  
        return {
          id,
          officerData,
        };
      });
  
      return allOfficersData;
}

export function getAllOfficerTeamsData() {
    const allOfficers = officersDataHelper();
    const officersDataFormatted = allOfficers.map((team) => {
      return {
        team: team.id,
        ...team.officerData
      }
    });

    return officersDataFormatted;
  }