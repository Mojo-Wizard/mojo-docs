import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './projects.module.css';
import projectsData from '@site/projects.json';

const CATEGORY_DEFINITIONS = [
  {id: 'language-compiler-tools', label: 'Language & Compiler'},
  {id: 'build-packaging-dependency', label: 'Build & Packaging'},
  {id: 'testing-qa', label: 'Testing & QA'},
  {id: 'benchmarking-profiling', label: 'Benchmarking'},
  {id: 'core-utilities', label: 'Core Utilities'},
  {id: 'data-structures-algorithms', label: 'Data Structures'},
  {id: 'math-numerical', label: 'Math & Numeric'},
  {id: 'linear-algebra-tensors', label: 'Linalg & Tensors'},
  {id: 'gpu-accelerator', label: 'GPU & Accelerators'},
  {id: 'machine-learning-deep-learning', label: 'ML & DL'},
  {id: 'python-interop', label: 'Python Interop'},
  {id: 'data-engineering-analytics', label: 'Data Engineering'},
  {id: 'storage-databases', label: 'Storage & DBs'},
  {id: 'networking-protocols', label: 'Networking'},
  {id: 'web-development', label: 'Web'},
  {id: 'observability-operations', label: 'Observability'},
  {id: 'security-cryptography', label: 'Security'},
  {id: 'concurrency-distributed', label: 'Concurrency'},
  {id: 'media-graphics-ui', label: 'Media & UI'},
  {id: 'scientific-simulation-hpc', label: 'Simulation & HPC'},
  {id: 'robotics-embedded', label: 'Robotics & Embedded'},
  {id: 'finance-trading', label: 'Finance'},
  {id: 'games-creative', label: 'Games & Creative'},
  {id: 'learn-play', label: 'Learn & Play'},
];

const categoryMap = CATEGORY_DEFINITIONS.reduce((acc, def) => {
  acc[def.id] = def;
  return acc;
}, {});

const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const categories = useMemo(
    () => [{id: 'all', label: 'All projects'}, ...CATEGORY_DEFINITIONS],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projectsData;
    }
    return projectsData.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const pageItems = filteredProjects.slice(startIndex, startIndex + PAGE_SIZE);

  function handleCategoryChange(categoryId) {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  }

  return (
    <Layout
      title="Community Mojo Projects"
      description="Discover community-driven Mojo projects, experiments, and toolkits.">
      <main className="container margin-vert--lg">
        <div className={styles.pageIntro}>
          <h1>Community Mojo Projects</h1>
          <p>
            These are community-driven experiments, libraries, and references
            built with Mojo. Every entry links directly to the source, and each
            card notes the project&apos;s main focus. Want your project listed?
            Check the contribution instructions in the{' '}
            <a href="https://github.com/mojo-wizard/mojo-docs#adding-a-community-project">
              README
            </a>{' '}
            and submit a PR that updates <code>projects.json</code>.
          </p>
        </div>

        <div className={styles.categoryList}>
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={clsx(styles.categoryButton, {
                [styles.categoryButtonActive]: activeCategory === category.id,
              })}
              onClick={() => handleCategoryChange(category.id)}>
              {category.label}
            </button>
          ))}
        </div>

        {pageItems.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No projects match that filter yet. Check back soon!</p>
          </div>
        ) : (
          <div className={styles.projectsGrid}>
            {pageItems.map((project) => {
              const categoryLabel =
                categoryMap[project.category]?.label ?? 'Uncategorized';
              return (
                <article key={project.name} className={styles.projectCard}>
                  <div>
                    <h2 className={styles.projectTitle}>{project.name}</h2>
                    <span className={styles.tag}>{categoryLabel}</span>
                  </div>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.links}>
                    <a
                      className={styles.linkButton}
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer">
                      Repository
                    </a>
                    {project.docsUrl ? (
                      <a
                        className={styles.linkButton}
                        href={project.docsUrl}
                        target="_blank"
                        rel="noreferrer">
                        Documentation
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {totalPages > 1 ? (
          <div className={styles.pagination}>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}>
              Previous
            </button>
            <span>
              Page {safePage} of {totalPages}
            </span>
            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={safePage === totalPages}>
              Next
            </button>
          </div>
        ) : null}
      </main>
    </Layout>
  );
}
