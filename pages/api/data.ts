// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Feedback = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

type Data = {
  siteName: string;
  tags: string[];
  feedbackList: Feedback[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    siteName: "Feedback Board",
    tags: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
    feedbackList: [
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
  });
}
