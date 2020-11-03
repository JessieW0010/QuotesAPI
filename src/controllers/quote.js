const { customerDiscountsTable } = require('../models/tableNames.js');

class QuoteController {
  static flatFee = 2000;

  static getItemsLength(items) {
    return items.length
  }

  static getTotalItemsVolume(items) {
    let sumVol = 0;
    for (let item of items) {
      sumVol += item.length * item.height * item.width;
    }
    return sumVol;
  }

  static getTotalItemsValue(items) {
    return items.reduce((acc, curr) => parseInt(acc.value) + parseInt(curr.value));
  }
  

   /**
   * @description - returns a quote for ANY customer
   * @param { object } req - request object
   * @param { object } res - response object
   * @returns { number }
   */
  static async quote(req, res) {
    const { items } = req.body;
    const _this = QuoteController;
    return res.status(200).json({
      price: _this.getItemsLength(items) * _this.flatFee
    })
  }
}

module.exports = QuoteController;
