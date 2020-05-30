import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'contatti-navigazione',
  styleUrl: 'contatti-navigazione.css',
  shadow: true,
})
export class ContattiNavigazione implements ComponentInterface {

  render() {
    return (
      <div>
        <lista-contatti></lista-contatti>
        <navigazione-principale></navigazione-principale>
      </div>
    );
  }

}
