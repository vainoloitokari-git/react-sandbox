import MovieList from "./components/MovieList";
import { AppleBasket } from "./components/AppleBasket";
import { AppleButton } from "./components/AppleButton";

function App() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "3rem" }}>
      
      <section>
        <AppleButton />
        <AppleBasket />
      </section>

      <hr />

      <section>
<h2
  style={{
    marginBottom: "1rem",
    fontSize: "2rem",
    fontWeight: 700,
  }}
>
    Movie Library
</h2>

      <MovieList />
      </section>

    </div>
  );
}

export default App;
