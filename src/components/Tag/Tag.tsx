import Link from "next/link";
import styles from "./Tag.module.css";

export interface TagProps {
  label: string;
  href: string;
}

export default function Tag({ label, href }: TagProps) {
  return (
    <Link href={href}>
      <a className={styles.tag}>{label}</a>
    </Link>
  );
}
