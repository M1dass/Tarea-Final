const URLAPI = `https://r8vobscva2.execute-api.us-east-1.amazonaws.com/paises`

export async function getProducts () {
    return await fetch(`https://api.escuelajs.co/api/v1/products`)
            .then(res => res.json)
            .then(data => data)
}

export async function postCountry (country) {
    const response = await fetch(URLAPI, 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(country)
        }
    )
    const data = await response.json()
    return data;
}

export async function updateCountry(id, country) {
    const response = await fetch(`${URLAPI}/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(country)
        }
    )
    const data = await response.json()
    return data
    
}

export async function deleteCountry(id) {
    const response = await fetch(`${URLAPI}/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }
     )
     const data = await response.json()
     return data
    
}