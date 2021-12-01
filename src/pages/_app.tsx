import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Global from '../styles/Global';
import light from '../styles/themes/light';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
