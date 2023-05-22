import API_ENDPOINT from '../globals/api-endpoint';
import { createFormTemplate } from '../views/templates/template-creator';

const ReviewFormInitator = {
  async init({ reviewForm, restaurantId }) {
    this._reviewForm = reviewForm;
    this._restaurantId = restaurantId;

    await this._renderForm();
    this._handleFormSubmit();
  },

  async _renderForm() {
    this._reviewForm.innerHTML = createFormTemplate();
  },

  _getPayload() {
    const payload = {
      id: this._restaurantId,
      name: document.querySelector('#name').value,
      review: document.querySelector('#review').value,
    };

    return payload;
  },

  _handleFormSubmit() {
    const form = document.querySelector('#review-form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      try {
        console.log(this._getPayload());
        const response = await fetch(API_ENDPOINT.review, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this._getPayload()),
        });
        const responseJson = await response.json();
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    });
  },
};

export default ReviewFormInitator;
