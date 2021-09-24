import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { ArrowRight } from "@emotion-icons/bootstrap/ArrowRight";

@customElement("mili-button")
export class MiliButton extends LitElement {
    static styles = css`
        :host {
            font-family: var(--font);
        }
        a {
            border-radius: 17px;
            border: 2px solid var(--text);
            white-space: nowrap;
            padding: var(--space-xxs) var(--space-sm);
            font-weight: var(--text-heading-weight);
            font-size: var(--text-xs);
            cursor: pointer;
        }
        a:hover {
            color: var(--col-brand-500);
            border-color: var(--col-brand-500);
        }
        a:active {
            outline: 0;
            box-shadow: 0 0 0 2px rgba(59, 153, 252, 0.7);
        }
        .light {
        }
        .dark {
        }
    `;

    @property()
    icon = false;

    getIcon() {
        if (this.icon) {
            return html`<ArrowRight />`;
        }
    }

    render() {
        return html` <a role="button">
            <slot></slot>
            ${this.getIcon()}
        </a>`;
    }
}

export default { MiliButton };
