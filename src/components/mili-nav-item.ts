import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

//Load styles
import style from "../styles/components/mili-nav-item.scss";

@customElement("mili-nav-item")
export class MiliNavItem extends LitElement {
    static styles = style;

    @property()
    href = "";

    @property()
    name = "";

    render() {
        return html`<a href="${this.href}">${this.name}</a>`;
    }
}

export default { MiliNavItem };
