import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, createEmptyStateTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
        <div class="empty-state-container"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const emptyStateContainer = document.querySelector('.empty-state-container')
    
    if (restaurants.length === 0){
      restaurantsContainer.getElementsByClassName.display='none';
      emptyStateContainer.innerHTML = createEmptyStateTemplate();
    }
    restaurants.forEach((restaurant) => {
      emptyStateContainer.getElementsByClassName.display='none';
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
