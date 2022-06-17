import List from "./List";


const GearSet = ({ data, body, setGearSet }) => {
/*----------------- intento sacar equipo gearset -------------------- */

const {
    Attributes: Attributes,
    ClassID: ClassID,
    Gear: Gear,
    GearKey: GearKey,
    JobID: JobID,
    Level: Level
  
  } = data.Character.GearSet;
  
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


  return(


    <article>
    <p>GearSet</p>
    <p>{body.Character.GearSet.Attributes} </p>
    <p>{body.Character.GearSet.ClassID} </p>
    <p>{body.Character.GearSet.Gear} </p>
    <p>{body.Character.GearSet.GearKey} </p>
    <p>{body.Character.GearSet.JobID} </p>
    <p>{body.Character.GearSet.Level} </p>

  </article>
  )
 };
  export default GearSet;