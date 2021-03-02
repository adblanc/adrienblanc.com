const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  ...props
}) => (
  <a
    className="font-semibold underline cursor-pointer"
    rel="noopener noreferrer"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

export interface AboutMeProps {
  filterProjects: (category: string) => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ filterProjects }) => {
  return (
    <section className="max-w-2xl px-4 mx-auto text-gray-800">
      <div className="mb-12 text-xl leading-relaxed">
        <span className="leading-normal font-bold text-2xl">
          Hi, my name is <h1 className="inline-block">Adrien</h1>
          <span aria-hidden> 🙂 </span>
        </span>
        , I'm a software engineer based in Paris and currently studying at{" "}
        <Link href="https://www.42.fr/">42</Link>. I love to build{" "}
        <Link onClick={() => filterProjects("side-projects")}>
          side-projects
        </Link>
        , mostly using <Link href="https://reactjs.org/">React</Link>,{" "}
        <Link href="https://reactnative.dev/">React Native</Link> and{" "}
        <Link href="https://graphql.org/">GraphQL</Link>, everything written in{" "}
        <Link href="https://www.typescriptlang.org/">Typescript</Link>.
      </div>
    </section>
  );
};

export default AboutMe;
