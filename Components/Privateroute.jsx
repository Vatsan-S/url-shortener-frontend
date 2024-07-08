import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = () => {
    const {currentUser} = useSelector((state)=>state.users)
    return currentUser? <Outlet/> : <Navigate to='/login'/>
};

export default Privateroute;