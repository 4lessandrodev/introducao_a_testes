module.exports = {
  
  somar(...params) {
    return params.reduce((total, num) => {
      return parseFloat(total) + parseFloat(num);
    },0);
  },

  multiplicar(n1, n2){
    return n1 * n2;
  }

};