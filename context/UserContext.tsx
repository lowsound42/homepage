/* this literally does not need to exist. 
I just put it in on a whim because I'm so used to using redux for simple global 
context and wanted to experiment with context API a little. It does 
nothing besides provide a global user that is accessible through the app.*/

import React, { useState, useEffect, createContext } from 'react';

interface IDefaultUser {
    user: string;
}
const defaultUser = {
    user: 'lowsound'
};

const UserContext = createContext<IDefaultUser>(defaultUser);

export default UserContext;
