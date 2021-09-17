import React from 'react'
import styleDash from '../CSS/mainview.module.css'
import Figuro from "../assets/figuroLogo.png"

export default function Sidebar() {
   return (
      <div className={styleDash.sidebar}>
         <div className={styleDash.logoSidebar}>
            <img src={Figuro} alt="Logo Figuro" className={styleDash.imgLogo} />
         </div>
         <div className={styleDash.opcionesSidebar}>
            <div>
               <img src="" alt="" />
               <h3>Mis decisiones</h3>
            </div>
            <div>
               <img src="" alt="" />
               <h3>Productos</h3>
            </div>
            <div>
               <img src="" alt="" />
               <h3>Cursos y Webinars</h3>
            </div>
            <div>
               <img src="" alt="" />
               <h3>Calculadoras</h3>
            </div>
            <div>
               <img src="" alt="" />
               <h3>inicio</h3>
            </div>
         </div>
         <div className={styleDash.usuarioSidebar}>
            <div>
               <img src="" alt="" />
               <h3>Hola </h3>
               <p>Bienvenido</p>
            </div>
            <div>
               <button>LogOut</button>
            </div>
         </div>
      </div>

   )
}


