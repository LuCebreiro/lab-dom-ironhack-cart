// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //el console.log me imprime el mensaje

  const priceElement = product.querySelector('td.price > span');
  const price = Number(priceElement.textContent);
  console.log(price);
  /*encuentro el elemento que quiero con el queryselector
  le digo que el precio es el texto que hay en ese elemento y lo conviewro a numero*/

 
  const quantityElement = product.querySelector('td.quantity > input');
  const quantityValue = Number(quantityElement.value);
  console.log(quantityValue);

  const subtotal = price * quantityValue //hago la multiplicación
  console.log(subtotal);

  const subtotalElement = product.querySelector('td.subtotal > span');
  subtotalElement.textContent = subtotal.toFixed(2);
  //encuentro el elemento subotal, le digo que su contenido tenga 2 decimales y lo paso a
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const multipleProducts = document.getElementsByClassName('product');
  Array.from(multipleProducts).forEach(product => updateSubtotal(product));
  /*encuentro todos los elemento con la clase product
  Lo transformo en Array y para cada uno de sus elementos quiero que me actualice el precio*/

  
  // ITERATION 3 
  
  let totalPrice = 0; //totalPrice empieza en 0

  Array.from(multipleProducts).forEach(subtotalPrice => totalPrice += updateSubtotal(subtotalPrice));
  //hago que para cada producto le sume el subtrotal al precio total

  const totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.textContent = totalPrice.toFixed(2);
  //hacemos que el valor del precio total sea igual a la suma de los subtotales
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.target.closest('tr').remove();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const itemTable = document.getElementById('cart');
  const itemTableBody = document.querySelector('tbody');

  const productNameInput = document.querySelector('tr.create-product > td > input');
  const productNameValue = productNameInput.value;
  
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  
  const productNameCell = document.createElement('td');
  productNameCell.classList.add('name');

  const productPriceCell = document.createElement('td');
  productPriceCell.classList.add('price');

  const productQuantityCell = document.createElement('td');
  productQuantityCell.classList.add('quantity');

  const productSubtotalCell = document.createElement('td');
  productSubtotalCell.classList.add('subtotal');

  const productActionCell = document.createElement('td');
  productActionCell.classList.add('action');

  
  newRow.append(productNameCell, productPriceCell, productQuantityCell, productSubtotalCell, productActionCell)
  itemTableBody.appendChild(newRow)


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.getElementsByClassName('btn-remove');
  Array.from(removeBtn).forEach(button => {
    button.addEventListener('click', removeProduct)
  });

  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct)

});