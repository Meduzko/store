import React from 'react';

function Item(props) {
    console.log(props);
    return (
        <div className="item">
        {/*<input*/}
    {/*    type="checkbox"*/}
    {/*    checked={props.item.completed}*/}
    {/*    onChange={() => props.handleChange(props.item.id)}*/}
    {/*/>*/}
    {/*<p>{props.item.text}</p>*/}

    {/*<div>{props.image.author}</div>*/}
        <p> {props.text} </p>
    </div>
)
}

export default Item;