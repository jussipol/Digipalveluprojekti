
let count = 0;
let kalorit_yhteensa;
let ruoan_maara;

function myFunction() {
	let selected = document.querySelector('#ruoka_id');
	let ruoka_listaan = selected.options[selected.selectedIndex].textContent
	ruoan_maara = document.querySelector('#ruokamaara');

	let kalorimaara = Math.ceil(+selected.value / 100 * +ruoan_maara.value)
	count += Math.ceil(+selected.value / 100 * +ruoan_maara.value);

	let optionElem = document.createElement('LI');
	let checkboxElem = document.createElement('INPUT')
    checkboxElem.type = 'checkbox'
    optionElem.classList.add('lista_elem');

	optionElem.setAttribute('data-kalorit', Math.ceil(kalorimaara));
    optionElem.textContent = ruoka_listaan + ' ' + kalorimaara + ' kaloria';

    let selectContainer = document.querySelector('#select-container');
	
    selectContainer.appendChild(optionElem);
	optionElem.appendChild(checkboxElem);


	let kaloritavoite = document.querySelector('#kaloritavoite').value;
	if (!kaloritavoite) {
		kaloritavoite = 0;
	}


	kalorit_yhteensa = document.querySelector('#kalorit');
	kalorit_yhteensa.textContent = count + ' / ' + kaloritavoite;
}

function resetFunction() {
	kaloritavoite = document.querySelector('#kaloritavoite').value;
	let lista_elems = document.querySelectorAll(".lista_elem");

	for (let elem of lista_elems) {
		elem.remove();
	}

	if (!kaloritavoite) {
		kaloritavoite = 0;
	}

	count = 0;
	kalorit_yhteensa.textContent = count + ' / ' + kaloritavoite;
}

function deleteFunction() {
	let lista_elems = document.querySelectorAll(".lista_elem");
	

	for (let elem of lista_elems) {
		let listaelem = elem.querySelector('input');
		if (listaelem.checked){
			count -= +elem.dataset.kalorit;
			elem.remove();
		}
		
	}
	kaloritavoite = document.querySelector('#kaloritavoite').value;
	if (!kaloritavoite) {
		kaloritavoite = 0;
	}
	kalorit_yhteensa = document.querySelector('#kalorit');
	kalorit_yhteensa.textContent = count + ' / ' + kaloritavoite;
}