import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'container-body',
  styleUrl: 'container-body.css',
  shadow: true,
})
export class ContainerBody implements ComponentInterface {

  render() {
    return (
      <div>
        <contatti-navigazione></contatti-navigazione>
        <header-principale></header-principale>
        <cerchio>da fare</cerchio>
        <carte>da fare</carte>
        <banner-preventivo></banner-preventivo>
        <bck-contattaci></bck-contattaci>
        <staff>da fare</staff>
        <footer-footer></footer-footer>
        <didascalia-footer></didascalia-footer>
      </div>
      
    );
  }

}
