import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {AppContext} from '../Context/AppContext';
function Privateroute({children}) {
    const router = useContext(AppContext);
    return router?.isSubmit ? children:<Navigate to ={"/signin"}/>
}

export default Privateroute