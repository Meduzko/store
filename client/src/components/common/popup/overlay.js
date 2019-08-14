import React from 'react';

export default function Overlay({ className = '', ...props }) {
    return <div className={className} onClick={ props.closePopup }> </div>;
}