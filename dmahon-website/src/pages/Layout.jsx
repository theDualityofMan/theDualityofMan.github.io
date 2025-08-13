import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import FaultyTerminal from './FaultyTerminal';

export default function HomePage(){
    
    return(
        <FaultyTerminal mouseReact = {false} tint='#27F55E'>
            <Outlet />
        </FaultyTerminal>
        
    );
}