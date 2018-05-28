
const R2D2 = {
	E: Math.exp(1),
	PI: Math.PI,


	add(a, b) {
		if(isNaN (+a) || isNaN(+b) || typeof(a) === 'string' || typeof(b) === 'string' || a,b === undefined ) {
			return 'введите число'
		}
		return a + b;
	},
	max(a, b) {
		if(isNaN (a) || isNaN(b) || typeof(a) === 'string' || typeof(b) === 'string' || a,b === undefined ) {
			return 'введите число';
		} else {
			if(a>b){
				return a;
			}
			else if (a<b){
				return b;
			}
		}
		
	},
	min(a, b) {
		if(isNaN (a) || isNaN(b) || typeof(a) === 'string' || typeof(b) === 'string' || a,b === undefined ) {
			return 'введите число';
		} else {
			if(a<b){
				return a;
			}
			else if (a>b){
				return b;
			}
		}
		
	},
	pow(a, b){
		if(isNaN (a) || isNaN(b) || typeof(a) === 'string' || typeof(b) === 'string' || a,b === undefined ) {
			return 'введите число';
		} else {
			var result = 1;
			for (var i=1; i<=b; i++){
				result = result*a;
			}
			return result;
		}
		
	},
	len(a){
		if(isNaN (a) || typeof(a) === 'string' || a === undefined)  {
			return 'введите число';
		} else {
			return a * 3.14;
		}

		
	},
	 disk(a,b,c) {
	 	if(isNaN (a) || isNaN(b) || isNaN(c) || typeof(a) === 'string' || typeof(b) === 'string' || typeof(c) === 'string' || a,b,c === undefined) {
			return 'введите число';
		} else {
			d=b*b-4*a*c;
	    	return d;
		}	
	    
	}
	
	
}