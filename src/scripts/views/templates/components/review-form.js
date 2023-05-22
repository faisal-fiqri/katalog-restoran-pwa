class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        
      `;
  }
}

customElements.define('review-form', ReviewForm);
