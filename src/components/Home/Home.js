import './Home.css';

function Home (){
  return (
    <div id="contact">
      <div class="form">
        <div class="form-1">
          <h1>Bienvenidos a la pagina</h1>
          <h3>esta es la pagina de inicio</h3>
          <label for="comments">puedes realizar tus peticiones</label>
          <textarea id="comments" name="comments" rows="10" cols="40"></textarea>
        </div>  
      </div>
    </div>
  );
}
export default Home;