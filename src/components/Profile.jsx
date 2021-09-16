import React from 'react'
import styleDash from '../CSS/mainview.module.css'
import Figuro from "../assets/figuroLogo.png"
import menu from "../assets/hamburgermenu.png"



function Profile() {

//  const [changeView, serChangeview] = useState(false)
 
  return(
  <>
  <div className={styleDash.profile}>
          <div className={styleDash.navBarProfile} >
            <img src={menu} alt=""/>
            <img src={Figuro} alt="Logo figuro"/>
          </div> 
          <div className={styleDash.myProfile}>
            <h2>Mi perfil</h2>
          </div>
          <div className={styleDash.avatar}>
              <div className={styleDash.avatarImg}>
                 <h3>AVATAR</h3>
                 <img src="" alt="" />
              </div>
              <button>Subir</button>
              <button>Borrar</button>
          </div>
          <div className={styleDash.formDatos}>
              <form action="" className = {styleDash.form}>
                <label>Nombre</label>
                  <input type="text" name="Text Name" className={styleDash.input} />
                <label>Apellido</label>
                  <input type="text" name="Text LasName" className={styleDash.input} />
                <label>País</label>
                <select name="pais" id="pais" className={styleDash.input} >
                    <option value="oneOption">Colombia</option>
                    <option value="twoOption">Peru</option>
                    <option value="threeOption">Argentina</option>
                </select>
                <label>Email</label>
                  <input type="text" name="Email" className={styleDash.input} />
                <label>Numero de telefono</label>
                  <input type="number" name="Phone" className={styleDash.input} />
                <button>Guardar Cambios</button>
              </form>
          </div> 
          {/* <div className={styleDash.footerProfile}>
            <p>2021 TODOS LOS DERECHOS RESERVADOS <span>Figuro</span></p>
            <p>Terminos y condiciones | Política </p>
        </div> */}
      </div>
  </>
  )
}


export default Profile;