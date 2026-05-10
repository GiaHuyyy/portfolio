"use client";

import { VscGithub, VscMail } from "react-icons/vsc";
import Link from "next/link";

import styles from "@/styles/AboutPage.module.css";
import Image from "next/image";

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
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/next_icon.svg"
                        alt="Next.js"
                        width={18}
                        height={18}
                      />
                      Next.js
                      </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/react_icon.svg"
                        alt="React.js"
                        width={18}
                        height={18}
                      />
                      React.js
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/vite_icon.svg"
                        alt="Vite"
                        width={18}
                        height={18}
                      />
                      Vite
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/react_icon.svg"
                        alt="React Native"
                        width={18}
                        height={18}
                      />
                      React Native
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/sass_icon.svg"
                        alt="Sass"
                        width={18}
                        height={18}
                      />
                      Sass
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/shadcn_ui_icon.svg"
                        alt="Shadcn UI"
                        width={18}
                        height={18}
                      />
                      Shadcn UI
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/tailwind_icon.svg"
                        alt="Tailwind CSS"
                        width={18}
                        height={18}
                      />
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Database</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/mysql_icon.svg"
                        alt="MySQL"
                        width={18}
                        height={18}
                      />
                      MySQL
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/mongo_icon.svg"
                        alt="MongoDB"
                        width={18}
                        height={18}
                      />
                      MongoDB
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/redis_icon.svg"
                        alt="Redis"
                        width={18}
                        height={18}
                      />
                      Redis
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/appwrite_icon.svg"
                        alt="Appwrite"
                        width={18}
                        height={18}
                      />
                      Appwrite
                    </span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/nest_icon.svg"
                        alt="Nestjs"
                        width={18}
                        height={18}
                      />
                      Nestjs
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/node_icon.svg"
                        alt="Node.js"
                        width={18}
                        height={18}
                      />
                      Node.js
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/express_icon.svg"
                        alt="Express.js"
                        width={18}
                        height={18}
                      />
                      Express.js
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/java_icon.svg"
                        alt="Java"
                        width={18}
                        height={18}
                      />
                      Java
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/socket_icon.svg"
                        alt="WebSocket (Socket.IO)"
                        width={18}
                        height={18}
                      />
                      WebSocket (Socket.IO)
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/jwt_icon.svg"
                        alt="JWT"
                        width={18}
                        height={18}
                      />
                      JWT
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/rest_api_icon.svg"
                        alt="RESTful APIs"
                        width={18}
                        height={18}
                      />
                      RESTful APIs
                    </span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>DevOps & Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>
                      <Image
                        src={"/logos/github_icon.svg"}
                        alt="Git/GitHub"
                        width={18}
                        height={18}
                      />
                      Git/GitHub
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/vscode_icon.svg"
                        alt="VS Code"
                        width={18}
                        height={18}
                      />
                      VS Code
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/postman_icon.svg"
                        alt="Postman"
                        width={18}
                        height={18}
                      />
                      Postman
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/eclipse_icon.svg"
                        alt="Eclipse"
                        width={18}
                        height={18}
                      />
                      Eclipse
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/spring_icon.svg"
                        alt="Spring"
                        width={18}
                        height={18}
                      />
                      Spring
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/android_studio_icon.svg"
                        alt="Android Studio"
                        width={18}
                        height={18}
                      />
                      Android Studio
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/expo_icon.svg"
                        alt="Expo"
                        width={18}
                        height={18}
                      />
                      Expo Go
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/docker_icon.svg"
                        alt="Docker"
                        width={18}
                        height={18}
                      />
                      Docker
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/jenkins_icon.svg"
                        alt="Jenkins"
                        width={18}
                        height={18}
                      />
                      Jenkins
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/figma_icon.svg"
                        alt="Figma"
                        width={18}
                        height={18}
                      />
                      Figma
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/aws_icon.svg"
                        alt="AWS S3"
                        width={18}
                        height={18}
                      />
                      AWS S3
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/cloudinary_icon.svg"
                        alt="Cloudinary"
                        width={18}
                        height={18}
                      />
                      Cloudinary
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/redux_icon.svg"
                        alt="Redux"
                        width={18}
                        height={18}
                      />
                      Redux
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/vercel_icon.svg"
                        alt="Vercel"
                        width={18}
                        height={18}
                      />
                      Vercel
                    </span>
                    <span className={styles.skillTag}>
                      <Image
                        src="/logos/render_icon.png"
                        alt="Render.com"
                        width={18}
                        height={18}
                      />
                      Render.com
                    </span>
                    <span className={styles.skillTag}>
                      {/* <Image
                        src="/logos/aws_icon.svg"
                        alt="Kiến thức nền tảng về AWS, CI/CD pipelines."
                        width={18}
                        height={18}
                      /> */}
                      Kiến thức nền tảng về AWS, CI/CD pipelines.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Khác</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Ngoài lập trình và viết lách, tôi đang cải thiện kỹ năng tiếng anh (hiện tại 615, mục tiêu 700), kỹ năng giao tiếp và làm việc nhóm. Tôi tin rằng kỹ năng mềm là yếu tố quan trọng để phát triển sự nghiệp bền vững trong ngành công nghệ.
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
