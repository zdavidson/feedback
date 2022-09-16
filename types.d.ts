declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

export interface CommentType {
  comment: {
    content: string;
    replies?: [Reply];
    users: { name: string; userName: string };
  };
}

export interface Comments {
  comments: [CommentType];
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
