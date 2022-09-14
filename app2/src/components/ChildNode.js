import React, { Component } from 'react'

class ChildNode extends Component {

    render() {

        return (
            <>
                <div>
                    childNode
                    {this.props.lists.map(n => {
                        return (<h3 key={n}> {n} </h3>)
                    })}
                </div>
                <button type="button" >click here</button>
            </>
        )
    }
}

export default ChildNode;
