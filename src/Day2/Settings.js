import React from 'react';


class Settings extends React.Component {

    render() {
        console.log("url parameters should come")
        console.log(this.props)
        return <div>this is settings page <h1> Setiings {this.props.match.params.id} - {this.props.match.params.name}
            - {this.props.match.params.userid}
            </h1></div>
    }
}

export default Settings