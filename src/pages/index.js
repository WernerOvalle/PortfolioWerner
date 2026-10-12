import Head from 'next/head';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Certificates from '../components/Certificates/Certificates';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { yearsOfExperience } from '../constants/constants';

const SITE_URL = 'https://portfoliowerner.netlify.app';
const TITLE = 'Werner Ovalle — Full-Stack Software Engineer';
const description = (years) =>
  `Full-stack software engineer with ${years}+ years of experience across .NET, React, Next.js, SQL and Azure, and deep experience building systems for the financial sector.`;

// The site is a static export, so this runs at build time: every deploy bakes in
// the current count, and the page keeps it in sync on the client after that.
export const getStaticProps = () => ({ props: { years: yearsOfExperience() } });

const Home = ({ years }) => {
  const metaDescription = description(years);
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${SITE_URL}/images/profile.jpg`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/images/profile.jpg`} />
      </Head>
      <Section $grid>
        <Hero />
        <BgAnimation /> 
      </Section>
    
      <Timeline initialYears={years} />
      <Technologies />
      <Projects />
      <Certificates />
    </Layout>
  );
};

export default Home;
