//#region 
const toggleButton = document.getElementById('order-toggle');
const orderText = document.querySelector('.card-item-order-text');

toggleButton.addEventListener('click', function() {
  if (orderText.style.display === 'none') {
    orderText.style.display = 'flex';
  } else {
    orderText.style.display = 'none';
  }
});
//#endregion