import { supabase } from "../hooks/supabase";

let gameStartTime: number | null = null;
let bookStartTime: number | null = null;

/* ----------------- BOOK TRACKING ----------------- */

// Call when participant starts reading the book
export function startBook() {
  bookStartTime = Date.now();
  localStorage.setItem("bookStartTime", bookStartTime.toString());
  console.log("Book started at:", bookStartTime);
}

// Call when participant reaches the end of the book
export async function endBook(participantId: string | null) {
  console.log("endBook called with participantId:", participantId);

  if (!bookStartTime) {
    const storedStart = localStorage.getItem("bookStartTime");
    if (storedStart) {
      bookStartTime = parseInt(storedStart);
      console.log("Recovered bookStartTime from localStorage:", bookStartTime);
    } else {
      console.error("Book start time missing!");
      return;
    }
  }

  const bookEndTime = Date.now();
  const bookTimeSec = Math.round((bookEndTime - bookStartTime) / 1000);
  console.log("Computed bookTimeSec:", bookTimeSec);

  if (!participantId) {
    console.error("Cannot update Supabase: participantId is null");
    return;
  }

  // Only update if first completion
  const { data, error } = await supabase
    .from("participants")
    .update({
      book_time_sec: bookTimeSec,
      book_completed: true,
      updated_at: new Date(),
    })
    .eq("participant_id", participantId)
    .is("book_completed", false);

  if (error) {
    console.error("Error saving book data:", error);
  } else {
    console.log("Book data saved successfully:", data);
  }
}

/* ----------------- GAME TRACKING ----------------- */

// Call when participant starts the game
export function startGame() {
  gameStartTime = Date.now();
  localStorage.setItem("gameStartTime", gameStartTime.toString());
  console.log("Game started at:", gameStartTime);
}

// Call when participant reaches the end of the game
export async function endGame(participantId: string | null) {
  console.log("endGame called with participantId:", participantId);

  if (!gameStartTime) {
    const storedStart = localStorage.getItem("gameStartTime");
    if (storedStart) {
      gameStartTime = parseInt(storedStart);
      console.log("Recovered gameStartTime from localStorage:", gameStartTime);
    } else {
      console.error("Game start time missing!");
      return;
    }
  }

  const gameEndTime = Date.now();
  const gameTimeSec = Math.round((gameEndTime - gameStartTime) / 1000);
  console.log("Computed gameTimeSec:", gameTimeSec);

  // Retrieve score from localStorage
  const gameScoreStr = localStorage.getItem("gameScore");
  const gameScore = gameScoreStr ? parseInt(gameScoreStr) : null;
  console.log("Retrieved gameScore:", gameScore);

  if (!participantId) {
    console.error("Cannot update Supabase: participantId is null");
    return;
  }

  // Only update if first completion
  const { data, error } = await supabase
    .from("participants")
    .update({
      game_time_sec: gameTimeSec,
      game_completed: true,
      game_score: gameScore,
      updated_at: new Date(),
    })
    .eq("participant_id", participantId)
    .is("game_completed", false);

  if (error) {
    console.error("Error saving game data:", error);
  } else {
    console.log("Game data saved successfully:", data);
  }
}
