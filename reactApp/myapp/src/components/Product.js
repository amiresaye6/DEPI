function Product (props) {
    return (
        <div className="product-card">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <span> <code>{props.price}</code></span>
        </div>
    )
}

export default Product;