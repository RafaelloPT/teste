const memoryButtons = document.querySelectorAll('.memory-button');
const colorButtons = document.querySelectorAll('.color-button');
const finalPrice = document.getElementById('final-price');

let selectedMemory = { price: 699.99, ram: "128GB | 8GB" };
let selectedColor = 'Space Black';

memoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        memoryButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedMemory.price = parseInt(button.getAttribute('data-price'));
        selectedMemory.ram = button.getAttribute('data-ram');
        updatePrice();
    });
});

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        colorButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedColor = button.getAttribute('data-color');
        updatePrice();
    });
});

function updatePrice() {
    finalPrice.textContent = `Price: ${selectedMemory.price}€ (${selectedMemory.ram} - ${selectedColor || 'No color selected'})`;
}
