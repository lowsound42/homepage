import React, { useState, useEffect, createContext } from 'react';

interface IDefaultUser {
    user: string;
}
const defaultUser = {
    user: 'lowsound'
};

const UserContext = createContext<IDefaultUser>(defaultUser);

export default UserContext;
