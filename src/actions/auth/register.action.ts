import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  type AuthError,
} from 'firebase/auth';

import { firebase } from '@/firebase/config';

export const registerUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(3),
    password: z.string().min(3),
    email: z.string().email(),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ name, password, email, remember_me }, { cookies }) => {
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

    // create user
    try {
      const user = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      // console.log('🚀 ~ user:', user);

      updateProfile(firebase.auth.currentUser!, { displayName: name });
      // await sendEmailVerification(firebase.auth.currentUser!, { url: 'http://localhost:4321/protected?emailVerified=true' }) //prettier-ignore
      await sendEmailVerification(firebase.auth.currentUser!, { url: `${import.meta.env.WEBSITE_URL}/protected?emailVerified=true` }) //prettier-ignore

      return JSON.parse(JSON.stringify(user));
    } catch (error) {
      const firebaseError = error as AuthError;

      if (firebaseError.code === 'auth/email-already-in-use') {
        throw new Error('Email already in use');
      }

      throw new Error('Error detected');
    }

    // return { ok: true, message: 'User account has been successfully created' };
  },
});
