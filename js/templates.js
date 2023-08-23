const paletaTemplate = ({ id, img, title, desc, price }) => `
  <img src="${img}" class="card-img-top" alt="Paleta 1">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${desc}</p>
    <p class="card-text">$${price}</p>
    <button ${cart.some(item => item.id === id) ? 'disabled' : ''} onclick="addToCart(${id})" class="btn btn-primary">Comprar ahora</button>
  </div>`;



					

const createCard = (paleta, container) => {
	const card = document.createElement('div')
	card.className = 'my-card'
	card.innerHTML = paletaTemplate(paleta)
	container.append(card)
}


const createTemplate = (paletas) => {
	const container = document.querySelector('.card-container')
	container.innerHTML = ''
	paletas.forEach(paleta => createCard(paleta, container))
}