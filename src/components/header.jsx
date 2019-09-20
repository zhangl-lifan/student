import React, { Component } from 'react';
import styles from "./index.scss";

class Header extends Component {
    render() {
        console.log()
        return (
            <div className={styles.header}>
                 <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Header;