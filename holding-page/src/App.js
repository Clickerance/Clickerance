import React, {useState, useLayoutEffect, useRef} from 'react';
import './App.css';
import {TextInput, minorScale, Button, Alert, Textarea, Icon} from "evergreen-ui";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


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
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <div className="Header" style={{paddingTop: height / 4, paddingBottom: height / 4}}>
                            <div className="text">
                                <h1 className="Heading1">Clickerance</h1>
                                <h3 className="Heading2">Shopping with food preferences and intolerances just got easy!</h3>
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
                            <p>To get in touch please email <code
                                style={{display: 'inline'}}>{"santiago"}</code>@<code
                                style={{display: 'inline'}}>{"clickerance"}</code>.<code
                                style={{display: 'inline'}}>{"com"}</code>.
                            </p>
                        </div>
                    </div>
                </Route>
                <Route exact path="/404">
                    <div className="Header" style={{paddingTop: height / 4, paddingBottom: height / 4}}>
                        <div className="text">
                            <h1 className="Heading1">Error 404. Page not found.</h1>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
