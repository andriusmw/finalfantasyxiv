const PlayerCard = ({
  id,
  name,
  avatar,
  server,
  setPlayerDetails,
  setPlayersResults,
}) => {
  const fetchPlayer = async () => {
    try {
      const res = await fetch(`https://xivapi.com/character/${id}`);

      const body = await res.json();

      if (res.ok) {
        const {
          Name: playerName,
          Avatar: avatar,
          ClassJobs: classJobs,
          FreeCompanyName: companyName,
        } = body.Character;

        const classJobsAboveLvl0 = classJobs.filter((classJob) => {
          return classJob.Level > 0;
        });

        setPlayerDetails({
          playerName,
          avatar,
          classJobs: classJobsAboveLvl0,
          companyName,
        });
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
