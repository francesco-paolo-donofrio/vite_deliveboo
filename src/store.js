import { reactive } from "vue";
export const store = reactive({
  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBasePath: "http://127.0.0.1:8000/storage/",
  types:[],
  item: null,
  cart:[],
  prevOrder: [],
});


// document.addEventListener('DOMContentLoaded', function() {
//   const decreaseButtons = document.querySelectorAll('.decrease');
//   const increaseButtons = document.querySelectorAll('.increase');
//   decreaseButtons.forEach(button => {
//       button.addEventListener('click', function() {
//           const quantitySpan = this.nextElementSibling;
//           let quantity = parseInt(quantitySpan.textContent);
//           const productId = this.dataset.productId; // Assumi che hai aggiunto un attributo data-product-id
//           if (quantity > 1) {
//               quantity -= 1;
//               quantitySpan.textContent = quantity;
//               updateQuantity(productId, quantity);
//           }
//       });
//   });
//   increaseButtons.forEach(button => {
//       button.addEventListener('click', function() {
//           const quantitySpan = this.previousElementSibling;
//           let quantity = parseInt(quantitySpan.textContent);
//           const productId = this.dataset.productId; // Assumi che hai aggiunto un attributo data-product-id
//           quantity += 1;
//           quantitySpan.textContent = quantity;
//           updateQuantity(productId, quantity);
//       });
//   });
//   function updateQuantity(productId, quantity) {
//     fetch('/update-quantity', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//         },
//         body: JSON.stringify({
//             id: productId,
//             quantity: quantity
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
//   }
// });