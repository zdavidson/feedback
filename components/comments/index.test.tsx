import { render, screen, waitFor } from "@testing-library/react";

import Comments from ".";

describe("Comments", () => {
  it("renders comments", () => {
    const comments = [
      {
        id: 1,
        content: "This is the first comment",
        users: { name: "User Name", userName: "userName" },
      },
      {
        id: 2,
        content: "This is the second comment",
        users: { name: "User Name", userName: "userName" },
      },
    ];

    render(<Comments comments={comments} />);

    waitFor(() =>
      expect(screen.findAllByText(/this is the first comment/i)).toBeVisible()
    );

    waitFor(() =>
      expect(screen.findAllByText(/this is the second comment/i)).toBeVisible()
    );
  });

  it("renders comments with replies", () => {
    const firstReply = {
      id: 1,
      content: "This is the first reply",
      users: { name: "reply user name", userName: "@replyUserName" },
    };

    const secondReply = {
      id: 2,
      content: "This is the second reply",
      users: { name: "reply user name", userName: "@replyUserName" },
    };

    const commentsWithReplies = [
      {
        id: 1,
        content: "This is the first comment",
        replies: [firstReply, secondReply],
        users: { name: "User Name", userName: "userName" },
      },
      {
        id: 2,
        content: "This is the second comment",
        users: { name: "User Name", userName: "userName" },
      },
    ];

    render(<Comments comments={commentsWithReplies} />);

    waitFor(() =>
      expect(screen.findAllByText(/this is the first comment/i)).toBeVisible()
    );

    waitFor(() =>
      expect(screen.findAllByText(/this is second reply/i)).toBeVisible()
    );
  });
});
