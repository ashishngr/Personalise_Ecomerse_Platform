import React from 'react'
import { Outlet } from 'react-router-dom';

import DashboardSidebar from './DashboardSidebar';
const DashboardLayout = () => {
  return (
    <div className='flex min-h-full overflow-hidden'>
       <DashboardSidebar />
        <div className='flex-grow-1 overflow-auto min-h-full pt-20 '>
            <Outlet />
        </div>
    </div>
  )
}
export default DashboardLayout