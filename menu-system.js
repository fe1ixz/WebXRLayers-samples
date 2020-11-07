import { UrlTexture } from "./js/render/core/texture.js";
import { ButtonNode } from "./js/render/nodes/button.js";

export class MenuSystem {
  constructor() {
    this.buttons = [];
  }

  createButton(path, translation, action) {
    let button = new ButtonNode(new UrlTexture(path), () => {});
    button.translation = translation;
    button.rotation = [-0.3826834, 0, 0, 0.9238795];
    this.buttons.push({ node: button, action: action });
  }

  getButtons() {
    return this.buttons;
  }

  addButtonsToScene(scene) {
    for (let button of this.buttons) {
      scene.addNode(button.node);
    }
  }
}
