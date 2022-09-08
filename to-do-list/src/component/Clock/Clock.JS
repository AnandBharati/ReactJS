import React from "react";

function Clock(props){
    return (<div>
        Clock
        {props.Children}
    </div>)
}

export default Clock;