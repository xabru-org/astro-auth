import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

import { firebase } from '@/firebase/config';

export const loginGoogle = defineAction({
  accept: 'json',
  input: z.any(),
  handler: async (credentials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credentials);

    if (!credential) throw new Error('Google SignIn Failed');

    await signInWithCredential(firebase.auth, credential);

    return { ok: true };
  },
});
