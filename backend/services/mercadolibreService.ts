const MockUtils = require("./mocks");

class MercadolibreService {
  constructor() {}
  async getUser() {
    const response = await MockUtils.getUser();
    return response;
  }

  async getUserRestrictions(userId) {
    const response = await MockUtils.getUserRestrictions(userId);
    return response;
  }

  async getUserPurchases(userId, limit = 10, page = 1) {
    const purchases = await MockUtils.getUserPurchases(userId);
    const offset = (page - 1) * limit;
    if (page < 1 || offset >= purchases.length) {
      const error = new Error("Bad request");
      // error.status = 400;
      throw error;
    }
    return {
      total: purchases.length,
      offset,
      limit,
      data: purchases.slice(offset, offset + limit),
    };
  }

  async getLevel(levelId) {
    const response = await MockUtils.getLevel(levelId);
    return response;
  }

  async getShipment(shipmentId) {
    const response = MockUtils.getShipment(shipmentId);
    return response;
  }

  async getPayment(paymentId) {
    const response = await MockUtils.getPayment(paymentId);
    return response;
  }
}

module.exports = new MercadolibreService();
