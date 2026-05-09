'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Xin chào, tôi&apos;là</p>

            <h1 className={styles.name}>Tô Vũ Gia Huy</h1>

            <p className={styles.role}>Lập trình viên Web & Mobile</p>

            <div className={styles.divider} />

            <p className={styles.description}>
              Tôi tạo ra các ứng dụng web và app gọn gàng, hiệu năng cao bằng các công nghệ hiện đại. Chuyên về TypeScript, NextJS, React, React native, NestJS, NodeJS và xây dựng các sản phẩm được người dùng yêu thích.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>Xem dự án</span>
              <VscArrowRight size={18} />
            </Link>

            <Link href="/about" className={styles.secondaryAction}>
              <span>Tìm hiểu thêm</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/itsnitinr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>

            <span className={styles.linkSeparator}>/</span>

            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
