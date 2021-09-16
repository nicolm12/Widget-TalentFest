import React from 'react'
import styleDash from '../CSS/mainview.module.css'
import lightbulb from '../assets/lightbulb.png'

export default function Mainview() { 
  return(
  <>
    <div className={styleDash.mainview}>
        <div className={styleDash.welcomeContainer}>
            <div className={styleDash.welcome}>
                <h2>Te Damos La Bienvenida!</h2>
                <iframe src="https://www.youtube.com/embed/y6Sxv-sUYtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={styleDash.invitation}>
                <img src={lightbulb} alt="lihtbulb" />
                <h3>Conviértete en un experto</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores tempore repudiandae eligendi atque aperiam accusamus illo sapiente voluptates iusto nam voluptas vel provident architecto tenetur reprehenderit, mollitia deleniti. Ducimus, vitae.</p>
            </div>
        </div>
        <div className={styleDash.webinar}>
            <h2>Tus Webinars y Cursos</h2>
            <div  className={styleDash.videos}>
            <div className={styleDash.card}>
                <iframe src="https://player.vimeo.com/video/606906660?h=01f64a6d65&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Brecha Pensional.mp4" className ={styleDash.videoCard}></iframe>

                {/* <script src="https://player.vimeo.com/api/player.js"> */}

                <h4>Lorem ipsum </h4>
                <p>dolor sit amet consectetur adipisicing elit. Ipsam aut ducimus nobis suscipit molestiae, iusto porro delectus maiores dolorum dicta unde </p>
            </div>
            <div  className={styleDash.card}>
                <iframe src="https://player.vimeo.com/video/606906928?h=7cb6aa6b68&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Seguro de Salud.mp4" className ={styleDash.videoCard}></iframe>

                {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
                <h4>Lorem ipsum </h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut ducimus nobis suscipit molestiae, iusto porro delectus maiores dolorum </p>
            </div>
            <div  className={styleDash.card}>
                <iframe src="https://player.vimeo.com/video/606907695?h=da2df062a1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Seguro Educativo.mp4" className ={styleDash.videoCard}></iframe>


                {/* <script src="https://player.vimeo.com/api/player.js"></script> */}

                <h4>Lorem ipsum </h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut ducimus nobis suscipit molestiae, iusto porro delectus maiores dolorum </p>
            </div>

            </div>
        </div>
        <div className={styleDash.footer}>
            <p>2021 TODOS LOS DERECHOS RESERVADOS <span>Figuro</span></p>
            <p>Terminos y condiciones | Política </p>
        </div>
    </div>
  </>
  )
}

