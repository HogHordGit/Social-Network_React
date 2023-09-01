import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import StoreContext from "./StoreContext";

const App = (props) => {

    return (
        <div className="wrapper">

            <div className="headerColor"></div>

            <div className="container">

                <Header/>

                <StoreContext.Consumer>
                    {
                        (store) => {
                            return <Navbar navbarData={store.getState().navbarData}/>
                        }
                    }
                </StoreContext.Consumer>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Profile />}/>

                        <Route path="/profile/*" element={<Profile />}/>
                        <Route path="/dialogs/*" element={<Dialogs store={props.store}/>}/>

                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </div>

            </div>

            <div className="footerColor"></div>

        </div>
    );
}

export default App;
