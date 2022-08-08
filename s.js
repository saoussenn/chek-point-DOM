
	let btnMinus = document.getElementsByClassName('minus-btn');
	let btnPlus = document.getElementsByClassName('plus-btn');
	let input = document.getElementsByClassName('Quant');
	let price = document.getElementsByClassName('price');
	let btnDelete = document.getElementsByClassName('delete');
	let items = document.getElementsByClassName('Item');
	let hearts = document.getElementsByClassName('like');

	
/* Incrementation avec le bouton moins */ 


for(let i = 0 ; i < btnMinus.length ; i++)
{
	btnMinus[i].addEventListener('click', function onClick() 
	{
		if(input[i].value >= 1)
		{
			input[i].value--;
		}       
		TotalPrice() 
	});
   
}

/* Incrementation avec le bouton plus */

for(let i = 0 ; i < btnPlus.length ; i++)
{
	btnPlus[i].addEventListener('click', function onClick()
	 {
		input[i].value++; 
		TotalPrice() 
	});
	
}


/* Changement la couleur de coeur en rouge*/


for(let i = 0 ; i < hearts.length ; i++)
{
    hearts[i].addEventListener('click', function onClick()
	 {
          
        if(hearts[i].style.color === 'red')
        {
            hearts[i].style.color = 'black';
        }
        else
            hearts[i].style.color = 'red';
    });
}


