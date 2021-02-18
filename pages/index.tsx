import Head from 'next/head';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};
