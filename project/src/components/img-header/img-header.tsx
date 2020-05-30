import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'img-header',
  styleUrl: 'img-header.css',
  shadow: true,
})
export class ImgHeader implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
