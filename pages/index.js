import Head from "next/head";
import Layout, { siteTitle } from "components/layout/layout";
import utilStyles from "styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "utils/posts";
import Date from "components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Brazilian; BTech in System Analysis and Development @{" "}
          <a href="https://www.udesc.br/cct" target="_blank">
            Udesc Joinville
          </a>
          ; Full-stack web developer and aspiring software engineer;
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
