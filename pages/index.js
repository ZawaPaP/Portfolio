import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Form from '../components/form';
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';
import Image from 'next/image';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({allProjectsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to Kazu's portfolio website! I am junior software developer and happy to engage with you! - Please check more about me from here.
          (
            <a href="https://github.com/ZawaPaP">Github </a> 
            / 
            <a href="https://www.linkedin.com/in/kazuhide-izawa-issac/"> Linkedin</a>
          )
        </p>
      </section>
      <section id="projects" className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title, link, skills,contentHtml, screenshot}) => (
            <li className={utilStyles.listItem} key={id}>
            <span className={utilStyles.boldTitle}>{title}</span> &nbsp; ({date})
              <br />
              <p className={utilStyles.DarkGrayText}>
              {contentHtml}
              (<a href ={link}>Link</a>)
              <br />
              <span className={utilStyles.hushtag}>{skills}</span>
              </p>
              {screenshot && (
              <div className={utilStyles.projectImage}>
                <Image
                  src={screenshot}
                  layout="responsive"
                  width={400}
                  height={200}
                />
              </div>
            )}
            </li>
          ))}
        </ul>
      </section>
      <section id="profile" className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Profile</h2>
      <p className={utilStyles.lightText}>
      With over 8 years of experience in the tech industry as account manager, I've decided to change my career to engineer. I have self-taught ComputerScience, DataStructure, Algorithm and python with Cousera, created few simple applications and holding a Bachelor's degree in environmental engineer in Hokkaido University. I'm passionate about creating efficient, scalable web applications. Also, I'm always eager to take on new challenges and learn new technologies.
      </p>
      <p className={utilStyles.lightText}>
        Please feel free to browse my projects and contact me. I'm always open to collaboration and new ideas.
      </p>
      </section>
      <section id="contact" className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Contacts</h2>
      <Form />
      </section>
    </Layout>
  );
}