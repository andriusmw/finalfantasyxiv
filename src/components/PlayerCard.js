const PlayerCard = ({
  id,
  name,
  avatar,
  server,
  setPlayerDetails,
  setPlayersResults,
  //Recibimos los datos del searchform y también el setPlayerDetails y setPlaterResults
  //para poder cambiar los estados desde aquí.
}) => {
  const fetchPlayer = async () => {
    try {
      const res = await fetch(`https://xivapi.com/character/${id}`);

      const body = await res.json();
        //función asyncrona que se carga cuando tenemos los datos del searchform 
        //para poder pasarle un id y hacer una llamada a la api y recibir más datos

      if (res.ok) {
        const {
          Name: playerName,
          Avatar: avatar,
          ClassJobs: classJobs,
          FreeCompanyName: companyName,
        } = body.Character;

        console.log(body) //prueba para ver lo que manda.

        const classJobsAboveLvl0 = classJobs.filter((classJob) => {
          return classJob.Level > 0;
        });
        //filtrado de clases para sacar solo las que tengan nivel mayor que 1

        setPlayerDetails({
          playerName,
          avatar,
          classJobs: classJobsAboveLvl0,
          companyName,
        });//pasamos los datos al estado details y vaciamos el results
        setPlayersResults([]);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section onClick={fetchPlayer}>
      <h2>
        {name} ({server})
      </h2>
      <img src={avatar} alt={name} />
    </section>
  );
};

export default PlayerCard;
