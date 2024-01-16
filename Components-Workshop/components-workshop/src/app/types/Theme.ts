import { Post } from './Post';
import { UserId } from './UserId';

export type Theme = {
  subscribers: string[];
  posts: string[] | Post[] | any;
  _id: string;
  themeName: string;
  userId: UserId;
  created_at: string;
  updatedAt: string;
  __v: number;
};
