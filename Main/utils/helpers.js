module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },

  multiply: (a, b) => {
    if (!isNumber(a)) {
      throw new TypeError('expected the first argument to be a number');
    }
    if (!isNumber(b)) {
      throw new TypeError('expected the second argument to be a number');
    }
    return Number(a) * Number(b);
  },
  
  
  

  
};
