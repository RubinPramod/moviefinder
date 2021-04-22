import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <section className="nav-bar">
                <img className="main-logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                <ul className="nav-bar-right">
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
            </section>
        )
    }
}

export default Header
