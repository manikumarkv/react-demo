import React from 'react';




class AppHeader extends React.Component {
    constructor(props) {
        super(props)
        this.generateButton = this.generateButton.bind(this)
        this.buttonsArray = ["home", "aboutme", "contact", "login", "create policy"]
        
    }

    generateButton(props) {
        return <button >{props}</button>
    }

    render() {
        let styles = {
            appheader: {
                backgroundColor: this.props.themeStyle.backgroundColor,
                padding: "10px 5px"
            },
            buttonStyle: {
                color: "black",
                backgroundColor: 'white',
                border: "none",
                margin: "0 3px"
            },
            myclass: {
                color: 'red'
            }
        
        }

        return <div   style={styles.appheader}>{this.buttonsArray.map(this.generateButton)} </div>
    }
}

export default AppHeader;

