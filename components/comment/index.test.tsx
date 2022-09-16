import { render, screen, waitFor } from "@testing-library/react";

import Comment from ".";

describe("Comment", () => {
  it("renders a comment", () => {
    const comment = {
      content: "This is the comment",
      users: { name: "User Name", userName: "userName" },
    };

    render(<Comment comment={comment} />);

    waitFor(() =>
      expect(screen.findAllByText(/this is a comment/i)).toBeVisible()
    );
  });

  it("renders a comment with replies", () => {
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

    const commentWithReply = {
      content: "This is the comment",
      replies: [firstReply, secondReply],
      users: { name: "Comment User Name", userName: "@commentUserName" },
    };

    render(<Comment comment={commentWithReply} />);

    waitFor(() =>
      expect(screen.findAllByText(/this is the first reply/i)).toBeVisible()
    );
  });
});
