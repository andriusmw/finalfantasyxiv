import List from "./List";

const PlayerDetails = ({ data }) => {
  const { avatar, classJobs, companyName, playerName, body, setGearSet } = data;
  //recibo los datos del playerCard

 
          /*-------------------- pasar datos a gearset -----*/
          //hacer asyncrona la llamada como en player card
          //que aparezca un boton para cargar el equipo y ahí 
          //hago el setgearset y ya luego ver como muestra los datos
          //igual hay que hacer un list en GearSet.js
          setGearSet([
            body,
            setGearSet
          
          ]);//pasamos los datos al estado details y vaciamos el results
          setGearSet([]);
          
          
          
                    /*--------------------------------------------*/


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
