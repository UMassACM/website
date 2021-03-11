import fs from "fs";
import path from "path";

const officersDirectory = path.join(process.cwd(), "sigs");

function officersDataHelper() {
  const fileNames = fs.readdirSync(officersDirectory);

  const allOfficersData = fileNames.map((fileName) => {
    const team = fileName.replace(/\.json$/, "").replace("-", " ");
    const fullPath = path.join(officersDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const officersData = JSON.parse(fileContents);

    return {
      team,
      officers: officersData.officers,
    };
  });

  return allOfficersData;
}

export function getAllOfficerTeamsData() {
  const allTeams = officersDataHelper();

  const priorityTeamNames = ["Executive", "Marketing", "Web Dev"];
  const priorityTeams = allTeams.filter((teamData) =>
    priorityTeamNames.includes(teamData.team)
  );

  const teamsDataFormatted = allTeams
    .filter(({ team }) => !priorityTeamNames.includes(team))
    .map(({ team, officers }) => {
      return {
        team,
        officers,
      };
    }).reverse();

  priorityTeams.reverse().forEach(({ team, officers }) => {
    teamsDataFormatted.unshift({
      team,
      officers,
    });
  });
  
  return teamsDataFormatted;
}
