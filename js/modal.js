(function initializeModal() {

    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal__close");
    const modalTitle = modal.querySelector(".modal__title");
    const body = modal.querySelector(".modal__body");
    const footer = modal.querySelector(".modal__footer");

    const projects = document.querySelectorAll(".project");
    for (project of projects)
        project.addEventListener("click", e => showModal(e.target));

    modalClose.onclick = () => modal.style.display = "none";
    modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; }

    function showModal(caller) {
        const project = caller.closest(".project");
        const keywords = project.getAttribute("data-keywords").split(" ");
        let footerHTML = "";
        for (keyword of keywords)
            footerHTML += '<span class="modal__keyword">' + keyword + '</span> ';
        footer.innerHTML = footerHTML;

        modalTitle.innerText = project.getAttribute("data-title");

        const columnLeft = body.querySelector(".col--left");
        const columnRight = body.querySelector(".col--right");
        while (columnLeft.firstChild) columnLeft.removeChild(columnLeft.firstChild);
        while (columnRight.firstChild) columnRight.removeChild(columnRight.firstChild);

        const demo = project.getAttribute("data-href-demo");
        const github = project.getAttribute("data-href-github");

        const projectLinks = `
            <div class="project-links">
                ${demo ? '<a href="' + demo + '" target="_blank" class="btn-contact project-link"><svg class="icon-mi"><use xlink:href="/svgs/sprite.svg#icon-code"></use></svg> Demo</a>' : ''}
                ${github ? '<a href="' + github + '" target="_blank" class="btn-contact project-link"><svg class="icon-mi"><use xlink:href="/svgs/sprite.svg#icon-github"></use></svg> GitHub</a>' : ''}
            </div>
                `

        columnLeft.innerHTML = projectLinks + project.querySelector(".project-modal-description").innerHTML;
        const img = project.querySelector(".project-img").cloneNode(false);
        img.style.opacity = 1;
        columnRight.appendChild(img);

        modal.style.display = "block";
    }

})()