import { TeamCard } from "./components/TeamCard";
import { Profile } from "./components/Profile";


function App() {
  return (
<div className="flex flex-col items-center gap-6 p-6">
  
    <Profile name="Väinö Loitokari" role="Päävalmentaja" />

<div className="flex gap-4">
    <TeamCard name="Paavo" role="Hyökkääjä" />
    <TeamCard name="Kalle" role="Puolustaja" />
    <TeamCard name="Mauri" role="Maalivahti" />
  </div>
</div>

  );
}

export default App;
