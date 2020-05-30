import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'lista-contatti',
  styleUrl: 'lista-contatti.css',
  shadow: true,
})
export class ListaContatti implements ComponentInterface {

  render() {
    return (
      <testo-contatti></testo-contatti>
    );
  }

}
