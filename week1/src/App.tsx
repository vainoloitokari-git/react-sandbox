import { TeamCard } from "./components/TeamCard";
import { Profile } from "./components/Profile";
import xddImg from "./assets/xddd.gif";
import siuuImg from "./assets/siuu.gif";


function App() {
  return (
<div className="flex flex-col items-center gap-6 p-6">

    <Profile name="Väinö Loitokari" role="Päävalmentaja" />

<div className="flex gap-4">
    <TeamCard name="Paavo" role="Hyökkääjä" />
    <TeamCard name="Kalle" role="Puolustaja" />
    <TeamCard name="Mauri" role="Maalivahti" />


</div>

  <div className="flex gap-4 justify-center">
  <img 
    src={xddImg} 
    className="w-55 h-55 object-cover"
  />
  <img 
    src={siuuImg} 
    className="w-55 h-55 object-cover"
  />
</div>

</div>

  );
}

export default App;
