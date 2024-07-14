function Card(props) {
    return (
        <div className="card">
            <img src={ props.imgUrl } alt="not found"/>
            <h1>{ props.ingrediants }</h1>
            <h2>{ props.info }</h2>
            <h3>{ props.price }</h3>
        </div>
    )
}

export default Card;
