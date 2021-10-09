import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

//Load styles
import style from "../styles/components/mili-button.scss";

//For icons
import { ArrowRight } from "@emotion-icons/bootstrap/ArrowRight";

@customElement("mili-button")
export class MiliButton extends LitElement {
    static styles = style;

    @property()
    icon = false;

    @property()
    class = "";

    getIcon() {
        if (this.icon) {
            return html`<ArrowRight />`;
        }
    }

    render() {
        return html`<button class="${this.class}">
            <slot></slot>
            ${this.getIcon()}
        </button>`;
    }
}

export default { MiliButton };
