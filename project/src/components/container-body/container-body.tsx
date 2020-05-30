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
      </div>
      
    );
  }

}
