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
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          I grabbed this domain to host an open-source Mojo doc project. Before
          I shipped anything, I discovered Modular’s community-owned docs were
          already fantastic. Instead of letting the domain collect dust, I
          pivoted this space into a living scrapbook of links, commentary, and
          quick explanations, and I’ll keep layering new experiments here so it
          becomes more helpful over time.
        </p>
        <Link className={styles.primaryButton} to="/docs/">
          Browse the docs
        </Link>
        <div className={styles.buttons}>
          <Link className="button button--link button--lg" to="/about">
            Why this exists
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A playful hub that points to the best Mojo language resources."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
