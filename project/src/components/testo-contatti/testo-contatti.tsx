import { Component, ComponentInterface, h } from '@stencil/core';
  /**
   * contattaci's div 
   */
  
@Component({
  tag: 'testo-contatti',
  styleUrl: 'testo-contatti.css',
  shadow: true,
})
export class TestoContatti implements ComponentInterface {


  render() {
    return (
      <div class="colore-sfondo div-contatti">
        <a href="mailto:contatti@acme.org" class="spazio mail">contatti@acme.org</a>
        <p class="spazio">09 130 22 17</p>
        <p class="spazio">Milano, Trieste, Roma, Cagliari</p>
        <div class="spazio">
            <a href="http://https://www.facebook.com/"><img class="loghi" src="/assets/fb.svg"></img></a>
            <a href="http://https://https://www.instagram.com"><img class="loghi" src="/assets/ig.svg"></img></a>
            <a href="http://https://www.youtube.com/"><img class="loghi" src="/assets/yt.svg"></img></a>
        </div>
      </div>
    );
    
  }

}
