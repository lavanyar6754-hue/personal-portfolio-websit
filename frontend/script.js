async function loadProjects() {

const response =
await fetch("http://localhost:5000/api/projects");

const projects = await response.json();

const container =
document.getElementById("project-list");

projects.forEach(project => {

container.innerHTML += `
<div class="project">

<h3>${project.title}</h3>

<p>${project.description}</p>

<a href="${project.github}">
GitHub
</a>

|
<a href="${project.demo}">
Live Demo
</a>

</div>
`;

});
}

loadProjects();