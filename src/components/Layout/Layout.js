import React, { Component } from 'react';
// import AuxWithStyle from '../../hoc/AuxWithStyle';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
    }

    sideDrawerOpenHandler = () => {
        this.setState({
            showSideDrawer: true
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    render() {
        return (
            <>
                <Toolbar onToggleSideDrawerButtonClick={this.sideDrawerOpenHandler} />
                <SideDrawer isOpened={this.state.showSideDrawer} onClose={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;