const theme = {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
    cardBg: "#0F1624",
    cardTitle: "#9cc9e3",
    titleGradient: "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
    textMuted: "rgba(255, 255, 255, 0.75)",
    textSubtle: "rgba(255, 255, 255, 0.5)",
    textFaint: "rgba(255, 255, 255, 0.4)",
    borderSubtle: "rgba(255, 255, 255, 0.1)",
    borderMuted: "rgba(255, 255, 255, 0.33)",
    // Card surface system
    cardSurface: "linear-gradient(160deg, #1a2440 0%, #121b2d 45%, #0d1421 100%)",
    cardShadow: "0 10px 30px rgba(0, 0, 0, 0.45)",
    cardShadowHover: "0 26px 55px rgba(0, 0, 0, 0.65), 0 0 45px rgba(0, 119, 182, 0.18)",
    cardSheen: "linear-gradient(135deg, rgba(156, 201, 227, 0.7) 0%, rgba(255, 255, 255, 0.06) 35%, rgba(255, 255, 255, 0) 60%, rgba(252, 191, 73, 0.55) 100%)",
    cardFade: "linear-gradient(to bottom, rgba(26, 36, 64, 0) 40%, rgba(24, 33, 58, 0.65) 75%, #1a2440 100%)",
    chipBg: "rgba(255, 255, 255, 0.06)",
    chipBorder: "rgba(255, 255, 255, 0.12)",
    // Accent system — one brand accent (sky blue) used by buttons, dividers,
    // highlights and the hero; gold is kept only as a secondary touch.
    accent: "#38BDF8",
    accentStrong: "#0284C7",
    accentGradient: "linear-gradient(120deg, #0EA5E9 0%, #0369A1 100%)",
    accentGradientHover: "linear-gradient(120deg, #38BDF8 0%, #0284C7 100%)",
    accentTextGradient: "linear-gradient(120deg, #BAE6FD 0%, #38BDF8 50%, #0EA5E9 100%)",
    accentSoft: "rgba(56, 189, 248, 0.12)",
    accentGlow: "rgba(56, 189, 248, 0.35)",
    secondary: "#FCBF49",
    success: "#22C55E",
    pageGlow: "radial-gradient(60rem 40rem at 85% -10%, rgba(56, 189, 248, 0.14), transparent 60%), radial-gradient(50rem 36rem at -10% 30%, rgba(2, 132, 199, 0.10), transparent 60%)",
    gridDot: "rgba(255, 255, 255, 0.045)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
};

export default theme;
