import List from "./List";

const PlayerDetails = ({ data }) => {
  const { avatar, classJobs, companyName, playerName } = data;

  return (
    <article>
      <h2>{playerName}</h2>
      <img src={avatar} alt={playerName} />
      <p>Company: {companyName}</p>
      <List
        data={classJobs}
        render={(classJob) => {
          const {
            ClassID: classId,
            Name: name,
            Level: level,
            ExpLevel: expLvl,
          } = classJob;

          return (
            <li key={classId}>
              <p>Class: {name}</p>
              <p>Lvl: {level}</p>
              <p>ExpLvl: {expLvl}</p>
            </li>
          );
        }}
      />
    </article>
  );
};

export default PlayerDetails;
