import React from 'react'

const Login = () => {
    return (
        <div> <form action="action_page.php">
            <div className="container">
                <h1>Inicio de Seccion</h1>
                <p>Porfavor Ingrese Los Datos.</p>
                <hr />
                <label htmlFor="email"><b>Nombre</b></label>
                <input type="text" placeholder="ingrese Nombre" name="email" id="email" required />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="ingrese Email" name="email" id="email" required />
                <label htmlFor="psw"><b>Identificacion</b></label>
                <input type="password" placeholder="ingrese Indentificacion" name="psw" id="psw" required />
                <hr />
                <button type="submit" className="registerbtn">Iniciar Seccion</button>
            </div>
            
        </form></div>
    )
}

export default Login