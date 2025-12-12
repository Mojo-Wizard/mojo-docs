import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <p className={styles.heroKicker}>Unofficial, unapologetically human</p>
        <h1 className="hero__title">Mojo Docs</h1>
        <p className="hero__subtitle">
          I grabbed this domain to host an open-source Mojo doc project. Before
          I shipped anything, I discovered Modular’s community-owned docs were
          already fantastic. Instead of letting the domain collect dust, I
          turned this into a curated launchpad with official doc pointers,
          community-written guides, and room for full project docs as they roll
          in.
        </p>
        <Link className={styles.primaryButton} to="/docs/">
          Browse the docs
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Mojo Docs – curated Mojo links, guides, and project docs"
      description="A playful hub with curated Mojo docs, community guides, and hosted project write-ups."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
