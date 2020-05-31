import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'testo-calltoaction',
  styleUrl: 'testo-calltoaction.css',
  shadow: true,
})
export class TestoCalltoaction implements ComponentInterface {

  render() {
    return (
      <div class="background">
        <div class="testi">
          <h1>Online è più facile e veloce</h1>
          <p>Puoi riattivare la tua polizza, rinnovarla o pagare una rata direttamente dal sito o dall'app ACME.</p>
          <br/>
          <button><a href="#">Scopri di più</a></button>
        </div>
      </div>
    );
  }

}
