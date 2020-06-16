import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'container-mobile',
  styleUrl: 'container-mobile.css',
  shadow: true,
})
export class ContainerMobile implements ComponentInterface {

  render() {
    return (
      <div>
        <menu-mobile simpleText="Prodotti"></menu-mobile>
        <menu-mobile simpleText="Preventivo"></menu-mobile>
        <menu-mobile simpleText="Contatti"></menu-mobile>
        <menu-mobile simpleText="News"></menu-mobile>
      </div>
    );
  }

}
