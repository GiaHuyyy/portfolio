import { Metadata } from "next";
import { VscBook, VscLinkExternal, VscGlobe } from "react-icons/vsc";

// import ArticleCard from '@/components/ArticleCard';

// import { Article } from '@/types';

import styles from "@/styles/ArticlesPage.module.css";

export const metadata: Metadata = {
  title: "Articles",
};

export const revalidate = 60;

export default async function ArticlesPage() {

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscBook className={styles.icon} size={24} />
            </div>

            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>Bài viết</h1>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <VscGlobe size={14} />
                    <span>1 posts</span>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.stat}>
                    <span>232 views</span>
                  </div>
                </div>
              </div>

              <p className={styles.subtitle}>
                Tôi đã có vinh dự cùng bạn nhóm được viết bài báo cho KLTN với tư cách là một tác giả kỹ thuật tự do.
              </p>
            </div>
          </div>

          <a href="KTPM_HK1_2025-2026_BBKH" target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
            <span>KTPM_HK1_2025-2026_BBKH</span>
            <VscLinkExternal size={14} />
          </a>
        </header>
      </div>
    </div>
  );
}
