function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var app = new Vue({
  el: '#app',
  data: {
    dataCitys: [
		["-",58,143,134,129,143,85,85,85,76,76,89,58,107,58,63,63,80,94],
		[58,"-",147,134,129,134,54,54,54,54,54,54,40,98,58,71,71,85,147],
		[165,161,"-",85,85,98,188,188,188,196,196,188,179,223,196,205,205,214,196],
		[165,161,85,"-",80,85,188,188,188,196,196,188,179,223,196,205,205,214,196],
		[94,94,85,85,"-",85,98,98,98,112,112,98,94,116,188,94,94,94,107],
		[147,143,98,85,76,"-",165,165,165,170,170,165,161,201,179,170,170,174,161],
		[89,67,196,188,179,170,"-",85,85,98,98,85,85,129,85,129,129,138,134],
		[89,67,196,188,179,170,85,"-",85,98,98,85,85,129,85,129,129,138,134],
		[89,67,196,188,179,170,85,85,"-",98,98,85,85,129,85,129,129,138,134],
		[98,76,165,161,156,152,98,98,98,"-",67,98,121,156,125,129,129,138,116],
		[98,76,165,161,156,152,98,98,98,67,"-",98,121,156,125,129,129,138,116],
		[89,67,210,201,188,179,85,85,85,98,98,"-",85,129,85,129,129,138,125],
		[54,49,134,129,121,121,71,71,71,80,80,71,"-",71,71,85,85,94,85],
		[112,103,147,147,147,147,134,134,134,147,147,134,107,"-",103,152,152,161,147],
		[67,67,147,143,138,134,98,98,98,107,107,98,67,107,"-",116,116,125,98],
		[85,116,138,138,129,129,156,156,156,125,125,156,121,161,125,"-",89,89,121],
		[85,116,138,138,129,129,156,156,156,125,125,156,121,161,125,89,"-",89,121],
		[98,125,138,138,129,129,161,161,161,134,134,161,125,170,134,89,89,"-",125],
		[67,94,143,138,138,134,125,125,125,103,103,125,98,143,103,112,112,116,"-"]
	],
	from: 0,
	to: 1,
	weight: 1,
	length: 0,
	width: 0,
	height: 0,
	volumeWeight: 0,
	result: true,
	insurance: 0,
	sumofinsurance: 0,
	numberOfPackages: 1
  },

  created: function () {
  	this.calculateTheCost();
  },

  methods: {
  	calculateVolumeWeight() {
  		this.volumeWeight = (this.length * this.width * this.height) / 6000;
  	},

    calculateTheCost() {
    	this.calculateInsurance();
    	this.calculateVolumeWeight();

    	let value = (this.dataCitys[this.from][this.to] * (this.weight > this.volumeWeight ? this.weight : this.volumeWeight)) * this.numberOfPackages;
    	
    	if(isNumeric(value) === true) {
    		this.result = value;
    	} else {
    		this.result = "Одинаковый город";
    	}
    },

    calculateInsurance() {
    	this.sumofinsurance = Math.round((this.insurance * 0.35 / 100) * 100) / 100;
    }
  }
});