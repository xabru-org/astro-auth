import { defineAction } from 'astro:actions';
import { signOut } from 'firebase/auth';

import { firebase } from '@/firebase/config';

export const logout = defineAction({
  accept: 'json',
  handler: async (_, { cookies }) => {
    return await signOut(firebase.auth);
  },
});
