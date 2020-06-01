import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'campo-contattaci',
  styleUrl: 'campo-contattaci.css',
  shadow: true,
})
export class CampoContattaci implements ComponentInterface {

  render() {
    return (
      <div>
        <input placeholder="Il tuo nome" required></input>
        <input placeholder="La tua e-mail" required></input>
        <oggetto-messaggio></oggetto-messaggio>
        <br/>
        <input placeholder="Il tuo messaggio" required></input>
      </div>
    );
  }

}
