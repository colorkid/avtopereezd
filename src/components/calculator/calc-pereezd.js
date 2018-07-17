if(document.querySelector("#appPereezd")) {

var app = new Vue({
  el: '#appPereezd',
  data: {
    result: 0,
    typeofrealestate: 950,
    pack: false,
    valuerange: 10,
  },

  created: function () {
  	this.calculateTheCost();
  },

  methods: {
    calculateTheCost() {
      this.result = this.typeofrealestate * this.valuerange * (this.pack === false ? 1 : 1.43);
    }
  },

  filters: {
    discharges: function (value) {
      return String(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    }
  }
});

}