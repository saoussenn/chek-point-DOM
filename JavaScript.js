let hearts = document.getElementsByClassName('like');
	let btnMinus = document.getElementsByClassName('minus-btn');
	let btnPlus = document.getElementsByClassName('plus-btn');
	let input = document.getElementsByClassName('Quant');
	let price = document.getElementsByClassName('price');
	let btnDelete = document.getElementsByClassName('delete');
	let items = document.getElementsByClassName('Item');
	
	
	/* function to change the heart shape button to red onclick*/
	
	for(let i = 0 ; i < hearts.length ; i++)
	{
	    hearts[i].addEventListener('click', function onClick() {
	          
	        if(hearts[i].style.color === 'red')
	        {
	            hearts[i].style.color = 'black';
	        }
	        else
	            hearts[i].style.color = 'red';
	    });
	}
	
	/*fonction to decrement item quantity with minus nutton*/ 
	
	    for(let i = 0 ; i < btnMinus.length ; i++){
	        btnMinus[i].addEventListener('click', function onClick() {
	            if(input[i].value >= 1){
	                input[i].value--;
	            }       
	            TotalPrice() 
	        });
	       
	    }
	
	/* function to increment item quantity with plus*/
	
	    for(let i = 0 ; i < btnPlus.length ; i++){
	        btnPlus[i].addEventListener('click', function onClick() {
	            input[i].value++; 
	            TotalPrice() 
	        });
	        
	    }
	   
	/* function to delete item from cart*/
	
	        for( var i =0 ; i < btnDelete.length ; i++) 
	        {
	            var button = btnDelete[i]
	            button.addEventListener('click', function(event){
	                var buttonclicked = event.target
	                buttonclicked.parentElement.remove ()
	                TotalPrice() 
	            })
	        }                
	
	/*function to calculate the total price*/     
	
	        function TotalPrice() 
	        {
	            var ItemContainer = document.getElementsByClassName('items')[0]
	            var cartItems = document.getElementsByClassName('Item')
	            var total = 0
	            for( var i =0; i< cartItems.length ; i++){
	                 var cartItem = cartItems [i]
	                 var priceElement = cartItem.getElementsByClassName('price')[0]
	                 var quantityElement = cartItem.getElementsByClassName('Quant')[0]
	                 var price = parseFloat (priceElement.innerText)
	                 var quantity = quantityElement.value
	                 total = total+( price * quantity)
	             }
	            document.getElementById('finalPrice').value = total
	        }
