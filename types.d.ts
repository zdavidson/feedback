declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

export interface Comment {
  content: string;
  id: number;
  replies?: [ReplyType];
  users: { name: "Elijah Moss"; userName: "@hexagon.bestagon" };
}

export interface CommentType {
  comment: {
    content: string;
    replies?: [ReplyType];
    users: { name: string; userName: string };
  };
}

export interface Comments {
  comments: [Comment];
}

export interface Reply {
  reply: {
    id: number;
    content: string;
    users: { name: string; userName: string };
  };
}

export interface Tag {
  id: number;
  name: string;
}

export interface Suggestion {
  comments: [];
  created_at: string;
  description: string;
  id: number;
  statusID: null | number;
  statuses: null | { name: string };
  tagID: number | string;
  tags: { name: string };
  name: string;
  title: string;
  upvotes: number;
}

export interface RoadmapData {
  map(
    arg0: (suggestion: Suggestion) => JSX.Element | null
  ): import("react").ReactNode;
  [{
    comments: [],
    created_at: string,
    description: string,
    id: number,
    statusID: null | number,
    statuses: null | { name: string },
    tagID: number | string,
    tags: { name: string },
    name: string,
    title: string,
    upvotes: number,
  }];
}

export interface ReplyType {
  content: string;
  id: number;
  users: { name: string; userName: string };
}
