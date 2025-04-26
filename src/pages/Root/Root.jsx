import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';

const Root = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <Home></Home>
        </>
    );
};

export default Root;