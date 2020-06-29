import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'banner-preventivo',
  styleUrl: 'banner-preventivo.css',
  shadow: true,
})
export class BannerPreventivo implements ComponentInterface {

  render() {
    return (
      <div class="cta">
        <h2>REALIZZA I TUOI SOGNI CON UN CLICK</h2>
        <bottone-chiaro btnTextChiaro="Preventivo"></bottone-chiaro>
      </div>
    );
  }

}
