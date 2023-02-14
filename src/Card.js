import React from "react";

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className="tc bg-dark-green dib ma2 pa3 br3 grow bw3 shadow-5 w-20">
            <img alt="robot pic" src={`https://robohash.org/${id}`} className="w-50" />
            <div>
                <h2>{name}</h2>
                <h4>{email}</h4>
            </div>
        </div>
    )
}

export default Card;