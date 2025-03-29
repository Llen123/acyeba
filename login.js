document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const resultado = document.getElementById("resultadoCarnet");

  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const dni = document.getElementById("dni").value.trim();
      const mail = document.getElementById("mail").value.trim();

      if (!dni || !mail) {
        alert("Por favor, ingresá tu DNI y correo.");
        return;
      }

      const endpoint = "https://script.google.com/macros/s/AKfycbxFDVxtTsvuQSreQPmlkMDzS4p11mbcTw5XLrkgvkyaLYCqMhBRWUbaiKzt6Xw-F9KD/exec";
      const url = `${endpoint}?dni=${dni}&mail=${encodeURIComponent(mail)}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          resultado.innerHTML = `
            <p><strong>Carnet encontrado:</strong></p>
            <a href="${data.url}" target="_blank" class="boton-descarga">Ver carnet en PDF</a>
          `;
        } else {
          resultado.innerHTML = `<p style="color:red;">${data.message}</p>`;
        }
      } catch (err) {
        console.error("Error:", err);
        resultado.innerHTML = `<p style="color:red;">Hubo un problema al conectar con el servidor.</p>`;
      }
    });
  }
});
