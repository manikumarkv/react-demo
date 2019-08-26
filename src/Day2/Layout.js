import React, { lazy, Suspense } from 'react';
import Header from "./Header"
import { StyleSheet, css } from 'aphrodite';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// import HomePage from './HomePage';
import SettingsPage from './Settings';
import DashboardPage from './Dashboard'
import NoPage from './NoPage'

const Home = lazy(() => import('./HomePage'));

let styles = {
    border: '1px solid red',
    marginLeft: "2px",
    merginRight: "10px"
}

const styleClasses = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row-reverse'

    },
    red: {
        backgroundColor: 'green'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});

class Day2Layout extends React.Component {
    constructor(props) {
        super(props)
        this.changeTheme = this.changeTheme.bind(this)
        this.state = {
            currentTheme: {
                color: "white",
                backgroundColor: "black"
            }

        }
        this.availableThemes = {
            dark: {
                color: "white",
                backgroundColor: "black"
            },
            light: {
                color: "black",
                backgroundColor: "white"
            }
        }
    }

    changeTheme() {
        if (this.state.currentTheme == null) {
            this.setState({
                currentTheme: this.availableThemes.dark
            })
        } else {
            this.setState({
                currentTheme: this.availableThemes.light
            })
        }
    }


    render() {
        return (


            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <div>
                        <Link to="/settings">Settings</Link>
                        <Link to="/home">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>

                    </div>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/" exact component={SettingsPage} />
                        <Route path="/dashboard/" render={(props) => {

                            if (1 !== 1) {
                                return <DashboardPage />
                            } else {
                                return <Redirect to="/" />
                            }

                        }} />

                        <Route component={NoPage} />


                    </Switch>
                </Suspense>

            </Router>


        )
    }

}

export default Day2Layout


{/* <div>div 1</div>
<div>div 2</div>
<div>div 3</div>
<div>div 4</div>
<div>div 5</div>
<span className={css(styleClasses.red)}>
    This is red.
</span>
<Header {...this.props} themeStyle={this.state.currentTheme}></Header>
<button onClick={this.changeTheme}>Change my theme</button> */}