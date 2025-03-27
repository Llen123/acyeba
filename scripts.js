document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave para navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Menú hamburguesa para móviles
    const toggleMenu = document.createElement("div");
    toggleMenu.innerHTML = "☰";
    toggleMenu.classList.add("menu-toggle");
    document.body.appendChild(toggleMenu);

    const sidebar = document.querySelector(".sidebar");
    toggleMenu.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Validación de formulario
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const nombre = form.querySelector("input[type='text']").value.trim();
            const email = form.querySelector("input[type='email']").value.trim();
            const mensaje = form.querySelector("textarea").value.trim();

            if (nombre === "" || email === "" || mensaje === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

            alert("Formulario enviado con éxito!");
            form.reset();
        });
    }

    // Copiar correo al portapapeles con mensaje temporal
    const copyEmail = document.getElementById("copyEmail");
    if (copyEmail) {
        copyEmail.addEventListener("click", async function (event) {
            event.preventDefault();
            const originalText = copyEmail.textContent;
            try {
                await navigator.clipboard.writeText(originalText);
                copyEmail.textContent = "¡Copiado!";
                copyEmail.style.color = "#00ff88";

                setTimeout(() => {
                    copyEmail.textContent = originalText;
                    copyEmail.style.color = "";
                }, 1500);
            } catch (err) {
                console.error("Error al copiar el correo: ", err);
        }
    });
}

});
