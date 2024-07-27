import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import Image from "next/image";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          ご覧いただきありがとうございます。こちらは私個人のポートフォリオサイトになります。普段の学びは
          <a href="https://qiita.com/ZawaP">Qiita </a>
          にアプトプットしていますため、よろしければそちらも是非ご覧ください。
        </p>
        <p>
          Welcome to Kazu's portfolio website! I am junior software developer
          and happy to engage with you! - Please check more about me from here.
          (<a href="https://github.com/ZawaPaP">Github </a>/
          <a href="https://www.linkedin.com/in/kazuhide-izawa-issac/">
            {" "}
            Linkedin
          </a>
          )
        </p>
      </section>
      <section
        id="projects"
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(
            ({ id, date, title, link, skills, contentHtml, screenshot }) => (
              <li className={utilStyles.listItem} key={id}>
                <span className={utilStyles.boldTitle}>{title}</span> &nbsp; (
                {date})
                <br />
                <p className={utilStyles.DarkGrayText}>
                  {contentHtml}(<a href={link}>Link</a>)
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
            )
          )}
        </ul>
      </section>
      <section
        id="profile"
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Profile</h2>
        <p className={utilStyles.lightText}>
          With over 8 years of experience in the tech industry as Account
          Manager, I have started the new career as software engineer since Mar
          2024. I have self-taught ComputerScience, DataStructure, Algorithm and
          python with Cousera, created few simple applications and holding a
          Bachelor's degree in environmental engineer in Hokkaido University.
          I'm passionate about creating efficient, scalable web applications.
          Also, I'm always eager to take on new challenges and learn new
          technologies.
        </p>
      </section>
    </Layout>
  );
}
