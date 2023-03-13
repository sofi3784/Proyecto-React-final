

import React from 'react';

export default function Contacto() {
  return (
    <div>
      <section>
          <article>
            <form className='form-contacto'>
              <h2 className='Titulo-contacto'>CONTACTO</h2>
              <label htmlFor="iname">Nombre:</label>
              <input id="iname" type="text" name="name" placeholder="Introduce tu Nombre..." />
              <label htmlFor="isurname">Apellido:</label>
              <input id="isurname" type="text" name="surname" placeholder="Introduce tu Apellido..." />
              <label htmlFor="iemail">Email:</label>
              <input id="iemail" type="email" name="iemail" placeholder="Introduce tu Email..." />
              <label htmlFor="itel">Teléfono</label>
              <input id="itel" type="tel" name="itel" placeholder="Introduce tu teléfono..." />
              <textarea className='text-contacto' name="Mensaje" placeholder="Escriba su mensaje aquí..." defaultValue={""} />
              <input type="submit" defaultValue="Enviar" id = "boton"/>
              <input type="reset" defaultValue="Resetear" id = "boton"/>
            </form>
          </article>
        </section>
    </div>
  )
}