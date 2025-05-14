document.addEventListener("DOMContentLoaded", function() {
    // Controle de Modais
    const modals = {
        sustainability: {
            open: document.getElementById("openSustainabilityModal"),
            modal: document.getElementById("sustainabilityModal"),
            close: document.querySelector("#sustainabilityModal .close-modal")
        }
    };

    // Abrir Modal de Sustentabilidade
    modals.sustainability.open.addEventListener("click", () => {
        modals.sustainability.modal.style.display = "flex";
        document.querySelector(".tab-content").classList.add("active");
    });

    // Controle de Abas
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".tab-btn.active").classList.remove("active");
            btn.classList.add("active");
            
            const tabId = btn.dataset.tab;
            document.querySelector(".tab-content.active").classList.remove("active");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Fechar Modais
    Object.values(modals).forEach(m => {
        m.close.addEventListener("click", () => m.modal.style.display = "none");
        window.addEventListener("click", (e) => {
            if (e.target === m.modal) m.modal.style.display = "none";
        });
    });
});
