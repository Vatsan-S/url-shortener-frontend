import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOutSuccess } from '../Redux/Slice/userSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state=>state.users)
    const handleClick = ()=>{
        dispatch(signOutSuccess())
        window.reload()
    }
    return (
        <div className='navBar'>
            <h2 className='logo'>SHooortiee</h2>
            <button className='signOutButton' onClick={handleClick}> Sign Out</button>
        </div>
    );
};

export default Navbar;