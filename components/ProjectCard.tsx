"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  VscChevronLeft,
  VscChevronRight,
  VscFileMedia,
  VscLinkExternal,
  VscScreenFull,
  VscScreenNormal,
} from "react-icons/vsc";

import { Project } from "@/types";

import styles from "@/styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const images = useMemo(() => project.images ?? [], [project.images]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
    setIsFullscreen(false);
  }, []);

  const openGallery = useCallback(() => {
    setActiveImageIndex(0);
    setIsFullscreen(false);
    setIsGalleryOpen(true);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  const hasMultipleImages = images.length > 1;

  const goPrev = useCallback(() => {
    setActiveImageIndex((prev) => {
      if (images.length === 0) return 0;
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveImageIndex((prev) => {
      if (images.length === 0) return 0;
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (!isGalleryOpen) return;
    if (images.length === 0) {
      setActiveImageIndex(0);
      return;
    }
    setActiveImageIndex((prev) => Math.min(prev, images.length - 1));
  }, [images.length, isGalleryOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeGallery();
        return;
      }

      if (e.key === "ArrowLeft") {
        if (hasMultipleImages) {
          e.preventDefault();
          goPrev();
        }
        return;
      }

      if (e.key === "ArrowRight") {
        if (hasMultipleImages) {
          e.preventDefault();
          goNext();
        }
      }
    },
    [isGalleryOpen, closeGallery, hasMultipleImages, goPrev, goNext],
  );

  useEffect(() => {
    if (!isGalleryOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGalleryOpen, handleKeyDown]);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.number}>
          <span>{String(index).padStart(2, "0")}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.header}>
              <div className={styles.logoWrapper}>
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={18}
                  height={18}
                  className={styles.logo}
                />
              </div>
              <h3 className={styles.title}>{project.title}</h3>
            </div>

            <p className={styles.description}>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((tech, idx) => (
                <Image
                  key={idx}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  width={24}
                  height={24}
                  className={styles.techIcon}
                />
              ))}
            </div>
          </div>

          <div className={styles.action}>
            <a className={styles.link} href={project.link} target="_blank" rel="noopener noreferrer">
              Xem mã nguồn
              <VscLinkExternal size={12} />
            </a>
            <button type="button" className={styles.picture} onClick={openGallery}>
              Xem ảnh tổng quát dự án
              <VscFileMedia size={12} />
            </button>
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div
          className={`${styles.modalOverlay} ${isFullscreen ? styles.modalOverlayFullscreen : ""}`}
          onClick={closeGallery}
        >
          <div
            className={`${styles.modal} ${isFullscreen ? styles.modalFullscreen : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={`Ảnh dự án: ${project.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>{project.title}</div>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.modalActionButton}
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Thu nhỏ" : "Phóng to"}
                >
                  {isFullscreen ? <VscScreenNormal size={16} /> : <VscScreenFull size={16} />}
                </button>
                <button type="button" className={styles.modalActionButton} onClick={closeGallery} aria-label="Đóng">
                  ×
                </button>
              </div>
            </div>

            <div className={styles.modalBody}>
              {images.length === 0 ? (
                <div className={styles.emptyState}>Chưa có ảnh dự án.</div>
              ) : (
                <div className={styles.viewer}>
                  <div className={styles.stage}>
                    <button
                      type="button"
                      className={`${styles.navButton} ${styles.navLeft}`}
                      onClick={goPrev}
                      disabled={!hasMultipleImages}
                      aria-label="Ảnh trước"
                    >
                      <VscChevronLeft size={18} />
                    </button>

                    <div className={styles.imageWrapper}>
                      <Image
                        src={images[activeImageIndex]}
                        alt={`${project.title} - ảnh ${activeImageIndex + 1}`}
                        fill
                        sizes={isFullscreen ? "100vw" : "(max-width: 640px) 92vw, 1100px"}
                        className={styles.modalImage}
                        priority
                      />
                      <div className={styles.counter}>
                        {activeImageIndex + 1}/{images.length}
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`${styles.navButton} ${styles.navRight}`}
                      onClick={goNext}
                      disabled={!hasMultipleImages}
                      aria-label="Ảnh kế tiếp"
                    >
                      <VscChevronRight size={18} />
                    </button>
                  </div>

                  <div className={styles.thumbs} aria-label="Danh sách ảnh">
                    {images.map((src, idx) => (
                      <button
                        key={`${src}-${idx}`}
                        type="button"
                        className={`${styles.thumbButton} ${idx === activeImageIndex ? styles.thumbActive : ""}`}
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`Xem ảnh ${idx + 1}`}
                      >
                        <Image src={src} alt="" width={96} height={60} className={styles.thumbImage} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
