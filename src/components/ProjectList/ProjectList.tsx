import { get42Projects, getPersonalProjects } from "../../constants";
import Link from "next/link";
import styles from "./ProjectList.module.css";

interface Props {
  show42?: boolean;
  showPersonal?: boolean;
}

export default function ProjectList({ show42, showPersonal }: Props) {
  return (
    <li className={styles.list}>
      {show42 !== false &&
        get42Projects().map((p) => (
          <ul key={p.slug}>
            <Link href="/[category]/[name]" as={p.slug}>
              <a>{p.title}</a>
            </Link>
          </ul>
        ))}
      {showPersonal !== false &&
        getPersonalProjects().map((p) => (
          <ul key={p.slug}>
            <Link href="/[category]/[name]" as={p.slug}>
              <a>{p.title}</a>
            </Link>
          </ul>
        ))}
    </li>
  );
}
