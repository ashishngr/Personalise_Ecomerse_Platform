import React from 'react'
import DashboardSidebar from './DashboardSidebar'; 
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div className='flex flex-row min-h-screen space-x-72 bg-slate-300 scroll-smooth'>
        <div>
            <DashboardSidebar />
        </div>
        <div>
            <Outlet />
        </div>
        
        
       
    </div>
  )
}
