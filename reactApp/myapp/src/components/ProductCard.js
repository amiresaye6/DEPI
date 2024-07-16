function ProductCard(props) {
    return (
        <div className='card'>
            <img src={props.product.image} alt='' />
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <span>{props.product.price}</span>
        </div>
    )
}

export default ProductCard;