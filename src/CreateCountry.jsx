import React, { useState } from 'react';
import { postCountry, updateCountry, deleteCountry } from '../service/InfoApi';

function CreateCountry() {
  const [countryName, setCountryName] = useState('');
  const [infoCountry, setInfoCountry] = useState(null);
  const [responseDeleteCountry, setResponseDeleteCountry] = useState(null);

  const handleCreateCountry = async () => {
    if (!countryName) return alert("Ingresa un nombre de país");

    const response = await postCountry({ nombre: countryName });
    setInfoCountry(response);
    setResponseDeleteCountry(null); // limpiar mensajes viejos
  };

  const handleUpdateCountry = async () => {
    if (!infoCountry?.data?.id) return alert("Primero debes crear un país");
    if (!countryName) return alert("Ingresa un nuevo nombre");

    const response = await updateCountry(infoCountry.data.id, { nombre: countryName });
    setInfoCountry(response);
  };

  const handleDeleteCountry = async () => {
    if (!infoCountry?.data?.id) return alert("No hay país para eliminar");

    const response = await deleteCountry(infoCountry.data.id);
    setResponseDeleteCountry(response);
    setInfoCountry(null); // borrar datos en pantalla
    setCountryName('');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Gestión de Países</h2>

      <input
        type="text"
        placeholder="Nombre del país"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        style={{ padding: 8, width: '100%', marginBottom: 10 }}
      />

      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <button onClick={handleCreateCountry}>Crear país</button>
        <button onClick={handleUpdateCountry}>Modificar país</button>
        <button onClick={handleDeleteCountry} style={{ backgroundColor: 'red', color: 'white' }}>
          Eliminar país
        </button>
      </div>

      {infoCountry && (
        <div style={{ background: '#f0f0f0', padding: 10, borderRadius: 5 }}>
          <p><strong>Mensaje:</strong> {infoCountry.message}</p>
          <p><strong>País:</strong> {infoCountry.data.nombre}</p>
          <p><strong>ID:</strong> {infoCountry.data.id}</p>
        </div>
      )}

      {responseDeleteCountry && (
        <div style={{ color: 'green', marginTop: 10 }}>
          {responseDeleteCountry.message}
        </div>
      )}
    </div>
  );
}

export default CreateCountry;