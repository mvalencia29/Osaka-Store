function calcularVentas() {
  let messageModal = document.getElementById("message-modal");
  let valorProducto = parseInt(
    document.getElementById("input-valor-producto").value
  );
  let utilidad = parseInt(document.getElementById("input-utilidad").value);
  let iva = parseInt(document.getElementById("input-iva").value);
  valorProducto = !isNaN(valorProducto) ? parseInt(valorProducto) : 0;
  utilidad = !isNaN(utilidad) ? parseInt(utilidad) : 0;
  iva = !isNaN(iva) ? parseInt(iva) : 0;

  let porcentaje = (utilidad + iva) / 100 + 1;
  let venta = valorProducto * porcentaje;
  let ganancia = valorProducto * (utilidad / 100);

  messageModal.innerText =
    "Valor de la venta : $ " + venta + " y ganancia : $ " + ganancia;

  $("#modal-calculo").modal("show");
}

function calcularResistencias() {
  let messageModal = document.getElementById("message-modal-resistencias");
  let banda1 = parseInt(document.getElementById("select-banda-1").value);
  let banda2 = parseInt(document.getElementById("select-banda-2").value);
  let banda3 = parseInt(document.getElementById("select-banda-3").value);

  let bandas = (banda1 + banda2) * banda3;

  messageModal.innerText = "Valor de la resistencia : " + bandas + " Ohmios";

  $("#modal-calculo-resistencias").modal("show");
}
