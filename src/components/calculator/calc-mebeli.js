function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(document.querySelector("#appMebel")) {

var app = new Vue({
  el: '#appMebel',
  data: {
  	gaz: 0,
  	mover: 0,
  	furnitureman: 0,
  	packman: 0,
  	supervaizer: 0,
  	gazsum: Number,
  	moversum: Number,
  	furnituremansum: Number,
  	packmansum: Number,
  	supervaizersum: Number,
  	allsum: Number
  },

  created: function () {
  	this.calculateTheCost();
  },

  methods: {
  

    calculateTheCost() {
    	this.gazsum = this.gaz * 2500;
	  	this.moversum = this.mover * 3000;
	  	this.furnituremansum = this.furnitureman * 2000;
	  	this.packmansum = this.packman * 1500;
	  	this.supervaizersum = this.supervaizer * 4000;
	  	this.allsum = this.gazsum + this.moversum + this.furnituremansum + this.packmansum + this.supervaizersum;
    }

    
  }
});

}

