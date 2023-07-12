const menu = {
	_menu: '',
	_price: '',
	
	set mealChecker(mealToCheck) {
	  if (typeof mealToCheck === 'string') {
		this._menu = mealToCheck;
	  }
	},
	
	set priceChecker(priceToCheck) {
	  if (typeof priceToCheck === 'number') {
		this._price = priceToCheck;
	  }
	},
	
	get todaysSpecial() {
	  if (this._menu && this._price) {
		return `Today's Special is ${this._menu} for \$${this._price}` 
	  } else {
		return 'Meal or price was not set correctly!'
	  }	
	}
  };
  
  menu.mealChecker = 'protein';
  console.log(menu._menu);
  menu.priceChecker = 10.99;
  console.log(menu._price)
  console.log(menu.todaysSpecial);
  