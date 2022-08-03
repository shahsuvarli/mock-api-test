import { AxiosMock, AxiosMockCreate } from "../mock";
import projects from "../mock/projects/projects.json";

AxiosMockCreate.onGet("/projects").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { projects }]);
    }, 500);
  });
});

AxiosMockCreate.onDelete(/\/projects\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 500);
  });
});

AxiosMockCreate.onPost("/projects").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Created" }]);
    }, 500);
  });
});

export const projectsAPI = AxiosMock.get("/projects");
export const projectsDeleteAPI = (id) => AxiosMock.delete(`/projects/${id}`);
export const projectsAddAPI = (item) => AxiosMock.post("/projects", item);
