import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

//Load styles
import style from "../styles/components/mili-nav.scss";
import logo from "../assets/images/logo.png";

@customElement("mili-nav")
export class MiliNav extends LitElement {
    static styles = style;

    render() {
        return html`<nav>
            <a href="/"><img src="${logo}" /></a>
            <slot class="left"></slot>
            <slot name="right"></slot>
        </nav>`;
    }
}

export default { MiliNav };
