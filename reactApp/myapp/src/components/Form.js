import React from "react";
// import { useState } from "react";

// function Form (props) {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [gender, setGender] = useState('');

//     const setNameHandler = (value) => {
//         setName(value);
//     }

//     const setPasswordHandler = (value) => {
//         setPassword(value);
//     }

//     const setGenderHandler = (value) => {
//         setGender(value);
//     }

//     return (
//         <form onSubmit={ (e) => {
//             e.preventDefault();
//             console.log("form sumbitted");
//             console.log(name);
//             console.log(password);
//             console.log(gender);
//         }}>
//             <label>Name</label>
//             <input type='text' placeholder="your name" onChange={(event) => {
//                 setNameHandler(event.target.value)
//             }}/>
//             <br/>
//             <label>password</label>
//             <input type='password' placeholder="your password" onChange={(event) => {
//                 setPasswordHandler(event.target.value)
//             }}/>
//             <br/>
//             <label>Gender</label>
//             <select onChange={ (event) => {
//                 setGenderHandler(event.target.value)
//             }}>
//             <option value="mail">Mail</option>
//             <option value="femail">Femail</option>
//             </select>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

class FormClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            gender: ''
        }
    }

    // or you can do it as this simple
    // state = {
    //     name: '',
    //     password: '',
    //     gender: ''
    // }

    setNameHandler = (value) => {
        this.setState({name: value});
    }

    setPasswordHandler = (value) => {
        this.setState({password: value});
    }

    setGenderHandler = (value) => {
        this.setState({gender: value});
    }

    render () {
        return (
            <form onSubmit={ (e) => {
                e.preventDefault();
                console.log("form sumbitted");
                console.log(this.state);
            }}>
                <label>Name</label>
                <input type='text' placeholder="your name" onChange={(event) => {
                    this.setNameHandler(event.target.value)
                }}/>
                <br/>
                <label>password</label>
                <input type='password' placeholder="your password" onChange={(event) => {
                    this.setPasswordHandler(event.target.value)
                }}/>
                <br/>
                <label>Gender</label>
                <select onChange={ (event) => {
                    this.setGenderHandler(event.target.value)
                }}>
                <option value="mail">Mail</option>
                <option value="femail">Femail</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormClass;