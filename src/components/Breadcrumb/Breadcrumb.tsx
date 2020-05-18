import { useRouter, NextRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";

const isVariable = (router: NextRouter, p: string) => {
  return Object.keys(router.query).find((param) => {
    return param === p.replace("[", "").replace("]", "");
  });
};

const getPathsFromQuery = () => {
  const router = useRouter();
  const [, ...paths] = router.pathname.split("/").map((p) => {
    const param = isVariable(router, p);
    if (param) return router.query[param];
    return p;
  });
  return ["home", ...paths] as string[];
};

const getHrefPath = (path: string) => {
  if (path === "home") return "/";

  const { query, pathname } = useRouter();

  let isAVariable = 0;
  for (let prop in query) {
    if (query[prop] === path) {
      path = `\\[${prop}\\]`;
      isAVariable = 1;
    }
  }

  const extraCharacters = isAVariable * 2;

  const currentPathIndex = pathname.search(path);

  return pathname.substring(
    0,
    currentPathIndex + path.length - extraCharacters
  );
};

const getAsPath = (paths: string[], path: string) => {
  if (path === "home") return "/";

  const globalPath = paths.join("/").replace("home", "");

  const currentPathIndex = globalPath.search(path);

  return globalPath.substring(0, currentPathIndex + path.length);
};

export default function BreadCrumb() {
  const paths = getPathsFromQuery();

  return (
    <div className={styles.container}>
      <span className={styles.text}>
        {paths.map((path: string, i: number) => {
          const last = i === paths.length - 1;
          const style = last ? styles.lastAnchor : styles.anchor;

          if (last)
            return (
              <span key={path} className={style}>
                {path}
              </span>
            );
          return (
            <Link
              key={path}
              href={getHrefPath(path)}
              as={getAsPath(paths, path)}
            >
              <a className={style}>{path}</a>
            </Link>
          );
        })}
      </span>
    </div>
  );
}
