import React from "react"

const Display = (props: { value: any; onClick?: () => void }) => {
    return (
        <div className="display" onClick={props.onClick}>
            {props.value}
        </div>
    )
}

export { Display }
