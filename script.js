document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { name: "Projeto 1", description: "Descrição do Projeto 1" },
        { name: "Projeto 2", description: "Descrição do Projeto 2" },
        { name: "Projeto 3", description: "Descrição do Projeto 3" }
    ];

    const projectList = document.getElementById("projeto-lista");

    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("projeto");
        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectItem);
    });
});
