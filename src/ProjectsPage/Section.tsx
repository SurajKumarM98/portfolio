import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectSection } from "./types";
import { useNavigate } from "react-router-dom";

const Section = ({ project }: { project: ProjectSection }) => {
  const { sectionTitle, projects } = project;
  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      <p className="border-b text-4xl">{sectionTitle}</p>
      <div className="flex space-x-8">
        {projects.map(({ title, description, slug }) => (
          <Card
            className="hover:bg-accent hover:text-accent-foreground cursor-pointer"
            onClick={() => navigate(slug)}
          >
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Section;
