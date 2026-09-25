import Theme from '../styles/theme';
import { ThemeContextProvider } from '../contexts/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeContextProvider>
  );
}
 