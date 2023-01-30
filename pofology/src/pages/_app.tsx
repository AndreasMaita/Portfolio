import { ThemeProvider } from '@/hooks/use-theme';
import '@/styles/app.scss';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider><Analytics />
    </>
  );
}

export default MyApp;
