import { User } from '../../users/user.entity';

declare module 'express' {
  interface Request {
    user?: {
      userId: number;
      email: string;
    };
  }
}
