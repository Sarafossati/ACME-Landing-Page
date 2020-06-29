import { Component, ComponentInterface, h, Prop, getAssetPath } from '@stencil/core';
/*
* main menu for mobile
*/

@Component({
  tag: 'menu-mobile',
  styleUrl: 'menu-mobile.css',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class MenuMobile implements ComponentInterface {

  @Prop() simpleText: string;

  render() {
    return (
      <div>
        <img src={getAssetPath("/assets/prodotti.svg")} alt=""/>
        <p>{this.simpleText}</p>
      </div>
    );
  }

}
