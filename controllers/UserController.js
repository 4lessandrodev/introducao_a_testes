module.exports = {
  
  async somar(numbers) {
    try {
      if (typeof (numbers) != "object") {
        throw new Error('Informe um array de números');
      }
      return numbers.reduce((total, num) => {
        if (!isNaN(num)) {
          total = parseFloat(total) + parseFloat(num);
        }
        return total;
      }, 0);
    }catch (err) {
      return err.message;
    }
  },

  multiplicar(n1, n2){
    return n1 * n2;
  }

};