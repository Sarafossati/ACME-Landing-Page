# container-body



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [contatti-navigazione](../contatti-navigazione)
- [header-principale](../header-principale)
- [bck-contattaci](../bck-contattaci)

### Graph
```mermaid
graph TD;
  container-body --> contatti-navigazione
  container-body --> header-principale
  container-body --> bck-contattaci
  contatti-navigazione --> lista-contatti
  contatti-navigazione --> navigazione-principale
  lista-contatti --> testo-contatti
  navigazione-principale --> img-logo
  navigazione-principale --> menu-principale
  header-principale --> testo-calltoaction
  bck-contattaci --> contattaci-form
  contattaci-form --> testo-contattaci
  contattaci-form --> campo-contattaci
  contattaci-form --> bottone-contattaci
  style container-body fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
