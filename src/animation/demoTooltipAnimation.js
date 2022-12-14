import { N } from "../utils/namhai";

export default class PreloaderTooltipAnimation {
  constructor(b) {

    let tooltip = N.get('.ressort__demo__tooltip')
    let spanTooltip = N.getAll('span span', tooltip)
    let succes = N.getAll('.ressort__demo__success span span')
    this.tl = new N.TL

    let tooltipO = {
      x: b ? [0, 105] : [105, 0],
      delay: b ? 0 : 200
    }

    let successO = {
      o: b ? [105, 0] : [0, 105],
      delay: b ? 200 : 0
    }
    this.tl.from({
      el: spanTooltip,
      p: {
        x: tooltipO.x
      },
      d: 450,
      e: 'o5',
      delay: tooltipO.delay
    })

    this.tl.from({
      el: succes,
      p: {
        x: successO.o
      },
      d: 450,
      e: 'o5',
      delay: successO.delay
    })


  }

  play() {
    this.tl.play()
  }


}

