import { Component, ComponentInterface, h } from '@stencil/core';
  /*
  * 'contattaci' form 
  */
 
@Component({
  tag: 'campo-contattaci',
  styleUrl: 'campo-contattaci.css',
  shadow: true,
})
export class CampoContattaci implements ComponentInterface {
  

  render() {
    return (
        <form>
          <p>* I campi contrassegnati sono obbligatori</p>  
          <br/>
          <input type="text" placeholder="Il tuo nome *" required></input>
          <input type="email" placeholder="La tua e-mail *" required></input>
          <oggetto-messaggio></oggetto-messaggio>
          <br/>
          <input class="contattaci-messaggio" placeholder="Il tuo messaggio *" required></input>
          <bottone-chiaro btnTextChiaro="Invia"></bottone-chiaro>
        </form>

    );
  }

}



