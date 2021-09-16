import React from 'react';
import Sidebar from './Sidebar';
import Mainview from './Mainview';
import styleDash from '../CSS/mainview.module.css'
// import ResponsiveMenu from 'react-responsive-navbar';
// import { FaBars,FaTimes } from 'react-icons/fa';
// import { useState } from 'react';
import Figuro from "../assets/figuroLogo.png"


export default function Dashboard() {
  // const [open, setOpen] = useState(true)

  return (
    <div className={styleDash.container}>
      <div className={styleDash.navBar}>
        {/* <ResponsiveMenu
          menuOpenButton={<FaBars />}
          menuCloseButton={<FaTimes />}
          changeMenuOn="2000px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
            <ul>
              <li>Mis decisiones</li>
              <li>Productos</li>
              <li>Cursos y Webinars</li>
              <li>Calculadoras</li>
              <li>inicio</li>
            </ul>
          }
        /> */}

        <img src={Figuro} alt="Logo Figuro" className={styleDash.imgLogo} />
      </div>

      <div className={styleDash.containerSidebar} >
        <Sidebar />
      </div>
      <div className={styleDash.containerMainview}>
        <Mainview />
      </div>
    </div>
  )
}





//   return(
//     <div className={styleDash.container}>
//       {open ? 
//         ( 
//         <>
//          <div className={styleDash.navBar}>
//          <ResponsiveMenu
//              menuOpenButton={<FaBars/>}
//              menuCloseButton={<FaTimes/>}
//              changeMenuOn="2000px"
//              largeMenuClassName="large-menu-classname"
//              smallMenuClassName="small-menu-classname"
//              menu={
//                <ul>
//                  <li>Mis decisiones</li>
//                  <li>Productos</li>
//                  <li>Cursos y Webinars</li>
//                  <li>Calculadoras</li>
//                  <li>inicio</li>
//                </ul>
//              }
//            />

//          <img src={Figuro} alt="Logo Figuro" className={styleDash.imgLogo}/> 
//          </div>
//          < div className={styleDash.containerMainview}>
//            <Mainview/>
//          </div>
//            </>
//            ):(
//              <>
//            <div className={styleDash.containerSidebar} >           
//               <Sidebar/>
//            </div>
//            <div className={styleDash.containerMainview}>
//              <Mainview/>
//            </div>
//            </>
//            )
//        }
//      </div>
//    )
//  }