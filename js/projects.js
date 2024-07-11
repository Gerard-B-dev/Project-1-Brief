

window.addEventListener("load", async () => {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
        );
        const data = await response.json();

        const mainProjectId = getQuerystringId();
        let mainProjectIndex = data.findIndex(
            (project) => project.uuid == mainProjectId
        );

        const mainProject = data[mainProjectIndex];
        addMainProject(mainProject);

        data.splice(mainProjectIndex, 1);
        const otherProjects = data.slice(0, 3).reverse();
        addOtherProjects(otherProjects);
    } catch (error) {
        toggleModal();
    }
});

function getQuerystringId() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return params.id;
}

function addMainProject(project) {
    if (!project) {
        return;
    }

    const projectHTML = `
           <div class="Simplify">
    <div class="hero-t">
      <h1>${project.name}</h1>
      <div class="simplify_block">
        <p id="ui-p">${project.description}</p>
        <p>${project.completed_on}</p>
      </div>
      <div class="img-pro">
        <img src="${project.image}" alt="img">
      </div>
      <div class=" text-s">
        <p>
        ${project.content}
        </p>
      </div>
    </div>
</div>
  
        
      `;

    const projectElement = document.getElementById("project");
    projectElement.innerHTML = projectHTML;
}

function addOtherProjects(projects) {
    let articlesHTML = "";

    projects.forEach((project) => {
        articlesHTML += jsonProjectToOtherHtmlArticle(project);
    });

    const container = document.querySelector("div.container");
    container.innerHTML = articlesHTML;
}

function jsonProjectToOtherHtmlArticle(project) {
    if (!project) {
        return;
    }


    const projectHTML = `
          <article class="card"> 
  <img src="${project.image}" alt="${project.name} img">
  <h3>${project.name}</h3>
  <p>${project.description}</p>
  <a href="../pages/projects.html?id=${project.uuid}">Learn more</a>
</article>
      `;

    return projectHTML;
}

