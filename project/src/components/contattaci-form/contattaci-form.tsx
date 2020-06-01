import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'contattaci-form',
  styleUrl: 'contattaci-form.css',
  shadow: true,
})
export class ContattaciForm implements ComponentInterface {

  render() {
    return (
      <div class="container">
        <div class="spazio"></div>
        <div class="box-blu">
          <testo-contattaci></testo-contattaci>
          <campo-contattaci></campo-contattaci>
        </div>
      </div>
    );
  }

}
