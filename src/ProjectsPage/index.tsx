import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import ImageClassifier from "@/Project/ImageClassifier";

const ProjectsPage = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/image-classifier" element={<ImageClassifier />} />
      </Routes>
    </div>
  );
};

export default ProjectsPage;
