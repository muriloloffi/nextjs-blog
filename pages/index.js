import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
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
        <div>
          <Link href="/posts/first-post">First post</Link>
        </div>
      </section>
    </Layout>
  );
}
