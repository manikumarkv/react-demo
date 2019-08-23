import React from 'react';
import PropTypes from 'prop-types';

class UserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.availableUsers = []
        this.showMeAlertMethod = this.showMeAlert1.bind(this);
        this.state = {
            address: 'hyd'
        }
        this.person = {
            age: "20"
        }
    }
    componentWillMount() {

        let users = [1, 2, 4]
        this.availableUsers = users
    }

    componentWillReceiveProps(props) {

    }

    getUserHtml(person, index) {

        return <h3 key={index}>{person.name}</h3>

    }
    showMeAlert1() {
        const num = new Date()
       this.props.parentCall(num.toLocaleTimeString())
       //this.person.age = "100"
       //this.state.address = "BOM"
    //    this.setState({
    //     address: "BOM"
    //    })

        // alert(`click event happened name is:  ${this.props.username}`)
    }
    render() {
        console.log("something got updated")
        // const persons = this.props.persons;
        const { persons } = this.props;
        return (
            <>
                <h1>hello this is class comonent - {this.props.username}

                    {this.state.address}-- {this.person.age}

                </h1>
                {persons.map((p, i) => {
                    return <div key={i}>{p.name}</div>
                })}
                <button onClick={this.showMeAlertMethod} >alert button</button>
                <div>prop name is {this.props.fistname}</div>
            </>
        )

    }
    componentDidMount() {
        console.log("html rendered and displaying in DOM")
    }
}

UserComponent.propTypes = {
    username: PropTypes.string
};

UserComponent.defaultProps = {
    username: "react-default"
}

export default UserComponent;
