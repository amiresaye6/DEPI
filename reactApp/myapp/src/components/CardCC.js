import React from 'react'


class Card extends React.Component {
    render () {
        return (
            <div className="card">
            <img src={ this.props.imgUrl } alt="not found"/>
            <h1>{ this.props.ingrediants }</h1>
            <h2>{ this.props.info }</h2>
            <h3>{ this.props.price }</h3>
        </div>
        )
    }
}

export default Card;