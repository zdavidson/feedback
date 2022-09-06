export const resolvers = {
  Query: {
    suggestions: () => [
      {
        id: 1,
        title: "Add tags for solutions",
        description:
          "Easier to search for solutions based on a specific stack.",
        tags: ["Enhancement"],
        upvotes: 112,
        comments: 2,
      },
      {
        id: 2,
        title: "Add a dark theme option",
        description:
          "It would help people with light sensitivities who prefer dark mode.",
        tags: ["Feature"],
        upvotes: 99,
        comments: 4,
      },
      {
        id: 3,
        title: "Q&A within the challenge hubs",
        description: "Challenge specific Q&A would make for easy reference.",
        tags: ["Feature"],
        upvotes: 65,
        comments: 1,
      },
      {
        id: 4,
        title: "Allow image/video upload to feedback",
        description:
          "Images and screencasts can enhance comments on solutions.",
        tags: ["Enhancement"],
        upvotes: 51,
        comments: 1,
      },
      {
        id: 5,
        title: "Ability to follow others",
        description:
          "Stay updated on comments and solutions other people post.",
        tags: ["Feature"],
        upvotes: 42,
        comments: 3,
      },
      {
        id: 6,
        title: "Preview images not loading",
        description:
          "Challenge preview images are missing when you apply a filter.",
        tags: ["Bug"],
        upvotes: 3,
        comments: 0,
      },
    ],

    tags: () => ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
    comments: () => [
      {
        id: 1,
        user: { name: "Elijah Moss", userName: "@hexagon.bestagon" },
        comment:
          "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
        replies: [],
      },
    ],
  },
};
