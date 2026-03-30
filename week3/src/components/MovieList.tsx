import { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

export default function MovieList() {
  const movies = useMovieStore((s) => s.movies);
  const toggleWatched = useMovieStore((s) => s.toggleWatched);

  const [filterType, setFilterType] =
    useState<"all" | "watched" | "unwatched">("all");

  let filteredMovies = movies;

  if (filterType === "watched") {
    filteredMovies = movies.filter((m) => m.watched);
  } else if (filterType === "unwatched") {
    filteredMovies = movies.filter((m) => !m.watched);
  }

  return (
    <div
      style={{
        padding: "1.5rem",
        maxWidth: "600px",
        background: "#f7f7f7",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >

      {/* Filter buttons */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {["all", "watched", "unwatched"].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type as any)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background:
                filterType === type ? "#007bff" : "rgba(0,0,0,0.1)",
              color: filterType === type ? "white" : "black",
              transition: "0.2s",
            }}
          >
            {type === "all" && "All movies"}
            {type === "watched" && "Watched"}
            {type === "unwatched" && "Unwatched"}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            style={{
              padding: "1rem",
              background: "white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <div>
              <strong style={{ fontSize: "1.1rem" }}>{movie.title}</strong>
              <div
                style={{
                  marginTop: "0.25rem",
                  fontSize: "0.9rem",
                  color: movie.watched ? "#2e7d32" : "#c62828",
                  fontWeight: 600,
                }}
              >
                {movie.watched ? "✓ Watched" : "✗ Unwatched"}
              </div>
            </div>

            <button
              onClick={() => toggleWatched(movie.id)}
              style={{
                padding: "0.4rem 0.8rem",
                borderRadius: "6px",
                border: "none",
                background: "#444",
                color: "white",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              Change
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
