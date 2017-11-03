/* global $ */

'use strict';

function addItems() {
  //form is already loaded on the DOM//
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const newItem = $('.js-shopping-list-entry').val();
    $('.js-shopping-list').append(`<li><span class='shopping-item'>${newItem}</span>
        <div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
            </li>`);
    $('.js-shopping-list-entry').val('');

  });

}

// $('.js-parent-element').on('click', 'js-child-element', function())
// .click(//)

function checkItems() {
  //unordered list is fixed from the beginning and the toggle is its child//
  $('.js-shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function deleteItems() {
  $('.js-shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();

  });
}

function main() {
  $(addItems());
  $(checkItems());
  $(deleteItems());
}

$(main);

// $(addItems());
// $(checkItems());
// $(deleteItems());