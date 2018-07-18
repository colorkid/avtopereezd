if(document.querySelector("#appTrash")) {

var app = new Vue({
  el: '#appTrash',
  data: {
    gaz: 1,
    zil: 0,
    kamaz: 0,
    packman: 0,
    doublepackman: 0,
    gazsum: Number,
    zilsum: Number,
    kamazsum: Number,
    packmansum: Number,
    doublepackmansum: Number,
    allsum: Number
  },

  created: function () {
    this.calculateTheCost();
  },

  methods: {
    calculateTheCost() {
      this.gazsum = this.gaz * 10000;
      this.zilsum = this.zil * 18000;
      this.kamazsum = this.kamaz * 35000;
      this.packmansum = this.packman * 3000;
      this.doublepackmansum = this.doublepackman * 6000;
      this.allsum = this.gazsum + this.zilsum + this.kamazsum + this.packmansum + this.doublepackmansum;

      if (this.allsum < 10000) {
        this.allsum = 10000;
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
