import Tag, { TagProps } from "../Tag/Tag";
import styles from "./TagList.module.css";

interface TagListProps {
  tags: TagProps[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <li className={styles.tagList}>
      {tags.map((tag) => (
        <Tag {...tag} />
      ))}
    </li>
  );
}
