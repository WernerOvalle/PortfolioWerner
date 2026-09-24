import Head from 'next/head';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Certficates from '../components/Certificates/Certificates';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const SITE_URL = 'https://portfoliowerner.netlify.app';
const TITLE = 'Werner Ovalle — Software Engineer (.NET)';
const DESCRIPTION =
  'Software Engineer building CRM and lending platforms for banks across Central America. 7+ years in .NET, React and SQL Server.';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/profile.png`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/profile.png`} />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation /> 
      </Section>
    
      <Timeline />
      <Technologies />
      <Projects />
      <Certficates />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
