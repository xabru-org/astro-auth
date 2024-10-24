import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { signInWithEmailAndPassword, type AuthError } from 'firebase/auth';

import { firebase } from '@/firebase/config';

export const loginUser = defineAction({
  accept: 'form',
  input: z.object({
    email: z.string().email(),
    password: z.string().min(3),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ password, email, remember_me }, { cookies }) => {
    // cookies
    if (remember_me) {
      cookies.set('email', email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
        path: '/',
      });
    } else {
      cookies.delete('email', {
        path: '/',
      });
    }

    // login user
    try {
      const user = await signInWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      return JSON.parse(JSON.stringify(user));
    } catch (error) {
      const firebaseError = error as AuthError;

      if (firebaseError.code === 'auth/invalid-credential') {
        throw new Error('Invalid Credentials');
      }

      throw new Error('Error detected');
    }
  },
});
