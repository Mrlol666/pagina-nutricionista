document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("menu-principal");

    if (header && toggle && nav) {
        const icon = toggle.querySelector("i");
        toggle.addEventListener("click", function () {
            const open = header.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(open));
            if (icon) {
                icon.classList.toggle("fa-bars", !open);
                icon.classList.toggle("fa-times", open);
            }
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                header.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-times");
                }
            });
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 1024) {
                header.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-times");
                }
            }
        });
    }

    const modal = document.getElementById("modal-servicios");
    const modalTitle = document.getElementById("modal-servicio-titulo");
    const servicioTriggers = document.querySelectorAll(".servicio-trigger");
    let lastTrigger = null;

    function closeModal() {
        if (!modal || modal.hidden) {
            return;
        }

        modal.hidden = true;
        document.body.classList.remove("modal-open");

        if (lastTrigger) {
            lastTrigger.focus();
        }
    }

    function openModal(trigger) {
        if (!modal || !modalTitle) {
            return;
        }

        const servicio = trigger.getAttribute("data-servicio");
        const title = trigger.querySelector("span");

        modalTitle.textContent = title ? title.textContent : "";
        modal.querySelectorAll(".modal-panel").forEach(function (panel) {
            panel.classList.toggle("is-active", panel.getAttribute("data-servicio") === servicio);
        });

        lastTrigger = trigger;
        modal.hidden = false;
        document.body.classList.add("modal-open");
        modal.querySelector(".modal-close").focus();
    }

    servicioTriggers.forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            openModal(trigger);
        });
    });

    if (modal) {
        modal.querySelectorAll("[data-close-modal]").forEach(function (closer) {
            closer.addEventListener("click", closeModal);
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    document.querySelectorAll(".btn-copy").forEach(function (button) {
        button.addEventListener("click", async function () {
            const value = button.getAttribute("data-copy");
            if (!value) {
                return;
            }

            try {
                await navigator.clipboard.writeText(value);
                const original = button.textContent;
                button.textContent = "Copiado";
                setTimeout(function () {
                    button.textContent = original;
                }, 1600);
            } catch (error) {
                button.textContent = "No se pudo copiar";
            }
        });
    });
});
