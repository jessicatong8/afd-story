import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export function getParticipantID() {
  const [searchParams] = useSearchParams();
  const pidFromUrl = searchParams.get("pid");

  useEffect(() => {
    if (pidFromUrl) {
      localStorage.setItem("participant_id", pidFromUrl);
      console.log('Set item in local storage:', localStorage.getItem('participant_id'));

    }
  }, [pidFromUrl]);

  return pidFromUrl ?? localStorage.getItem("participant_id");
}
