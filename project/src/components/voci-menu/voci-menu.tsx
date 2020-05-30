import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'voci-menu',
  styleUrl: 'voci-menu.css',
  shadow: true,
})
export class VociMenu implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
