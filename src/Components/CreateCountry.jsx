import React, { useState } from 'react'
import { postCountry, updateCountry, deleteCountry } from '../service/InfoApi'

function CreateCountry() {

    const [country, setCountry] = useState()
    const [infoCountry, setInfoCountry] = useState()
    const [responseDeleteCountry, setResponseDeleteCountry] = useState()

    const handleCreateCountry = async () => {
        const response = await postCountry({nombre: country})
        setInfoCountry(response)
    }

    const handleUpdateCountry = async () => {
      const response = await updateCountry(infoCountry.data.id, {nombre: country})
      setInfoCountry(response)
    }

    const handleDeleteCountry =  async () => {
      const response = await deleteCountry(infoCountry.data.id)
      setResponseDeleteCountry(response)
    }

    console.log(country)

  return (
    <div>
        <input type="text" onChange={(e) => setCountry(e.target.value)} />
        <button onClick={handleCreateCountry}> Crear pais </button>

        {infoCountry && (
            <>
            <p>{infoCountry.message}</p>
            <p>{infoCountry.data.nombre}</p>
            <p>{infoCountry.data.id}</p>
            </>
        )}

        <hr />

        <input type="text" onChange={(e) => setCountry(e.target.value)} />
        <button onClick={handleUpdateCountry}> Modificar pais </button>

        {infoCountry && (
            <>
            <p>{infoCountry.message}</p>
            <p>{infoCountry.data.nombre}</p>
            <p>{infoCountry.data.id}</p>
            </>
        )}

        <hr />

        <button 
          style={{color: 'red', background: 'yellow', alignContent: 'center'}}
          onClick={handleDeleteCountry}>ELIMINAR PAIS </button>

          {
            responseDeleteCountry && (
              <p>{responseDeleteCountry.message}</p>
            )
          }

    </div>
  )
}

export default CreateCountry