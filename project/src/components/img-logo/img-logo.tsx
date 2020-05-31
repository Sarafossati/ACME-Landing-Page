import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'img-logo',
  styleUrl: 'img-logo.css',
  shadow: true,
})
export class ImgLogo implements ComponentInterface {

  render() {
    return (
      <a href="#"><img class="logo" src="/assets/LOGO.jpg"></img></a>
    );
  }

}
