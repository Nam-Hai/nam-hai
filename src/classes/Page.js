import { N } from "../utils/namhai"

export default class Page {
  constructor({ elements, components, content, name }) {
    this.selectorChildren = elements
    this.components = components

    this.content = N.Cr('div')
    this.content.classList.add('buffer-main')
    this.name = name
    this.content.innerHTML = content

    document.body.appendChild(this.content)
    this.create()
  }


  create() {
    this.elements = {};

    if (!this.components) return
    Object.entries(this.components).forEach(([key, componentType]) => {

      this.components[key] = [...N.getAll(key, this.content)].map(component => {
        return new componentType({ name: key, node: component })
      })
    })
  }

  render(nodeParent) {


    nodeParent.innerHTML = this.content.innerHTML
    nodeParent.setAttribute('style', '')
    nodeParent.setAttribute('data-template', this.name)

    this.nodeParent = nodeParent

  }
  renderComponents(nodeParent) {
    if (this.components) {
      Object.values(this.components).forEach((components) => {
        components.forEach(component => {
          component.render(nodeParent)
          component.addEventListener()
        })
      })
    }
    this.nodeParent = nodeParent
  }

  onMouseDown(e) {

  }

  onMouseMove(e) {

  }
  onMouseUp(e) {

  }

  async hide() {
  }
}
