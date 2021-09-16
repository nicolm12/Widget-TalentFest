import React from 'react'
import styleDash from '../CSS/mainview.module.css'
import FormRegister from './FormRegister'

export default function Mainview() {

 const [changeView, serChangeview] = useState(false)
 
  return(
  <>
  <div className={styleDash.profile}>
      <div>
          <h2>Mi perfil</h2>
          <div>
              <img src="" alt="" />
              <button>Subir</button>
              <button>Borrar</button>
          </div>
          <div>
              <form action="">
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
              </form>
          </div> 
      </div>
  </div>
  ) }
  </>
  )
}
