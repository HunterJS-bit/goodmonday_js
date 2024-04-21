import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {


    const { logOut, loggedUser } = useAuth();

    const navigate = useNavigate();

    const goToRegister = () => {
        navigate('/register');
    }


    return (
        <nav>
            <div className="">
                <div className="flex justify-between h-16 px-10 shadow items-center">
                    <div className="flex items-center space-x-8">
                        <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">GoodMonday</h1>
                    </div>
                    <div className="flex space-x-4 items-center">
                        {!loggedUser && <a className="text-gray-800 text-sm" >Register</a>}
                        {loggedUser &&
                            <a className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                                onClick={logOut}
                            >LogOut</a>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;// yes, again