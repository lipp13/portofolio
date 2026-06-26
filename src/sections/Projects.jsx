import { useState } from "react";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import Badge from "../components/Badge";
import Button from "../components/Button";
import FadeIn, { StaggerContainer, StaggerItem } from "../components/FadeIn";

function ProjectCard({ project }) {
  return (
    <div className="glass rounded-2xl overflow-hidden gradient-border group hover:border-accent/20 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 bg-surface-card overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-transparent">
            <div className="text-4xl font-bold text-accent/20">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant={project.status}>{project.status}</Badge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-light transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-light text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={IconExternalLink}
            >
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              target="_blank"
              variant="secondary"
              size="sm"
              icon={IconBrandGithub}
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects, projectFilters } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-surface-elevated">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            label="Projects"
            title="Featured Projects"
            subtitle="Kumpulan project yang saya kerjakan, dari ide hingga deployment."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${
                    activeFilter === filter
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "glass text-muted-light hover:text-white hover:border-accent/20"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeFilter}
        >
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
