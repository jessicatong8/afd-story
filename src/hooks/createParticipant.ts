import { supabase } from "./supabase";

export async function createParticipant(participantId: string | null) {
  if (!participantId) {
    console.error("No participant ID provided");
    return;
  }

  const { data, error } = await supabase
    .from("participants")
    .upsert(
      {
        participant_id: participantId,
        book_time_sec: 0,
        book_completed: false,
        game_time_sec: 0,
        game_completed: false,
        game_score: 0,
      },
      { onConflict: "participant_id" } // important: avoid duplicates
    );

  if (error) {
    console.error("Error creating participant row:", error);
  } else {
    console.log("Participant row ready:", data);
  }
}
