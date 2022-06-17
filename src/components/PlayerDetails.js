import List from "./List";

const PlayerDetails = ({ data }) => {
  const { avatar, classJobs, companyName, playerName, body, setGearSet } = data;
  //recibo los datos del playerCard

 /*----------------- intento sacar equipo gearset -------------------- */

 const {
  Attributes: Attributes,
  ClassID: ClassID,
  Gear: Gear,
  GearKey: GearKey,
  JobID: JobID,
  Level: Level

} = body.Character.GearSet;

  //intento cambiar el estado de GearSet

  setGearSet({
    Attributes,
    ClassID,
    Gear,
    GearKey,
    JobID,
    Level

  });//pasamos los datos al estado details y vaciamos el results
  setGearSet({});


/*-----------------------------------------------------* */




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
              <article>
                <p>GearSet</p>
            
                <p>{body.Character.GearSet.ClassID} </p>
                <p>{body.Character.GearSet.Gear} </p>
           
                <p>{body.Character.GearSet.JobID} </p>
                <p>{body.Character.GearSet.Level} </p>

              </article>
            </li>
          );
        }}
      />
    </article>
  );
};

export default PlayerDetails;
