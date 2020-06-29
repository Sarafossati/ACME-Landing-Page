import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'seconda-carta',
  styleUrl: 'seconda-carta.css',
  shadow: true,
})
export class SecondaCarta implements ComponentInterface {

  render() {
    return (
      <div>
        <seconda-immagine></seconda-immagine>
        <primo-box-testo></primo-box-testo>
      </div>
    );
  }

}
