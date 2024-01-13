import { Theme } from './Theme';
import { UserId } from './UserId';

export type Post = {
  likes: string[];
  _id: string;
  text: string;
  userId: UserId;
  themeId: Theme;
  created_at: string;
  updatedAt: string;
  __v: number;
};
