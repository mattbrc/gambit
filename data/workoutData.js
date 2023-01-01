// hardcoding data for now
// will be added to supabase for querying in the future

const updates = [
  {
    name: "Hybrid Athlete Base",
    training: {
      day: 6,
      week: 1,
      complete: false,
      strength: {
        one: "stuff1",
        two: "stuff2",
      },
      endurance: "stuff",
      conditioning: "stuff",
    },
  },
];

const mil_base = [
  {
    name: "hybrid",
    phase: "base",
    training: {
      w1d1: {
        strength: "stuff",
        endurance: "stuff",
        conditioning: "stuff",
      },
    },
  },
];

export const workoutData = {
  updates,
  mil_base,
};
