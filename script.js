// Add event listener to buttons to handle clicks
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const product = event.target.closest('.produto');
    const productName = product.querySelector('h3').textContent;

    alert(`Você está comprando a ${productName}.`);
  });
});

// Add functionality to the "Saiba Mais" button in the promotion section
const saibaMaisButton = document.querySelector('.promocao button');
saibaMaisButton.addEventListener('click', () => {
  alert('Clique aqui para saber mais sobre a oferta especial!');
});

const sections = document.querySelectorAll('.section'); // Select all elements with class "section"






