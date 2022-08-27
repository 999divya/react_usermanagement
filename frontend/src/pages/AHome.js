import React from 'react'
import AdminHome from '../components/Admin/AdminHome'
import Header from '../components/Admin/AHeader'
import ALoginPage from './ALoginPage';

function AHome() {
    const adminDetails=  localStorage.getItem('admininfo')
    console.log(adminDetails);
  return (
    <div>
       
    {  adminDetails ?  <AdminHome/> : <ALoginPage/> }
    </div>
  )
}

export default AHome