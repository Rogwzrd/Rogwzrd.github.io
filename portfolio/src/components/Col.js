import React from 'react';

const Col = props=> (
    <div className={props.columnSize}>
        {props.children}
    </div>
);

export default Col;