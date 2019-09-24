import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs"
import { addDecorator } from "@storybook/react"
import { addParameters } from "@storybook/react"
import { configure } from "@storybook/react"
import React from "react"

function loadStories() {
    require("../stories")
}

addParameters({
    options: {
        name: "CUSTOM NAME",
    },
})

configure(loadStories, module)

addDecorator(withInfo({ inline: true }) as any)

addDecorator(withKnobs)
