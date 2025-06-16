function evaluarConsumo() {

  const personas = parseInt(document.getElementById("personas").value);

  const area = parseFloat(document.getElementById("area").value);

  const consumo = parseFloat(document.getElementById("consumo").value);

  const aguja = document.getElementById("aguja");

  const resultado = document.getElementById("resultado");

  if (personas <= 0 || consumo <= 0 || area <= 0 || isNaN(consumo)) {

    resultado.textContent = "Por favor, ingresa valores válidos.";

    return;

  }

  // Cálculos

  const consumoPorPersona = consumo / personas;

  const consumoPorMetro = consumo / area;

  const metaPersona = 6;    // m³/persona (eficiente)

  const metaMetro = 0.109;  // m³/m² (promedio)

  const pesoPersona = 0.6;

  const pesoMetro = 0.4;

  let indice = (pesoPersona * (consumoPorPersona / metaPersona)) +

               (pesoMetro * (consumoPorMetro / metaMetro));

  if (indice > 2) indice = 2;

  const angulo = (indice / 2) * 360;

  aguja.style.transform = `rotate(${angulo}deg)`;

  // Mensaje principal

  let mensaje = "";

  if (indice <= 0.9) {

    mensaje = "✅ Consumo eficiente (verde)";

  } else if (indice <= 1.3) {

    mensaje = "⚠️ Consumo moderado (amarillo)";

  } else {

    mensaje = "🚨 Consumo alto (rojo)";

  }

  // Detalle numérico

  const mensajePersona = `🔹 ${consumoPorPersona.toFixed(2)} m³/persona`;

  const mensajeMetro = `🔸 ${consumoPorMetro.toFixed(3)} m³/m²`;

  resultado.textContent = `${mensaje}\n${mensajePersona}\n${mensajeMetro}`;

}