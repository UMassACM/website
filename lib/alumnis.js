const alumDirectory = path.join(process.cwd(), "alumni/alumni.json");
import fs from "fs";
import path from "path";
export function AlumniData() {  
    const fileContents = fs.readFileSync(alumDirectory, "utf-8");
    const alumData = JSON.parse(fileContents);
    return alumData;
  }