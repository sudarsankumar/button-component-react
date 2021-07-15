import React from 'react'
import './MainButton.css'
import { Buttons } from './Buttons'
import { Text } from './Text'
export const MainButton = () => {
    return(
        <div className="container">
            <h1 className="heading">Buttons</h1>
            <div className="first">
                <div className="one">
                    <Text text="<Button />" />
                    <Buttons buttonStyle="btn-default">Default</Buttons>
                </div>
                <div className="two">
                    <Text text="&:hover, &:focus" />
                    <Buttons buttonStyle="btn-default-hover">Default</Buttons>
                </div>
            </div>
            <div className="second">
                <div className="one">
                    <Text text="<Button variant=”outline” />" />
                    <Buttons buttonStyle="btn-outline">Default</Buttons>
                </div>
                <div className="two">
                    <Text text="&:hover, &:focus" />
                    <Buttons buttonStyle="btn-outline-hover">Default</Buttons>
                </div>
            </div>
            <div className="third">
                <div className="one">
                    <Text text="<Button variant=”text” />" />
                    <Buttons buttonStyle="btn-text">Default</Buttons>
                </div>
                <div className="two">
                    <Text text="&:hover, &:focus" />
                    <Buttons buttonStyle="btn-text-hover">Default</Buttons>
                </div>
            </div>
            <div className="tenth">
                <Text text="<Button disableShadow />" />
                <Buttons buttonStyle="btn-primary-dis">Default</Buttons>
            </div>
            <div className="fourth">
                <div className="one">
                    <Text text="<Button disabled />" />
                    <Buttons buttonStyle="btn-disabled" isDisabled="true">Disabled</Buttons>
                </div>
                <div className="two">
                    <Text text="<Button variant=”text” disabled />" />
                    <Buttons buttonStyle="btn-disabled-text" isDisabled="true">Disabled</Buttons>
                </div>
            </div>
            <div className="fifth">
                <div className="one">
                        <Text text="<Button startIcon=”local_grocery_store” />" />
                        <Buttons buttonStyle="btn-primary-icon"><i class="material-icons">local_grocery_store</i>Default</Buttons>
                </div>
                <div className="one">
                        <Text text="<Button startIcon=”local_grocery_store” />" />
                        <Buttons buttonStyle="btn-primary-icon">Default<i class="material-icons">local_grocery_store</i></Buttons>
                </div>
            </div>
            <div className="sixth">
                <div className="one">
                    <Text text="<Button size=”sm” />" />
                    <Buttons buttonStyle="btn-primary" buttonSize="btn-sm">Default</Buttons>
                </div>
                <div className="two">
                    <Text text="<Button size=”md” />" />
                    <Buttons buttonStyle="btn-primary" className="sixth-btn">Default</Buttons>
                </div>
                <div className="three">
                    <Text text="<Button size=”lg” />" />
                    <Buttons buttonStyle="btn-primary" buttonSize="btn-lg" className="sixth-btn">Default</Buttons>
                </div>
            </div>
            <div className="seventh">
                <div className="one">
                    <Text text="<Button color=”default” />" />
                    <Buttons buttonStyle="btn-default">Default</Buttons>
                </div>
                <div className="one">
                    <Text text="<Button color=”primary” />" />
                    <Buttons buttonStyle="btn-primary">Default</Buttons>
                </div>
                <div className="one">
                    <Text text="<Button color=”secondary” />" />
                    <Buttons buttonStyle="btn-secondary">Secondary</Buttons>
                </div>
                <div className="one">
                    <Text text="<Button color=”danger” />" />
                    <Buttons buttonStyle="btn-danger">Danger</Buttons>
                </div>
            </div>
            <span className="ninth">
                <Text text="&:hover, &:focus" />
            </span>
            <div className="eighth">
                <div className="one">
                    <Buttons buttonStyle="btn-default-hover">Default</Buttons>
                </div>
                <div className="two">
                    <Buttons buttonStyle="btn-primary-hover">Default</Buttons>
                </div>
                <div className="three">
                    <Buttons buttonStyle="btn-secondary-hover">Secondary</Buttons>
                </div>
                <div className="four">
                    <Buttons buttonStyle="btn-danger-hover">Danger</Buttons>
                </div>
            </div>
        </div>
    )
} 