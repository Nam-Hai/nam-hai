import { N } from "../utils/namhai";

export default class homeToCollections {
  constructor(b) {
    let link = N.get('a[href="collections"]', this.element)
    if (N.Ga(link, 'href')) {
      link.click()
    }

  }
  play() {
  }
}
