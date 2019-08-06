import React from 'react';

function Image(props) {
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
            <img src={props.image.download_url} />
        </div>
    )
}

export default Image