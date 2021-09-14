import React from 'react';
import Sidebar from './Sidebar';
import Mainview from './Mainview';


export default function Dashboard() {
    return(
     <div>
            <div >           
               <Sidebar/>
            </div>
            <div >
              <Mainview/>
            </div>   
     </div>
    )
  }
  

