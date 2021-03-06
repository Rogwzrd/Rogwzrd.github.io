import React from 'react'

const Wrapper = props =>(
    <div style={{backgroundColor: props.bgColor}}>
        <div className={props.containerClass}>
            <div className={"text-center text-white"}>
                <h2 style={{fontSize: "6em"}} className={"pt-4"}>{props.title}</h2>
            </div>
            <div className={props.rowClass}>
                {props.children}
            </div>
        </div>
    </div>
);

export default Wrapper;