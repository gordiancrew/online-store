export const templateStoryPage = `
<div class="store-page">
        <div class="filters tile">
          <div class="filters__title">Filters</div>
          <div class="filters__wrapper-links">
            <div class="filters__link filters__link_copy">Copy link</div>
            <div class="filters__link filters__link_reset">Reset Filters</div>
          </div>
          <div class="filters__wrapper-category">
            <div class="filter__wrapper_subtitle">
              <p class="filters__subtitle">Category</p>
              <!-- <div class="filter__arrow"></div> -->
            </div>
            <ul class="filters__wrapper-list">
              <li class="filters__item">
                <div class="filters__wrapper-checkbox">
                  <input type="checkbox" class="filters__checkbox" id="smartphones" name="smartphones" value="true" />
                  <label for="smartphones">smartphones</label>
                </div>
                <span>(0/0)</span>
              </li>
              <li class="filters__item filters__item_disaibled">
                <div class="filters__wrapper-checkbox">
                  <input type="checkbox" class="filters__checkbox" id="laptop" name="laptop" value="true" />
                  <label for="laptop">laptop</label>
                </div>
                <span>(0/0)</span>
              </li>
            </ul>
          </div>
          <div class="filters__wrapper-category">
            <div class="filter__wrapper_subtitle">
              <p class="filters__subtitle">Brand</p>
              <!--  <div class="filter__arrow"></div> -->
            </div>
            <ul class="filters__wrapper-list">
              <li class="filters__item">
                <div class="filters__wrapper-checkbox">
                  <input type="checkbox" class="filters__checkbox" id="apple" name="apple" value="true" />
                  <label for="apple">Apple</label>
                </div>
                <span>(0/0)</span>
              </li>
              <li class="filters__item filters__item_disaibled">
                <div class="filters__wrapper-checkbox">
                  <input type="checkbox" class="filters__checkbox" id="samsung" name="samsung" value="true" />
                  <label for="samsung">Samsung</label>
                </div>
                <span>(0/0)</span>
              </li>
            </ul>
          </div>
          <div class="filters__wrapper-category">
            <p class="filters__subtitle">Price</p>
            <div class="filters__wrapper-scrollbar">
              <div class="scrollbar">
                <div class="scrollbar__wrapper-amount">
                  <div class="scrollbar__text scrollbar__text_min">10</div>
                  <div class="scrollbar__text scrollbar__text_max">2000</div>
                </div>
                <div class="scrollbar__wrapper-line">
                  <div class="scrollbar__line"></div>
                  <input class="scrollbar__input scrollbar__input_min" type="range" min="0" max="100" value="0" step="1" ></input>
                  <input class="scrollbar__input scrollbar__input_max" type="range" min="0" max="100" value="100" step="1" ></input>
                </div>                
              </div>
            </div>
          </div>
          <div class="filters__wrapper-category">
            <p class="filters__subtitle">Stock</p>
            <div class="filters__wrapper-scrollbar">
              <div class="scrollbar">
                <div class="scrollbar__wrapper-amount">
                  <div class="scrollbar__text scrollbar__text_min">10</div>
                  <div class="scrollbar__text scrollbar__text_max">2000</div>
                </div>
                <div class="scrollbar__wrapper-line">
                  <div class="scrollbar__line"></div>
                  <input class="scrollbar__input scrollbar__input_min" type="range" min="0" max="100" value="0" step="1"></input>
                  <input class="scrollbar__input scrollbar__input_max" type="range" min="0" max="100" value="100" step="1"></input>
                </div>                
              </div>
            </div>
          </div>
        </div>
        <div class="store-page__wrapper">
          <div class="sort tile">
            <select name="sort__select" id="sort" class="sort__selector">
              <option value="sort-title" disabled selected class="sort__option">Sort options</option>
              <option value="Price-ASC">Sort by price ASC</option>
              <option value="Price-DESC">Sort by price DESC</option>
            </select>
            <div class="sort__found">Found: <span class="sort__amount">100</span></div>
            <input type="search" name="search" id="search" class="sort__search" placeholder="Search product">
            <div class="wrapper__sort">
              <div class="icon icon_grid"></div>
              <div class="icon icon_list"></div>
            </div>
          </div>
          <div class="list-products tile">
            <div class="product">
              <div class="product__wrapper-title">
                <div class="product__title">iPhone 9</div>
                <div class="product__wrapper-category">
                  <div class="product__category">smartphones</div>
                  <div class="product__brand">Apple</div>
                </div>                
              </div>
              <div class="product__wrapper-img">
                <img class="product__img" src="https://i.dummyjson.com/data/products/1/1.jpg", alt="photo">
              </div>
              <div class="product__wrapper-rating">
                <div class="product__rating">4.69</div>
                <div class="product__discount">12.96</div>
              </div>
              <div class="product__description">An apple mobile which is nothing like apple</div>
              <div class="product__wrapper-price">
                <div class="product__price">549</div>
                <div class="product__add"></div>
              </div>              
              <div class="product__wrapper-stock">
                <div class="product__stock">94</div>
              </div>              
            </div>
          </div>
        </div>        
      </div>
`;
export default templateStoryPage;
