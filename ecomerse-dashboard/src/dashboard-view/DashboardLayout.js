import React from 'react'
import DashboardSidebar from './DashboardSidebar'; 
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div className='flex flex-row w-screen h-full gap-x-72 bg-slate-50'>
        <div>
            <DashboardSidebar />
        </div>
        <div>
            <Outlet />
        </div>
        
        
       
    </div>
  )
}
