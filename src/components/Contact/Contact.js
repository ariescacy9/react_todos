
import './Contact.css';

function Contact (){
  return (
    <div id="contact">
      <div class="form">
        <div class="form-1">
          <label for="nombre">Nombres</label>
          <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" required />
          <label for="correo">Correo Electrónico</label>
          <input type="email" name="correo" id="correo" placeholder="Correo electrónico..." required />
          <label for="comments">¿escribe alguna consulta?</label>
          <textarea id="comments" name="comments" rows="10" cols="40"></textarea>
          <div class="button__comments">
            <button class="button-1"type="submit">Enviar</button>
          </div>
        </div>  
      </div>
    </div>
  );
}
export default Contact;