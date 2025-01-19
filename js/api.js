const getProducts = async () => {
    try {
        const response = await fetch("http://localhost:3000/productos");
        if (!response.ok) throw new Error("Error al obtener productos");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
export { getProducts };

const createProduct = async (product) => {
    try {
        const response = await fetch("http://localhost:3000/productos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });
        if (!response.ok) throw new Error("Error al crear producto");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export { createProduct };

// api.js
const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`http://localhost:3000/productos/${productId}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar producto");
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export { deleteProduct };

