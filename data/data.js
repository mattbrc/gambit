// hardcoding data for now
// will be added to supabase for querying in the future

const UpperBody = [
  { name: "Overhead Press", setsReps: "3 X 6" },
  { name: "Bent-Over BB Row", setsReps: "3 X 8" },
  { name: "Weighted Pull-Ups", setsReps: "3 X 5-10" },
  { name: "DB Bicep Curl", setsReps: "2 X 15-20" },
  { name: "Banded Tricep Pushdown", setsReps: "2 X 15-20" },
];

const LowerBody = [
  { name: "RDL", setsReps: "3 X 6" },
  { name: "Squat", setsReps: "3 X 6" },
  { name: "Forward Lunge", setsReps: "3 X 8ea" },
  { name: "Bulgarian SS", setsReps: "3 X 8ea" },
  { name: "Nordic Hamstring Lowering", setsReps: "3 X 5" },
  { name: "Barbell Hip Thrust", setsReps: "3 X 12" },
  { name: "Stability Ball Plank", setsReps: "3 X 20-30s" },
];

const Endurance = [
  { name: "30 min steady state run" },
  { name: "45 min steady state run" },
  { name: "60 min steady state run" },
  { name: "90 min steady state run" },
  { name: "30 min steady state bike" },
  { name: "45 min steady state bike" },
  { name: "60 min steady state bike" },
];

const Conditioning = [{ name: "21-15-9 Cal Row + Burpees" }];

export const Data = {
  UpperBody,
  LowerBody,
  Endurance,
  Conditioning,
};
