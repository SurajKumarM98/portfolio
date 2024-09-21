export type Project = {
  title: string;
  description: string;
  slug: string;
};

export type ProjectSection = {
  sectionTitle: string;
  projects: Project[];
};
