import Head from 'next/head';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Metendo a cara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hora de virar um <h1 className="text-gray-300">AGIOTA</h1>
        </h1>
      </main>
    </div>
  );
};

export default IndexPage;
