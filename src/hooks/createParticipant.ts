import { supabase } from "./supabase";

export async function createParticipant(participantId: string | null) {
  if (!participantId) {
    console.error("No participant ID provided");
    return;
  }

  // Try to insert a new row
  const { data, error } = await supabase
    .from("participants")
    .insert([
      {
        participant_id: participantId,
        book_time_sec: 0,
        book_completed: false,
        game_time_sec: 0,
        game_completed: false,
        game_score: 0,
      },
    ])
    .select(); // optional: returns the inserted row

  if (error) {
    // Check for conflict error (participant already exists)
    if (error.code === "23505") {
      // 23505 = unique constraint violation
      console.log("Participant already exists, skipping insert:", participantId);
    } else {
      console.error("Error creating participant row:", error);
    }
  } else {
    console.log("New participant row inserted:", data);
  }
}
