// hardcoding data for now
// will be added to supabase for querying in the future

const hybrid_base = [
  {
    week: 1,
    day: 1,
    strength: "stuff",
    endurance: "stuff",
    conditioning: "stuff",
    complete: false,
  },
  {
    week: 1,
    day: 2,
    strength: "stuff",
    endurance: "stuff",
    conditioning: "stuff",
    complete: false,
  },
  {
    week: 1,
    day: 3,
    strength: "stuff",
    endurance: "stuff",
    conditioning: "stuff",
    complete: false,
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

export const data = {
  hybrid_base,
  mil_base,
};
