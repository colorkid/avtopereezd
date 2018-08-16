if(document.querySelector("#appPereezd")) {

function percent(number, percent) {
  var number_percent = number / 100 * percent; 
  return (Number(number_percent) - Number(number)) * (-1);
}

var app = new Vue({
  el: '#appPereezd',
  data: {
    result: 0,
    typeofrealestate: 950,
    pack: false,
    valuerange: 20,
  },

  created: function () {
  	this.calculateTheCost();
  },

  methods: {
    calculateTheCost() {
      this.result = this.typeofrealestate * this.valuerange * (this.pack === false ? 1 : 1.43);

      if (this.valuerange > 200 && this.valuerange <= 500) {
        this.result = percent(this.result, 5);
      } else if (this.valuerange > 500) {
        this.result = percent(this.result, 10);
      }

      if (this.result < 20000) this.result = 20000;
    }
  },

  filters: {
    discharges: function (value) {
      return String(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    }
  }
});

}