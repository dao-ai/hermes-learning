import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-10 pb-20">
      <h1 className="text-2xl font-bold mb-1">🏗️ 实操项目练习</h1>
      <p className="text-muted text-sm mb-8">每个阶段附带一个实战项目，学完对应阶段后练手</p>

      {projects.map((proj, i) => (
        <ProjectCard key={i} {...proj} index={i} />
      ))}
    </div>
  );
}
