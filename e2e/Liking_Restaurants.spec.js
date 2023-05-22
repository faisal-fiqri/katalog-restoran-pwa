const assert = require('assert');

Feature('Liking Restaurants');

 
Before(({ I }) => {
    I.amOnPage('#/like');
  });
   
  Scenario('showing empty liked restaurants', ({ I }) => {
    I.waitForElement('#resto-item__not__found');
    I.seeElement('#resto-item__not__found');
    I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
  });

    Scenario('liking one restaurant', async ({ I }) => {
        I.waitForElement('.empty-state-container',5);
        I.seeElement('.empty-state-container');

        I.amOnPage('#');

        I.waitForElement('.restaurant-item__content h3 a', 5 );
        I.seeElement('.restaurant-item__content h3 a');

        const firstRestaurantName = await I.grabTextFrom(locate('.restaurant-item__content h3 a').first());

        I.waitForElement('.restaurant-item__content h3 a', 5 );
        const firstResto = locate('.restaurant-item__content h3 a').first();
        I.click(firstResto);

        I.waitForElement('#likeButton', 100 );
        I.seeElement('#likeButton');

        I.click('#likeButton');

        I.amOnPage('#/like');
        I.waitForElement('#restaurants', 5);
        I.seeElement('#restaurants');

        I.waitForElement('.restaurant-item__content h3 a', 5 );
        I.seeElement('.restaurant-item__content h3 a');

        const likedRestaurantName = await I.grabTextFrom('.restaurant-item__content h3 a');

        assert.strictEqual(firstRestaurantName, likedRestaurantName);
    });

    Scenario('Unliking restaurant', async ({ I }) => {
        I.amOnPage('#');
        
        I.waitForElement('.restaurant-item__content h3 a', 5 );
        I.seeElement('.restaurant-item__content h3 a');

        I.click(locate('.restaurant-item__content h3 a').first());

        I.waitForElement('#likeButton', 100 );
        I.seeElement('#likeButton');

        I.click('#likeButton');

        I.amOnPage('#/like');
        I.waitForElement('#restaurants', 5);
        I.seeElement('#restaurants');

        I.waitForElement('.restaurant-item__content a', 5 );
        I.seeElement('.restaurant-item__content h3 a');

        I.click(locate('.restaurant-item__content h3 a').first());

        I.waitForElement('#likedButton', 100 );
        I.seeElement('#likedButton');

        I.click('#likedButton');

        I.amOnPage('#/like');

        I.waitForElement('#resto-item__not__found');
        I.seeElement('#resto-item__not__found');
    })