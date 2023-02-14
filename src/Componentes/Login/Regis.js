import React from 'react'

function Regis() {
    return (
        <div>
             <form action="action_page.php">
                <div className="container">
                    <h1>Registro</h1>
                    <p>Por favor, rellene este formulario para crear una cuenta.</p>
                    <hr />
                    <label htmlFor="email"><b>Nombre</b></label>
                    <input type="text" placeholder="Ingrese Nombre" name="email" id="email" required />
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Ingrese Email" name="email" id="email" required />
                    <label htmlFor="psw"><b>Identificacion</b></label>
                    <input type="password" placeholder="ingrese identificacion" name="psw" id="psw" required />
                    <label htmlFor="psw-repeat"><b>Repita Indentificacion</b></label>
                    <input type="password" placeholder="Repita indentificacion" name="psw-repeat" id="psw-repeat" required />
                    <hr />
                    <p>Al crear una cuenta, usted acepta <a href="#">Terms &amp; Privacy</a>.</p>
                    <button type="submit" className="registerbtn">Registrar</button>
                </div>
                <div className="container signin">
                    <p>Ya Tienes Una Cuenta? <a href="#">Iniciar Seccion</a>.</p>
                </div>
            </form><br/>
            </div>
            )
}

            export default Regis
