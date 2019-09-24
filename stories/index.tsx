import { button } from "@storybook/addon-knobs"
import { text } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import React from "react"
import { useState } from "react"
import { Display } from "@custom-org/custom-lib/Display"

storiesOf("div", module)
    .add("hello world", () => <div>Hello world</div>)
    .add("text knob", () => <div>{text("value", "initial")}</div>)
    .add("button counter knob", () => {
        const [counter, setCounter] = useState(0)
        button("increment", () => setCounter(counter + 1))
        button("decrement", () => setCounter(counter + 1))
        return <div>{counter}</div>
    })
    .add("click increment", () => {
        const [counter, setCounter] = useState(0)
        return <div onClick={() => setCounter(counter + 1)}>{counter}</div>
    })

storiesOf("Display", module)
    .add("hello world", () => <Display value={"Hello world"} />)
    .add("text knob", () => <Display value={text("value", "initial")} />)
    .add("button counter knob", () => {
        const [counter, setCounter] = useState(0)
        button("increment", () => setCounter(counter + 1))
        button("decrement", () => setCounter(counter + 1))
        return <Display value={counter} />
    })
    .add("click increment", () => {
        const [counter, setCounter] = useState(0)
        return (
            <Display value={counter} onClick={() => setCounter(counter + 1)} />
        )
    })
