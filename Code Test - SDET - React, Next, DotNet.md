# 🧪 Coding Challenge: Product Catalog with favourite page 

## 🎯 Objective

Build a small frontend application that fetches products from
the [DummyJSON Products API](https://dummyjson.com/docs/products) and allows a user to browse and add products as a favourite.

---

## ✅ Requirements

### 1. Start Page – Product List (`/`)
- already we have added logic to render card, we need to chagne the API and based on this we need to plug the values 
- Fetch products from: `GET https://dummyjson.com/products`
- Display each product's:
    - Title
    - Thumbnail image
    - Price
- Each product should have a star icon based on toggle user can add/remove to favourite.
- Top middle we can add a search bar so that user can search a product , use debounce method 


### 3. Favourite page

- Maintain a Favourite that persists while navigating between pages and page reloads.
- Display the number of Favourite items in the page in a header or persistent component (e.g., navbar).
- react-toast we have already added and it is working as expected.
