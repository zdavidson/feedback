export const resolvers = {
  Query: {
    suggestions: () => [
      {
        id: 1,
        title: "Add tags for solutions",
        description:
          "Easier to search for solutions based on a specific stack.",
        tags: ["Enhancement"],
      },
      {
        id: 2,
        title: "Add a dark theme option",
        description:
          "It would help people with light sensitivities who prefer dark mode.",
        tags: ["Feature"],
      },
      {
        id: 3,
        title: "Q&A within the challenge hubs",
        description: "Challenge specific Q&A would make for easy reference.",
        tags: ["Feature"],
      },
    ],

    tags: () => ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
  },
};
