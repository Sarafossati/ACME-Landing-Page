import { Component, ComponentInterface, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'box-staff',
  styleUrl: 'box-staff.css',
  shadow: true,
})
export class BoxStaff implements ComponentInterface {
  /**
   * contenitore cerchi con immagini dello sfaff dell'azienda
   */
  @Prop() staff ="staff.png"
  render() {
    return (
      <div class="box-cerchi">
        <div class="singolo-cerchio"> 
            <div class="cerchio">
            <img src={getAssetPath(`/assets/${this.staff}`)} />
            </div>
            <p>RESPONSABILE MICROPRESTITI</p>
            <bottone-scuro btnTextScuro="CONTATTAMI"></bottone-scuro>
         </div>
         <div class="singolo-cerchio"> 
            <div class="cerchio">
            <img src={getAssetPath(`/assets/${this.staff}`)} />
            </div>
            <p>RESPONSABILE PRESTITI AZIENDE</p>
            <bottone-scuro btnTextScuro="CONTATTAMI"></bottone-scuro>
         </div> 
         <div class="singolo-cerchio"> 
            <div class="cerchio">
            <img src={getAssetPath(`/assets/${this.staff}`)} />
            </div>
            <p>RESPONSABILE PRESTITI PRIVATI</p>
            <bottone-scuro btnTextScuro="CONTATTAMI"></bottone-scuro>
         </div>         
      </div>
    );
  }

}
