// hardcoding data for now
// will be added to supabase for querying in the future

const hybrid_base = [
  {
    week: 1,
    day: 1,
    strength: "this is one",
    endurance: "stuff",
    conditioning: "stuff",
    complete: false,
  },
  {
    week: 1,
    day: 2,
    strength: {
      one: "bench 3x5",
      two: "deadlift 3x5",
    },
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
  {
    week: 1,
    day: 4,
    strength: "stuff",
    endurance: "stuff",
    conditioning: "stuff",
    complete: false,
  },
  {
    week: 1,
    day: 5,
    strength: "stuff",
    endurance: "stuff",
    conditioning: "stuff",
    complete: false,
  },
  {
    week: 1,
    day: 6,
    strength: "stuff",
    endurance: "stuff",
    conditioning: "stuff",
    complete: false,
  },
  {
    week: 1,
    day: 7,
    strength: "this is 7",
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
