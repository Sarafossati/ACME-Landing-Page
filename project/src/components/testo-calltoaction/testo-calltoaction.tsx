import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'testo-calltoaction',
  styleUrl: 'testo-calltoaction.css',
  shadow: true,
})
export class TestoCalltoaction implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
