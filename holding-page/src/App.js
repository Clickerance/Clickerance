import React, {useState, useLayoutEffect, useRef} from 'react';
import './App.css';
import {TextInput, minorScale, Button, Alert, Textarea, Icon} from "evergreen-ui";


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
    });
    const contactRef = useRef(null);
    return (
        <div className="App">
            <div className="Header" style={{paddingTop: height / 4, paddingBottom: height / 4}}>
                <div className="text">
                    <h1 className="Heading1">Clickerance</h1>
                    <h3 className="Heading2">Next generation shopping.</h3>
                    <Button onClick={() => {
                        contactRef.current.scrollIntoView({behavior: 'smooth'})
                    }} appearance="minimal" marginTop={height / 8} height={minorScale(15)}>
                        <Icon icon="chevron-down" color="#fff" size={minorScale(15)}/>
                    </Button>
                </div>
            </div>
            <div className="Contact" ref={contactRef}
                 style={{paddingLeft: width / 25, paddingBottom: minorScale(10), marginRight: width / 10}}>
                <h1 className="Heading1">
                    Contact
                </h1>
                <p>Please email <code style={{display: 'inline'}}>{"santiago"}</code>.<code
                    style={{display: 'inline'}}>{"schmitt"}</code>@<code
                    style={{display: 'inline'}}>{"btopenworld"}</code>.<code
                    style={{display: 'inline'}}>{"com"}</code> for more information.
                </p>
            </div>
        </div>
    );
}

export default App;
