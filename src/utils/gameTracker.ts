import { supabase } from "../hooks/supabase";

let gameStartTime: number | null = null;

// Call this when user clicks "Start Game"
export function startGame() {
  gameStartTime = Date.now();
  localStorage.setItem("gameStartTime", gameStartTime.toString());
}

// Call this when user reaches the "End Game" page
export async function endGame(participantId: string|null) {
  if (!gameStartTime) {
    // fallback if page refreshed
    const storedStart = localStorage.getItem("gameStartTime");
    if (storedStart) {
      gameStartTime = parseInt(storedStart);
    } else {
      console.error("Game start time missing!");
      return;
    }
  }

  const gameEndTime = Date.now();
  const gameTimeSec = Math.round((gameEndTime - gameStartTime) / 1000); // seconds

  // Get the score (assume already stored in localStorage)
  const gameScoreStr = localStorage.getItem("gameScore");
  const gameScore = gameScoreStr ? parseInt(gameScoreStr) : null;

  // Update Supabase table
  const { data, error } = await supabase
    .from("participants")
    .update({
      game_time_ms: gameTimeSec,    // <-- store in seconds
      game_completed: true,
      game_score: gameScore,
      updated_at: new Date(),
    })
    .eq("participant_id", participantId);

  if (error) {
    console.error("Error saving game data:", error);
  } else {
    console.log("Game data saved:", data);
  }
}
