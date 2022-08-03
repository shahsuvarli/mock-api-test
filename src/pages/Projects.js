import React, { useEffect, useState } from "react";
import {
  projectsAddAPI,
  projectsAPI,
  projectsDeleteAPI,
} from "../api/projects";

function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    projectsAPI.then((res) => {
      setProjects(res.data.projects);
    });
  }, []);

  const deleteProject = (id) => {
    projectsDeleteAPI(id).then((res) => {
      let newArray = [...projects].filter((project) => project.id !== id);
      setProjects(newArray);
    });
  };

  const addProject = (item) => {
    projectsAddAPI(item).then((res) => {
      let newArray = [...projects, item];
      setProjects(newArray);
    });
  };

  if (!projects) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            {project.name}
            <button onClick={() => deleteProject(project.id)}>X</button>
          </div>
        );
      })}
      <button
        onClick={() =>
          addProject({ id: 3, name: "Name3", surname: "Surname3" })
        }
      >
        add
      </button>
    </div>
  );
}

export default Projects;
