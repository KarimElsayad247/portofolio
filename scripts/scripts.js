function fillProjects() {
    projects.forEach(project => {
        let listItem = document.createElement('li');
        listItem.className = "project-card";
        
        let projectDescriptionDiv = document.createElement('div');
        projectDescriptionDiv.className = "project-discription";

        let cardLinksDiv = document.createElement('div');
        cardLinksDiv.className = "card-links";

        let repoLinkDiv = document.createElement('div');
        repoLinkDiv.className = "link";
        repoLinkDiv.id = "repo-link";

        let liveLinkDiv = document.createElement('div');
        liveLinkDiv.className = "link";
        liveLinkDiv.id = "live-link";

        let projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        let projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        listItem.appendChild(projectDescriptionDiv);
        listItem.appendChild(cardLinksDiv);

        projectDescriptionDiv.appendChild(projectTitle);
        projectDescriptionDiv.appendChild(projectDescription);


        let githubLink = document.createElement('a');
        githubLink.href = project.github;   

        let githubLogo = document.createElement('img');
        githubLogo.src = "../images/github.png";
        githubLogo.alt = "github logo";
        
        let liveLink = document.createElement('a');
        liveLink.href = project.live;   

        let liveLogo = document.createElement('img');
        liveLogo.src = "../images/antenna.png";
        liveLogo.alt = "antenna icon";

        githubLink.appendChild(githubLogo);
        githubLink.appendChild(document.createTextNode("Github"));
        liveLink.appendChild(liveLogo);
        liveLink.appendChild(document.createTextNode("Live!"));
        repoLinkDiv.appendChild(githubLink);
        liveLinkDiv.appendChild(liveLink);

        
        cardLinksDiv.appendChild(repoLinkDiv);
        cardLinksDiv.appendChild(liveLinkDiv);

        var list = document.getElementsByClassName("projects-container");
        list[0].appendChild(listItem);

    });

}



window.addEventListener('load', function() {
    fillProjects();
})