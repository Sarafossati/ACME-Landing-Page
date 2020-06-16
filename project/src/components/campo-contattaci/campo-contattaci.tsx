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
        <div>
          <p>* I campi contrassegnati sono obbligatori</p>  
          <br/>
          <input placeholder="Il tuo nome *" required></input>
          <input placeholder="La tua e-mail *" required></input>
          <oggetto-messaggio></oggetto-messaggio>
          <br/>
          <input placeholder="Il tuo messaggio *" required></input>
        </div>

    );
  }

}
