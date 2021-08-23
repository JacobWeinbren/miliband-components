import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {classMap} from 'lit/directives/class-map.js';

@customElement("mili-button")
export class MiliButton extends LitElement {
  static styles = css`
    :host { 
      font-family: var(--font); 
    }
    a {
      box-sizing: border-box;
      max-width: 20rem;
      min-height: 3rem;
      font-size: 1rem;
      word-break: break-all;
      transition: var(--transition);
      cursor: pointer;
      padding: 0.87rem 1rem;
      text-align: center;
      line-height: 1.5;
    }
    .light {
      color: var(--primary);
      border: 1px solid var(--primary);
      background: var(--inverse)
    }
    .dark {
      color: var(--inverse);
      background: var(--primary)
    }
  `;

  static get properties() {
    return {
      class: {type: String},
    };
  }

  constructor() {
    super();
    this.class = "light";
    this.text = "Button";
  }

  render() {
    return html`
    <a role="button" class=${this.class}>
    <slot>
    </slot>
    </a>`;
  }
}

export default { MiliButton };
