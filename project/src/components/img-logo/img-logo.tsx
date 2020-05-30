import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'img-logo',
  styleUrl: 'img-logo.css',
  shadow: true,
})
export class ImgLogo implements ComponentInterface {

  render() {
    return (
      <img class="logo" src="/assets/LOGO.jpg"></img>
    );
  }

}
