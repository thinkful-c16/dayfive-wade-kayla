'use strict';

function addItems() {
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    let item = $('.js-shopping-list-entry').val();
    $('.shopping-list').append(`<li><span class='shopping-item'>`+item+`</span>
        <div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>`+'check'+`</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">`+'delete'+`</span>
            </button>
            </div>
            </li>`);
    console.log(item);


  })

}

function checkItems() {
  $('.shopping-item-toggle').on('click', function(event) {
    $(this).toggleClass('shopping-item__checked');
  })
}

// function deleteItems() {
//     //code here
// }


$(addItems());
$(checkItems());