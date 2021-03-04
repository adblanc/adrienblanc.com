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

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  filterProjects,
  filter,
}) => {
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
        <button
          key={title}
          onClick={() => handleFilter(value)}
          className={`${
            value === filter
              ? "bg-gray-800 text-gray-200 dark:text-gray-900 dark:bg-gray-100"
              : "bg-white dark:bg-gray-800 dark:text-gray-200"
          } rounded-full m-2 py-2 px-3 text-xs cursor-pointer uppercase tracking-wider font-bold focus:outline-none border-2 border-gray-800 shadow-sm hover:shadow-md hover:bg-gray-800 hover:text-gray-200 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition ease-in-out duration-300`}
        >
          {title}
        </button>
      ))}
    </section>
  );
};

export default ProjectFilters;
