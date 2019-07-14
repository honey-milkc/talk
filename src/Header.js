import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul id="main-nav">
                        <li>SomedayTalk</li>
                        <li>강사소개</li>
                        <li>수강료</li>
                        <li>고객센터</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header