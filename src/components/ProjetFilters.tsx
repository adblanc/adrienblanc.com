import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { FilterProjects, Filter } from "../pages";

const FILTERS: { title: string; value: Filter }[] = [
  {
    title: "#42",
    value: "42",
  },
  { title: "#side-projects", value: "side-projects" },
];

export interface ProjectFiltersProps {
  filterProjects: FilterProjects;
  filter: Filter;
}

const ProjectFilters: React.SFC<ProjectFiltersProps> = ({
  filterProjects,
  filter,
}) => {
  const router = useRouter();
  const handleFilter = (value: Filter) => {
    if (value === filter) {
      filterProjects("all");
    } else {
      filterProjects(value);
    }
  };

  return (
    <section className="flex flex-row justify-center border-b border-t border-gray-300">
      {FILTERS.map(({ title, value }) => (
        <Link key={title} href={`${router.basePath}#projects`}>
          <a
            key={title}
            onClick={() => handleFilter(value)}
            className={`${
              value === filter ? "bg-gray-800 text-gray-200" : "bg-white"
            } rounded-full m-2 py-2 px-3 text-xs cursor-pointer uppercase tracking-wider font-bold focus:outline-none border-2 border-gray-800 shadow-sm hover:shadow-md hover:bg-gray-800 hover:text-gray-200 transition ease-in-out duration-300`}
          >
            {title}
          </a>
        </Link>
      ))}
    </section>
  );
};

export default ProjectFilters;
