import React, { Component } from 'react';
import Button from '@material-ui/core/Button/index';
import Menu from '@material-ui/core/Menu/index';
import MenuItem from '@material-ui/core/MenuItem/index';



// Constant style Inline CSS
const menuStyle = {
    backgroundColor: "#282c34",
    color:"#ead179",
    alignSelf:"Start"
}
const buttonStyle = {
    backgroundColor: "#282c34",
    color: "#ead179",
}
const menuItemStyle = {
    backgroundColor: "#282c34",
    color: "#ead179",
}


class SimpleMenu extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div style={menuStyle}>

                <Button
                    style={buttonStyle}/* appel de la const myStyle inline */
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    Open Menu
                </Button>
                <Menu

                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem  style={menuItemStyle} onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem  style={menuItemStyle} onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem  style={menuItemStyle} onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default SimpleMenu;



