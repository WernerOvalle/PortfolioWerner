import { MotionConfig } from 'framer-motion';
import Theme from '../styles/theme';
import { ThemeContextProvider } from '../contexts/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Theme>
        {/* Honour the OS "reduce motion" setting: framer keeps fades but drops movement. */}
        <MotionConfig reducedMotion="user">
          <Component {...pageProps} />
        </MotionConfig>
      </Theme>
    </ThemeContextProvider>
  );
}
 