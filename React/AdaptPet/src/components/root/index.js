import React from 'react';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
      <Navigation/>
      <Outlet/>
        </div>
    );
};

export default Root;
