import { Component, ComponentInterface,  h } from '@stencil/core';

@Component({
  tag: 'header-principale',
  styleUrl: 'header-principale.css',
  shadow: true,
})
export class HeaderPrincipale implements ComponentInterface {

  render() {
    return (
      <div>
        <testo-calltoaction></testo-calltoaction>
        <bottone-calltoaction></bottone-calltoaction>
      </div>
    );
  }

}
