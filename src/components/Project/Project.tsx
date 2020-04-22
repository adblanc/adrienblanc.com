import styles from "./Project.module.css";

export interface ProjectProps {
  tags: string[];
  title: string;
  backgroundImage?: any;
  description: string;
}

export default function Project({ tags, title }: ProjectProps) {
  console.log(tags, title);
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
