import { IProject } from "../lib/projects";
import Project from "./Project";

export interface ProjectsListProps {
  projects: IProject[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 h-100 p-6">
        {projects.map((project) => (
          <Project key={project.slug} data={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
