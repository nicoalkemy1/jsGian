
const addToCart = (id) => {
	const selectedPaleta = paletas.find(paleta => paleta.id === id);
	if (selectedPaleta) {
	  cart.push(selectedPaleta);
	  localStorage.setItem('cart', JSON.stringify(cart));
	  updateCartUI();
	}
}

  const updateCartUI = () => {
	const cartDetailsContainer = document.getElementById('cart-details');
	const cartTotalElement = document.getElementById('cart-total');
  
	cartDetailsContainer.innerHTML = '';
  
	const paletteInfo = {};
  
	let total = 0;
  
	cart.forEach(item => {
	  if (paletteInfo[item.title]) {
		paletteInfo[item.title].count++;
		paletteInfo[item.title].sum += item.price;
	  } else {
		paletteInfo[item.title] = {
		  count: 1,
		  sum: item.price
		};
	  }
	  total += item.price;
	});
  
	for (const title in paletteInfo) {
	  const paletaDetail = document.createElement('p');
	  paletaDetail.textContent = `${paletteInfo[title].count}x ${title} - $${paletteInfo[title].sum.toFixed(2)}`;
	  cartDetailsContainer.appendChild(paletaDetail);
	}
  
	cartTotalElement.textContent = total.toFixed(2);
  }
  
  
  
