import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const googleProvider = new GoogleAuthProvider();
