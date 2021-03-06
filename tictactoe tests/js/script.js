(function() {
    
	var game = document.getElementById('game');
	var player = 1;
	var reset = document.getElementById('reset');
	var children = game.childNodes;
	
	function reinit() {
        for (var i = 0, c = children.length; i < c; i++) {
            if (children[i].nodeType === Node.ELEMENT_NODE) {
                if (children[i].getAttribute('class') !== null) {
                    children[i].removeAttribute('class');
                }
            }
        }
        player = 1;
	}
	
	function check() {
	    if ((children[1].className === 'player1' && children[3].className === 'player1' && children[5].className === 'player1') 
	    || (children[7].className === 'player1' && children[9].className === 'player1' && children[11].className === 'player1')
	    || (children[13].className === 'player1' && children[15].className === 'player1' && children[17].className === 'player1')
	    || (children[1].className === 'player1' && children[9].className === 'player1' && children[17].className === 'player1')
	    || (children[5].className === 'player1' && children[9].className === 'player1' && children[13].className === 'player1')
	    || (children[1].className === 'player1' && children[7].className === 'player1' && children[13].className === 'player1')
	    || (children[3].className === 'player1' && children[9].className === 'player1' && children[15].className === 'player1')
	    || (children[5].className === 'player1' && children[11].className === 'player1' && children[17].className === 'player1')) {
	        alert('joueur 1 a gagné !');
	        reinit();
	    }
	    else if ((children[1].className === 'player2' && children[3].className === 'player2' && children[5].className === 'player2') 
	    || (children[7].className === 'player2' && children[9].className === 'player2' && children[11].className === 'player2')
	    || (children[13].className === 'player2' && children[15].className === 'player2' && children[17].className === 'player2')
	    || (children[1].className === 'player2' && children[9].className === 'player2' && children[17].className === 'player2')
	    || (children[5].className === 'player2' && children[9].className === 'player2' && children[13].className === 'player2')
	    || (children[1].className === 'player2' && children[7].className === 'player2' && children[13].className === 'player2')
	    || (children[3].className === 'player2' && children[9].className === 'player2' && children[15].className === 'player2')
	    || (children[5].className === 'player2' && children[11].className === 'player2' && children[17].className === 'player2')) {
	        alert('joueur 2 a gagné !');
	        reinit();
	    }  
	}
	
	function isClicked(div) {
	    if (div.getAttribute('class') !== null) {
	        return true;
	    }
	}
	
	function random() {
		var test = Math.ceil(Math.random() * 10);
		return test;
	}
	
	function computer() {
		var test = random();
		while (test < 1 && test > 9) {
			random();
		}
		var divActive = document.getElementById(test);
		if (!isClicked(divActive)) {
			alert(test);
			divActive.setAttribute('class', 'player2');
		}
	}

	game.addEventListener('click', function(e) {
        var divActive = document.getElementById(e.target.id);
        if (!isClicked(divActive)) {
            divActive.setAttribute('class', 'player1');
            computer();
            check();
        }
    });
    
    reset.addEventListener('click', function() {
        reinit();
    });
	
})();