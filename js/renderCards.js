import { getProducts } from "./api.js";
import { deleteProduct } from "./api.js";

const renderProducts = async () => {
    const products = await getProducts();
    const section = document.querySelector('#productos');

    if (!products.length) {
        section.innerHTML = `
        <p>No se han agregado productos. ¡Sé el primero en agregar uno!</p>
        <a href="#form-agregar">Agregar Producto</a>
        `;
        return;
    }

    section.innerHTML = products.map(product => `
        <div class="card" data-id="${product.id}">
            <img src="${product.imagen}" alt="${product.nombre}" />
            <div class="card-container--info">
                <p>${product.descripcion}</p>
                <div class="card-container--value">
                    <p>$${product.precio}</p>

                </div>
            </div>
            <button class="delete-btn" data-id="${product.id}">Eliminar</button>
        </div>
    `).join("");    
    
    // Agregar evento de eliminación a los botones
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            const productId = e.target.getAttribute('data-id');
            await deleteProduct(productId); // Llamar a la función para eliminar
            location.reload(); // Recargar la página para actualizar el listado de productos
        });
    });
};

renderProducts();
export { renderProducts };
