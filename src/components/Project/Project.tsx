import styles from "./Project.module.css";

export interface ProjectProps {
  tags: string[];
  title: string;
  backgroundImage?: any;
  description: string;
  slug: string;
  category: "42" | "personal";
}

export default function Project({ tags, title }: ProjectProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tagsContainer}>
        {tags.map((tag) => (
          <div className={styles.tag}>{tag}</div>
        ))}
      </div>
      <div className={styles.titleContainer}>{title}</div>
    </div>
  );
}
