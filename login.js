document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("usuario").value.trim();
  const pass = document.getElementById("clave").value.trim();

  if (user === "admin" && pass === "acceso123") {
    alert("¡Bienvenido!");

    // Ocultar login y mostrar formulario
    document.querySelector(".login-wrapper").style.display = "none";
    document.getElementById("registroCarnet").style.display = "flex";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const formCarnet = document.getElementById("formCarnet");

  if (formCarnet) {
    formCarnet.addEventListener("submit", async function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const dni = document.getElementById("dni").value.trim();
      const especialidad = document.getElementById("especialidad").value.trim();

      if (!nombre || !dni || !especialidad) {
        alert("Por favor, completá todos los campos.");
        return;
      }

      const datos = { nombre, dni, especialidad };

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxxBcd-wMzJp5lf_Uc6lCnyp662GiiNbSYAMBFFLmTU__sO_pRgSr16ub00_pW_skCy/exec", {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          alert("¡Datos enviados con éxito!");
          formCarnet.reset();
        } else {
          alert("Error al enviar los datos.");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Hubo un problema al conectar con el servidor.");
      }
    });
  }
});
