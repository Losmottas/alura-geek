import { createProduct } from "./api.js";
import { renderProducts } from "./renderCards.js";

const form = document.getElementById("form-agregar");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = document.getElementById("precio").value;
  const imagen = document.getElementById("imagen").value; 

  const nuevoProducto = { nombre, descripcion, precio: parseFloat(precio), imagen };
  await createProduct(nuevoProducto);
  form.reset();
  renderProducts(); 
});
