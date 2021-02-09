import '../styles/globals.css';
import App, { AppProps } from 'next/app';
import { NextPage } from 'next';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
