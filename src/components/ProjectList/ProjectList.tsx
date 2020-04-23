import { get42Projects, getPersonalProjects } from "../../constants";
import Link from "next/link";
import styles from "./ProjectList.module.css";

interface Props {
  show42?: boolean;
  showPersonal?: boolean;
}

export default function ProjectList({ show42, showPersonal }: Props) {
  return (
    <ul className={styles.list}>
      {show42 !== false &&
        get42Projects().map((p) => (
          <li className={styles.listItem} key={p.slug}>
            <Link href="/[category]/[name]" as={p.slug}>
              <a className={styles.anchor}>{p.title}</a>
            </Link>
          </li>
        ))}
      {showPersonal !== false &&
        getPersonalProjects().map((p) => (
          <li className={styles.listItem} key={p.slug}>
            <Link href="/[category]/[name]" as={p.slug}>
              <a className={styles.anchor}>{p.title}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
}
