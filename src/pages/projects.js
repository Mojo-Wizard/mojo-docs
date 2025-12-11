import React, {useEffect, useMemo, useRef, useState} from 'react';
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
];

const categoryMap = CATEGORY_DEFINITIONS.reduce((acc, def) => {
  acc[def.id] = def;
  return acc;
}, {});

const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [showLeftHint, setShowLeftHint] = useState(false);
  const [showRightHint, setShowRightHint] = useState(true);

  const controlsRef = useRef(null);
  const dragState = useRef({isDragging: false, startX: 0, scrollLeft: 0});

  useEffect(() => {
    updateHints();
  }, []);

  const handlePointerDown = (clientX) => {
    const scroller = controlsRef.current;
    if (!scroller) return;
    dragState.current = {
      isDragging: true,
      startX: clientX,
      scrollLeft: scroller.scrollLeft,
    };
    setDragging(true);
  };

  const handlePointerMove = (clientX, preventDefault = false) => {
    if (!dragState.current.isDragging) return;
    const scroller = controlsRef.current;
    if (!scroller) return;
    const dx = clientX - dragState.current.startX;
    if (preventDefault) {
      preventDefault();
    }
    scroller.scrollLeft = dragState.current.scrollLeft - dx;
    updateHints();
  };

  const endDrag = () => {
    dragState.current.isDragging = false;
    setDragging(false);
  };

  const scrollToStart = () => {
    controlsRef.current?.scrollTo({left: 0, behavior: 'smooth'});
    setTimeout(updateHints, 200);
  };

  const scrollToEnd = () => {
    const scroller = controlsRef.current;
    if (!scroller) return;
    scroller.scrollTo({left: scroller.scrollWidth, behavior: 'smooth'});
    setTimeout(updateHints, 200);
  };

  const updateHints = () => {
    const scroller = controlsRef.current;
    if (!scroller) return;
    const {scrollLeft, scrollWidth, clientWidth} = scroller;
    setShowLeftHint(scrollLeft > 8);
    setShowRightHint(scrollLeft + clientWidth < scrollWidth - 8);
  };

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

        <div className={styles.controlsWrapper}>
          {showLeftHint ? (
            <button
              type="button"
              className={clsx(styles.scrollHint, styles.scrollHintLeft)}
              onClick={scrollToStart}>
              ⟨
            </button>
          ) : null}
          {showRightHint ? (
            <button
              type="button"
              className={clsx(styles.scrollHint, styles.scrollHintRight)}
              onClick={scrollToEnd}>
              ⟩
            </button>
          ) : null}
          <div
            ref={controlsRef}
            className={clsx(styles.controls, {[styles.controlsDragging]: dragging})}
            onMouseDown={(e) => handlePointerDown(e.clientX)}
            onMouseMove={(e) => {
              if (dragState.current.isDragging) {
                e.preventDefault();
                handlePointerMove(e.clientX);
              }
            }}
            onMouseLeave={endDrag}
            onMouseUp={endDrag}
            onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
            onTouchMove={(e) =>
              handlePointerMove(e.touches[0].clientX, () => e.preventDefault())
            }
            onTouchEnd={endDrag}
            onScroll={updateHints}>
            <div className={styles.controlsSpacer} />
            <button
              type="button"
              className={clsx(styles.controlButton, {
                [styles.controlButtonActive]: activeCategory === 'all',
              })}
              onClick={() => handleCategoryChange('all')}>
              All
            </button>
            {CATEGORY_DEFINITIONS.map((category) => (
              <button
                type="button"
                key={category.id}
                className={clsx(styles.controlButton, {
                  [styles.controlButtonActive]: activeCategory === category.id,
                })}
                onClick={() => handleCategoryChange(category.id)}>
                {category.label}
              </button>
            ))}
            <div className={styles.controlsSpacer} />
          </div>
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
