import React from "react";
import {decode as atob, encode as btoa} from 'base-64'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
        }
    }

    getUserAuthorization () {
        return fetch('https://buzz-choiceasy.herokuapp.com/login', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Basic '+btoa('username:password'), 
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                username: 'wesley.wazevedo@fco.net.br',
                password: '123456',
                role:1
            }),
        })
        .then((response) => JSON.stringify(response.headers.map.authorization))
            .then( (responseJson) => {

                this.setState({
                    dataSource: responseJson,
                })
                console.log(responseJson)
            })

        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        return(
            this.getUserAuthorization
        )
 
    }

    getCatalogInfo () {
        return fetch('https://buzz-choiceasy.herokuapp.com/catalogo')
        .then((response) => response.json() )
            .then( (responseJson) => {

                this.setState({
                    dataSource: responseJson,
                })
                console.log(responseJson)
            })

        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        return(
            this.getCatalogInfo
        )
 
    }

}

//class HomeModel {
//    returnText =  () => {
//        }            
//}