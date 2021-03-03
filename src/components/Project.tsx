import { IProject } from "../lib/projects";
import Link from "next/link";

export interface ProjectProps {
  data: IProject;
}

const Description: React.FC = ({ children }) => (
  <div className="p-3 opacity-0 absolute top-0 left-0 w-full tracking-wide text-sm overflow-y-auto h-32 bg-opacity-75 bg-gray-900 group-hover:opacity-100 transition-opacity ease-in-out duration-500 text-gray-200">
    <h4 className="uppercase font-semibold text-xs underline">Description</h4>
    {children}
  </div>
);

const Project: React.FC<ProjectProps> = ({
  data: { slug, title, img, tags, description },
}) => {
  return (
    <div className="bg-gray-300 border rounded-lg overflow-hidden group max-w-xs shadow-sm hover:shadow-lg transition-shadow ease-in-out duration-300">
      <Link href={`/${slug}`}>
        <a>
          <div className="relative overflow-hidden">
            <img
              className="h-32 w-full object-cover transition duration-500 transform group-hover:scale-110"
              src={img || ""}
              alt={title}
            />
            <Description>{description}</Description>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="text-gray-700 uppercase font-medium text-xs tracking-wide">
              {tags.map(
                (tag, i) => `${tag}${i !== tags.length - 1 ? ", " : ""}`
              )}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Project;
