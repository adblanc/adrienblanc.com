import TagList from "../TagList/TagList";
import { ProjectData } from "../../pages/[category]/[name]";

export default function ProjectPresentation({ title, tags }: ProjectData) {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <TagList tags={tags.map((tag) => ({ href: tag, label: tag }))} />
    </div>
  );
}
