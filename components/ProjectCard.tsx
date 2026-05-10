import Image from "next/image";
import { VscFileMedia, VscLinkExternal } from "react-icons/vsc";

import { Project } from "@/types";

import styles from "@/styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.number}>
        <span>{String(index).padStart(2, "0")}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image src={project.logo} alt={`${project.title} logo`} width={18} height={18} className={styles.logo} />
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
          <button className={styles.picture}>
            Xem ảnh dự án
            <VscFileMedia size={12} />
             </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
