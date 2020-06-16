import { Component, ComponentInterface, h, } from '@stencil/core';

@Component({
  tag: 'bottone-faq',
  styleUrl: 'bottone-faq.css',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class BottoneFaq implements ComponentInterface {

  render() {
    return (
        <div class="container">
          <div class="dropdown">
            <button class="dropbtn">Problemi con l'applicazione</button>
            <div class="dropdown-content">
              <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <br/>
          <div class="dropdown">
            <button class="dropbtn">Assistenza clienti</button>
            <div class="dropdown-content">
              <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <br/>
          <div class="dropdown">
            <button class="dropbtn">Investimento e risparmio</button>
            <div class="dropdown-content">
              <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <br/>
          <div class="dropdown">
            <button class="dropbtn">Regolamenti e rendiconti</button>
            <div class="dropdown-content">
              <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <br/>
          <div class="dropdown">
            <button class="dropbtn">Partnership</button>
            <div class="dropdown-content">
              <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
    );
  }

}
