import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="register" element={<Register />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
};
