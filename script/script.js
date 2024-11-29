const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('open'); 
    
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.createElement("div");
    modal.id = "gallery-modal";
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3 id="modal-title"></h3>
            <div id="modal-images" class="image-gallery"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalContent = modal.querySelector(".modal-content");
    const closeModal = modal.querySelector(".close");
    const modalTitle = modal.querySelector("#modal-title");
    const modalImages = modal.querySelector("#modal-images");

    const projects = [
        {
            title: "Proyek 1 - Website Pemesanan Tour Simple",
            images: [
                "/assets/website proyek2.png",
                "/assets/website proyek3.png",
                "/assets/website proyek4.png"
            ]
        },
    ];

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
        const viewMoreButton = document.createElement("button");
        viewMoreButton.textContent = "View More";
        viewMoreButton.classList.add("view-more");
        card.appendChild(viewMoreButton);

        
        viewMoreButton.addEventListener("click", () => {
            const project = projects[index];
            if (project) {
                modalTitle.textContent = project.title;
                modalImages.innerHTML = project.images
                    .map(image => `<img src="${image}" alt="Gambar Detail" style="width: 100%; margin-bottom: 10px; border-radius: 8px;">`)
                    .join("");

                modal.classList.add("visible");
            }
        });
    });

    
    closeModal.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("visible");
        }
    });

    const style = document.createElement("style");
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .modal.visible {
            visibility: visible;
            opacity: 1;
        }

        .modal-content {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 90%;
            max-width: 800px;
            height: 80%;
            overflow-y: auto;
            text-align: center;
            position: relative;
        }

        .modal-content .close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
            color: #333;
        }

        .image-gallery img {
            display: block;
            max-width: 100%;
            margin: 0 auto;
        }
    `;
    document.head.appendChild(style);
});







