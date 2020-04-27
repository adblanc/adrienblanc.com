import Link from "next/link";
import styles from "./ProjectList.module.css";

interface Props {
  projects: any[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <ul className={styles.list}>
      {projects.map((p) => (
        <li className={styles.listItem} key={p.slug}>
          <Link href="/[category]/[name]" as={p.slug}>
            <a className={styles.anchor}>{p.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
