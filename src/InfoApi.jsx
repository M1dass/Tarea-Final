import React from 'react'

function InfoApi() {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        const getProducts = async  () => {
            const res = await fetch(`https://api.escuelajs.co/api/v1/products`).then(res => res.json())
            setProducts(res)
        }
        getProducts()
    }, [])


    console.log(products)

  return (
    <div>
        <h1>InfoApi</h1>
        {products.map(product => (
            <>
            <p>{product.images[0]}</p>
            <img src={product.images[0]} alt="" />
            <p style={{color: 'red'}}>{product.price}</p>
            </>
        ))}


    </div>
  )
}

export default InfoApi