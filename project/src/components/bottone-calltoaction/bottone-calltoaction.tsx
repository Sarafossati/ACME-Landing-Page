import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bottone-calltoaction',
  styleUrl: 'bottone-calltoaction.css',
  shadow: true,
})
export class BottoneCalltoaction implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
