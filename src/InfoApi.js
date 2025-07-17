const URLAPI = `https://r8vobscva2.execute-api.us-east-1.amazonaws.com/paises`;

// GET - Obtener productos
export async function getProducts() {
    try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
}

// POST - Crear un nuevo país
export async function postCountry(country) {
    try {
        const response = await fetch(URLAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(country)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al crear país:", error);
    }
}

// PUT - Actualizar país por ID
export async function updateCountry(id, country) {
    try {
        const response = await fetch(`${URLAPI}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(country)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al actualizar país:", error);
    }
}

// DELETE - Eliminar país por ID
export async function deleteCountry(id) {
    try {
        const response = await fetch(`${URLAPI}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al eliminar país:", error);
    }
}