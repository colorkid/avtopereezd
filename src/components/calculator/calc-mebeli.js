if(document.querySelector("#appMebel")) {

var app = new Vue({
  el: '#appMebel',
  data: {
  	gaz: 1,
  	mover: 1,
  	furnitureman: 0,
  	packman: 0,
  	supervaizer: 1,
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
	  	this.supervaizersum = this.supervaizer * 2000;
	  	this.allsum = this.gazsum + this.moversum + this.furnituremansum + this.packmansum + this.supervaizersum;

      if (this.allsum < 7500) {
        this.allsum = 7500;
      }
    }
  },

  filters: {
    discharges: function (value) {
      return String(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    }
  }
});

}

