import React from 'react'

const Footer = () => {
  return (
    <div>
        
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h5><i className="fa fa-road" /> PelisPlis.Com</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li><a href>Productos</a></li>
                    <li><a href>Beneficios</a></li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li><a href>Docuementacion</a></li>
                    <li><a href>Soporte</a></li>
                    <li><a href>Terminos Legales</a></li>
                    <li><a href>Acerca de Nosotros</a></li>
                  </ul>
                </div>
              </div>
              <ul className="nav">
                <a href="https://www.facebook.com/profile.php?id=100027372139402&mibextid=ZbWKwL"><img src="/img/face.png" alt="facebook" /></a>
                 <a href="https://www.facebook.com/profile.php?id=100027372139402&mibextid=ZbWKwL"><img src="/img/you.png" alt="youtube" /></a>
                <a href="https://www.facebook.com/profile.php?id=100027372139402&mibextid=ZbWKwL"><img src="/img/insta.png" alt="Instagram" /></a>
                <a href="https://www.facebook.com/profile.php?id=100027372139402&mibextid=ZbWKwL"><img src="/img/twitter.png" alt="Twitter" /></a>

              </ul>
              <br />
            </div>
            <div className="col-md-2">
              <h5 className="text-md-right">Contactanos</h5>
              <hr />
            </div>
            <div className="col-md-5">
              <form>
                <fieldset className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <textarea className="form-control" id="exampleMessage" placeholder="Mensaje" defaultValue={""} />
                </fieldset>
                <fieldset className="form-group text-xs-right">
                  <button type="button" className="btn btn-secondary-outline btn-lg">Enviar</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default Footer