"use client";
import ProjectCard from "./ProjectCard";
import {projects, ProjectProps} from "./projectDetails";
import React, { useState } from "react";

const categories = ["All", "ML", "Computer Vision", "2D/3D", "Web/Software Dev", "FrontEnd", "Database", "DataScience"];

const ProjectGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(selectedCategory));

    return (
        <>
            <div className="mb-6 md:mb-10 flex gap-8 md:gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 w-[90%] lg:max-w-[1200px]">
                <h4
                    className={`text-[14px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
                >
          Check out some of my work!
                </h4>
            </div>

            {/* Category Filters */}
            <div className="mb-8 md:mb-12 flex flex-wrap gap-3 md:gap-4 w-[90%] lg:max-w-[1200px]">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 text-[12px] md:text-[14px] lg:text-[16px] rounded-lg transition-all duration-300 ${
                            selectedCategory === category
                                ? "bg-[#e4ded7] text-[#0E1016] font-bold"
                                : "bg-[#1a1d28] text-[#e4ded7] hover:bg-[#252835]"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid w-[90%] grid-cols-1 gap-y-6 md:gap-y-10 gap-x-6 lg:max-w-[1200px]">
                {filteredProjects.map((project: ProjectProps) => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        techNames={project.techNames}
                        techLinks={project.techLinks}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                        available={project.available}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectGrid;
