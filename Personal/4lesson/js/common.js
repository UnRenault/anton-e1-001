const PC = {
	colour: 'white',
	isPowerOn: true,
	isUsed: true,
	components: {
		processor: true,
		ram: false,

	}
}


function Room(proektor, table, humans) {
	this.wall = { 
		count: 4,
		colour: '#fff'
	};
	this.window = {
		count : 2,
		colram : '#654321',
		purity : 'clean'
	};
	this.lumen = {
		count : 3,
		lumcol : '#fff',
		lumon : 'on'
	};
	this.proektor = proektor;
	this.table = table;
	this.humans = humans;
}



const room = {
	wall: 4,
	wallColor: '#fff',
	window: 2,
	windowColor: '#654321',
	windowcleaning: 'clean',
	lumen: 3,
	lumenColor: '#fff',
	lumenLight: 'on',
	proektor: 'on',
	table: 1,
	humans: 4,
}


function R2D2

const r2d2 = {
	add(a, b) {
		if(isNaN (a) || isNaN(b)) {
			return 'введите число'
		}
		return +a + +b;
	},
	max(a, b) {
		if(isNaN (a) || isNaN(b)) {
			return 'введите число'
		}
		if(a>b){
			return a
		}
		else if (a<b){
			return b
		}
	},
	power(int a, int b){
		int result = 1;
		for (int i=1; i<=b; i++){
			result = result*a;
		}
		return result;
	},
	function begin() {
	       a=document.getElementById('a').value;
	       b=document.getElementById('b').value;
	       c=document.getElementById('c').value;
	       d=b*b-4*a*c;
	       if (d<0)
	          {
	             document.getElementById('false').style.display="inline-block";
	          }
	          else
	          if (d===0)
	             {document.getElementById('X1').value=-b/(2*a);}
	             else
	             {
	                document.getElementById('X1').value=(-b+Math.sqrt(d))/(2*a);
	                document.getElementById('X2').value=(-b-Math.sqrt(d))/(2*a);
	             }
	},
	function clr()     
	{
	       document.getElementById('false').style.display=""
	},
	
}

