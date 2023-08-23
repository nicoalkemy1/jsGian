function cripto(crypto, currency) {
	return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`)
		.then(res => res.json())
		.then()
		.catch(err => console.log('hubo problemas en la conexión:', err))
}

const body = document.querySelector('body')

cripto('bitcoin', 'ars')
	.then(res => body.innerHTML += ' ' + res.bitcoin.ars)
	.catch(err => body.innerHTML += ' No se pudo obtener este valor')

cripto('bitcoin', 'usd')
	.then(res => body.innerHTML += ' ' + res.bitcoin.usd)
	.catch(err => body.innerHTML += ' No se pudo obtener este valor')



