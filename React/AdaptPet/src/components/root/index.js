import React from 'react';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';
// import outlet implement outlet

const Root = () => {
    return (
        <div>
      <Navigation/>
      <Outlet/>
        </div>
    );
};

export default Root;
