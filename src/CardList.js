import React from "react";
import Card from './Card';

const CardList = ({ padis }) => {
    return (
        <div>
            {
                padis.map((user, i) => {
                    return (
                        <Card 
                        key = {i} 
                        id = {padis[i].id} 
                        name = {padis[i].name} 
                        email = {padis[i].email} 
                        />
                    );  
                })
            }
        </div>
    );
}

export default CardList;