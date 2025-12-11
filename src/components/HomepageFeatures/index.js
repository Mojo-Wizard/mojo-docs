import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FlameIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 96 96" role="img" aria-hidden="true">
    <path
      d="M48 6C34 20 24 34 24 52c0 18 10 32 24 32s24-11 24-24C72 40 64 28 48 6Z"
      fill="#ff6d00"
      opacity="0.9"
    />
    <path
      d="M48 36c6 6 9 12 9 19s-4 12-9 12-9-5-9-12 3-13 9-19Z"
      fill="#ffd89c"
    />
  </svg>
);

const NotebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 96 96" role="img" aria-hidden="true">
    <rect x="20" y="16" width="56" height="64" rx="8" fill="#1d1f2b" />
    <rect x="28" y="24" width="40" height="48" rx="4" fill="#2a2d3d" />
    <path
      d="M32 32h24M32 44h28M32 56h20"
      stroke="#ffb347"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const CompassIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 96 96" role="img" aria-hidden="true">
    <circle cx="48" cy="48" r="34" fill="#1f2233" />
    <circle cx="48" cy="48" r="28" stroke="#ff6d00" strokeWidth="4" fill="none" />
    <path
      d="M48 22v10M48 64v10M70 48H60M36 48H26"
      stroke="#ffd89c"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M48 34l10 14-10 14-10-14z"
      fill="#ff6d00"
      opacity="0.85"
    />
  </svg>
);

const FeatureList = [
  {
    title: "Curated launchpad",
    Icon: FlameIcon,
    description: (
      <>
        Instead of recreating documentation, this hub simply tells you which
        link to open and why it matters. No more guessing where Modular stashed
        that ownership guide.
      </>
    ),
  },
  {
    title: "Context with personality",
    Icon: NotebookIcon,
    description: (
      <>
        Each blurb explains how a topic fits into real projects (Python
        interop, GPU kernels, MAX experiments) using the same casual tone
        you’d hear in a hallway chat.
      </>
    ),
  },
  {
    title: "Room to evolve",
    Icon: CompassIcon,
    description: (
      <>
        Today it’s a link hub. Tomorrow it might host learning paths, project
        prompts, or GPU scavenger hunts. The structure is intentionally loose so
        it can morph with Mojo’s growth.
      </>
    ),
  },
];

function Feature({ Icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Icon className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
