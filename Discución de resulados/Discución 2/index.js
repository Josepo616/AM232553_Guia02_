let ventas = [];

function ingresarProducto() {
  const producto = prompt("Ingrese el nombre del producto:");
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));

  if (!isNaN(precio)) {
    ventas.push({ producto, precio });
    actualizarResultados();
  } else {
    alert("Precio inválido. Ingrese un número válido.");
  }
}

function calcularTotalVenta() {
  let total = 0;
  for (const venta of ventas) {
    total += venta.precio;
  }
  return total;
}

function actualizarResultados() {
  const productosDiv = document.getElementById("productos");
  productosDiv.innerHTML = "";

  for (const venta of ventas) {
    const productoDiv = document.createElement("div");
    productoDiv.textContent = `Producto: ${venta.producto} - Precio: ${venta.precio}`;
    productosDiv.appendChild(productoDiv);
  }

  const totalVentaP = document.getElementById("totalVenta");
  totalVentaP.textContent = `Total de la venta del día: ${calcularTotalVenta()}`;
}

document.getElementById("ingresarBtn").addEventListener("click", ingresarProducto);
