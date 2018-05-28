const i = [];

function additem(thing) {
	if (typeof thing === "string") {
		i.push(thing);
	} else {
		console.log('неверный ввод')
	}

}






const list = {
  items: [],
  addItem(thing) {
    if (typeof thing === 'string') {
      this.items.push(thing);
      console.log(`Ты добавил ${thing}.`);
    } else if (thing === undefined) {
      console.log('Введите значение.');
    } else {
      console.log('Введите корректное значение или системная ошибка');
    }
  },
  deleteThing(thing) {
    // code...
  }, 
  getThings() {
    return this.items;
  }
}

list.addItem('potato');


/// const someThing = ['a', 'b', 'c'];

// const cb = (element, index) => {
//   console.log(element + index);
// }

// someThing.forEach(cb);

const someThing = ['a', 'b', 'c'];

someThing.forEach(function(element, index, array) {
  console.log(element + index);
});



const todo = [];

function addThing(title, desc, dueDate) {
	todo.push();
	}
function getThings(date) {
	if (date === dueDate){
		return 
		// перебирающий метод filter
	}
	else {
		console.log('Введенной даты не существует')
	}
	function deleteThing(titl) {
		if (titl === title) {
			// forich and splice
		}
	}
}

}




const items = [];

const addItem = (thing) => {
  if (typeof thing === 'string') {
    items.push(thing);
    console.log(`Ты добавил ${thing}.`);
  } else if (thing === undefined) {
    console.log('Введите значение');
  } else {
    console.log('Введите корректное значение или системная ошибка');
  }
}

const deleteItem = (thing) => {
  if (typeof thing !== 'string') {
    return 'Введите корректное значение или системная ошибка';
  } else if (thing === undefined) {
    return 'Введите значение';
  }

  items.forEach(function(element, i) {
    if (element === thing) {
      items.splice(i, 1);
      console.log(`Ты удалил ${element}.`);
    }
  });
}

addItem('onion');
addItem('tomato');
addItem('pickle');