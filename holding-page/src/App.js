import React, {useState, useLayoutEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {TextInput, minorScale, Button, Alert, Textarea} from "evergreen-ui";


let useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        let updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

function App() {
    const [width, height] = useWindowSize();
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    return (
        <div className="App">
            <div className="Header" style={{paddingTop: height / 4, paddingBottom: height / 4}}>
                <div className="text">
                    <h1 className="Heading1">Clickerance</h1>
                    <h3 className="Heading2">Next generation shopping.</h3>
                </div>
            </div>
            <div className="Contact"
                 style={{paddingLeft: width / 25, paddingBottom: minorScale(10), marginRight: width / 10}}>
                <h1 className="Heading1">
                    Contact
                </h1>
                <Alert intent="warning" title="Warning.">This doesn't work yet.</Alert>
                <TextInput placeholder="Name: " value={contactForm.name} marginY={minorScale(1)} onChange={event => {
                    setContactForm({name: event.target.value})
                }}/>
                <br/>
                <TextInput type="text" value={contactForm.email} marginY={minorScale(1)} placeholder="Email: "
                           onChange={event => {
                               setContactForm({email: event.target.value})
                           }}/>
                <Textarea placeholder="Message: " value={contactForm.message} onChange={event => {
                    setContactForm({message: event.target.value})
                }}/>
                <br/>
                <Button>Send a message!</Button>
            </div>
        </div>
    );
}

export default App;
