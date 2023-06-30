import React from "react";
import {render, screen} from "@testing-library/react";
import {Message} from "../Message";

describe('Message', () => {
    it('renders passed text', () => {
        render(
            <Message author='author' text='text'/>
        )
        const text = screen.getByText('text')
        expect(text).toBeDefined()
    });
    it('matches snapshot', () => {
        const component = render(
            <Message author='author' text='text'/>
        )
        expect(component).toMatchSnapshot()
    })
})