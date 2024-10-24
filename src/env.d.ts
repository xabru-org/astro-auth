/// <reference path="../.astro/types.d.ts" />

interface User {
  name: string;
  email: string;
  emailVerified: boolean;
  avatar: string;
}

declare namespace App {
  interface Locals {
    isLoggedIn: boolean;
    user: User | null;
  }
}
