"use client";

import { VscGithub, VscMail, VscLinkExternal } from "react-icons/vsc";
import Link from "next/link";

import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Tô Vũ Gia Huy</h1>
              <p className={styles.role}>Full Stack Developer</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                <span>Quận 12, TP. HCM</span>
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/itsnitinr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>Giới thiệu</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Tôi mong muốn phát triển sự nghiệp trong vai trò Lập trình viên Web, Mobile, đặc biệt trong môi trường
                làm việc hiện đại. Với nền tảng kỹ thuật vững chắc về ReactJS, React Native và kiến trúc Microservice,
                tôi hướng đến việc đóng góp vào các dự án có tính ứng dụng cao trong thực tế, học hỏi từ đội ngũ chuyên
                nghiệp và nâng cao kỹ năng về DevOps, hiệu năng hệ thống và bảo mật.
              </p>

              <p className={styles.paragraph}>
                Mặc dù chuyên về phát triển giao diện người dùng (frontend), tôi cũng thích làm việc với NestJS,
                Node.js, MongoDB và Express trên toàn bộ hệ thống để hiện thực hóa các ứng dụng full-stack.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Kinh nghiệm và Học vấn</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Hiện tại</span>
                </div>
                <h3 className={styles.expRole}>Đại học Công Nghiệp TP.HCM</h3>
                <p className={styles.expCompany}>Chuyên ngành: Kỹ thuật phần mềm</p>
                <ul className={styles.expList}>
                  <li>Hiện đang sắp tốt nghiệp.</li>
                  <li>Học bổng 2025 với GPA 3.42</li>
                  <li>
                    Các môn đã hoàn thành: Cấu trúc dữ liệu và giải thuật, Phát triển web, Quản lý cơ sở dữ liệu, Phát
                    triển ứng dụng,...
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Làm việc 05/2025 - 03/2026</span>
                </div>
                <h3 className={styles.expRole}>CÔNG TY TNHH CÔNG NGHỆ & DỊCH VỤ ĐẤT VIỆT</h3>
                <p className={styles.expCompany}>Vị trí: Lập trình viên Mobile</p>
                <ul className={styles.expList}>
                  <li className={styles.expDesc}>
                    Ứng dụng mobile <strong>“eUTC”</strong> thuộc <strong>Trường Đại học Giao thông Vận tải</strong>,
                    phát triển bằng React Native và TypeScript cùng với ứng dụng mobible <strong>“Gas South”</strong>{" "}
                    phát triển bằng React Native và Javascript. Tiếp cận kiến trúc hệ thống, tham gia phát triển tính
                    năng, sửa lỗi, viết tài liệu, kiểm thử và hỗ trợ deploy Appstore.
                  </li>
                  <li>
                    Trong quá trình làm việc, tôi phối hợp chặt chẽ với đội backend và tester, đồng thời xây dựng giao
                    diện dựa trên thiết kế từ Figma.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Kỹ năng</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>React Native</span>
                    <span className={styles.skillTag}>Shadcn UI</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Database</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>MySQL</span>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>Redis</span>
                    <span className={styles.skillTag}>Appwrite</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Nestjs</span>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express.js</span>
                    <span className={styles.skillTag}>Java</span>
                    <span className={styles.skillTag}>WebSocket (Socket.IO)</span>
                    <span className={styles.skillTag}>JWT</span>
                    <span className={styles.skillTag}>RESTful APIs</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>DevOps & Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git/GitHub</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>Jenkins</span>
                    <span className={styles.skillTag}>Figma</span>
                    <span className={styles.skillTag}>AWS S3</span>
                    <span className={styles.skillTag}>Cloudinary</span>
                    <span className={styles.skillTag}>Redux</span>
                    <span className={styles.skillTag}>Vercel</span>
                    <span className={styles.skillTag}>Render.com</span>
                    <span className={styles.skillTag}>Kiến thức nền tảng về AWS, CI/CD pipelines.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Writing</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;ve had the pleasure of writing for some amazing publications as a freelance technical author:
              </p>

              <div className={styles.writingLinks}>
                <a
                  href="https://www.100ms.live/blog/author/nitin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>100ms Blog</span>
                  <VscLinkExternal size={14} />
                </a>

                <a
                  href="https://blog.logrocket.com/author/nitinranganath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>LogRocket Blog</span>
                  <VscLinkExternal size={14} />
                </a>

                <a
                  href="https://dev.to/itsnitinr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>DEV.to</span>
                  <VscLinkExternal size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Khác</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Ngoài lập trình và viết lách, tôi đang cải thiện kỹ năng tiếng anh, kỹ năng giao tiếp và làm việc nhóm. Tôi tin rằng kỹ năng mềm là yếu tố quan trọng để phát triển sự nghiệp bền vững trong ngành công nghệ.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            Xem các dự án của tôi →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
