// hardcoding data for now
// will be added to supabase for querying in the future

const upper1 = [
  { name: "Incline Barbell Bench Press", setsReps: "1x6-9, 1x12-15" },
  { name: "Machine/DB Shoulder Press", setsReps: "1x6-9, 1x12-15" },
  { name: "Close Grip Smith Machine Bench Press", setsReps: "1x6-9, 1x12-15" },
  { name: "Lat Pulldown", setsReps: "1x12-15, 1x15-20" },
  { name: "T-Bar Row", setsReps: "1x12-15, 1x15-20" },
  { name: "Cable Chest Fly", setsReps: "2x8-12" },
  { name: "Tricep Pushdown", setsReps: "2x8-12" },
];

const upper2 = [
  { name: "Seated Row", setsReps: "1x6-9, 1x12-15" },
  { name: "EZ Bar Curl", setsReps: "1x6-9, 1x12-15" },
  { name: "Face Pulls", setsReps: "1x6-9, 1x12-15" },
  { name: "DB Decline Bench", setsReps: "1x12-15, 1x15-20" },
  { name: "DB Shoulder Press", setsReps: "1x12-15, 1x15-20" },
  { name: "Hammer Curls", setsReps: "2x8-12" },
];

const lower1 = [
  { name: "Leg Extensions", setsReps: "1x12-15, 1x15-20" },
  { name: "Back Squat", setsReps: "1x6-9, 1x12-15" },
  { name: "Bulgarian Split Squats", setsReps: "2x8-12" },
  { name: "DB RDL", setsReps: "1x12-15, 1x15-20" },
  { name: "Sitting Leg Curls", setsReps: "1x12-15, 1x15-20" },
  { name: "DB Lunges", setsReps: "2x8-12" },
  { name: "Calf Raises", setsReps: "2x12-15" },
];

const lower2 = [
  { name: "Hamstring Curls", setsReps: "1x12-15, 1x15-20" },
  { name: "Straight Leg Deadlift", setsReps: "1x6-9, 1x12-15" },
  { name: "BB Hip Thrusters", setsReps: "1x6-9, 1x12-15" },
  { name: "Leg Press", setsReps: "1x12-15, 1x15-20" },
  { name: "Leg Extensions", setsReps: "1x12-15, 1x15-20" },
];

const lss = [
  { name: "30 min steady state run" },
  { name: "45 min steady state run" },
  { name: "60 min steady state run" },
  { name: "30 min steady state stationary bike" },
  { name: "45 min steady state stationary bike" },
  { name: "60 min steady state stationary bike" },
];

const intervals = [
  { name: "4x400m sprint w/ 2:1 rest interval" },
  { name: "3x800m sprint w/ 2:1 rest interval" },
  { name: "6x200m sprint w/ 2:1 rest interval" },
  { name: "2x1600m sprint w/ 1:1 rest interval" },
];

const conditioning = [
  { name: "21-15-9 Cal Row + Burpees" },
  { name: "50/40/30/20/10 Cal AAB + KB Swings @ 55#" },
  {
    name: "5RFT: 200m run + Alt. DB Snatch 50/40# + Max time wall handstand hold + 20 push ups",
  },
  { name: "21-18-15-12-9-6-3 Burpees + BF Sit-Ups" },
];

export const data = {
  upper1,
  upper2,
  lower1,
  lower2,
  lss,
  intervals,
  conditioning,
};
