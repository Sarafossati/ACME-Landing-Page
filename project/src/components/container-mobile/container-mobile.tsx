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
        <menu-mobile simpleText="Prodotti"><a href="prodotti.html"></a></menu-mobile>
        <menu-mobile simpleText="Preventivo"><a href="preventivi.html"></a></menu-mobile>
        <menu-mobile simpleText="Contatti"><a href="contatti.html"></a></menu-mobile>
        <menu-mobile simpleText="News"><a href="news.html"></a></menu-mobile>
      </div>
    );
  }

}
