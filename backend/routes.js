const routes = require("express").Router();
const mercadolibreService = require("./services/mercadolibreService.ts");

routes.get("/", async (_req, res) => {
  const response = await mercadolibreService.getUser().catch((error) => {
    res.status(404).json(error.message);
  });
  res.json(response);
});

routes.get("/restrictions/:userId", async (req, res) => {
  const response = await mercadolibreService
    .getUserRestrictions(req.params.userId)
    .catch((error) => {
      res.status(404).json(error.message);
    });
  res.json(response);
});

routes.get("/purchases/:userId/:limit/:page", async (req, res) => {
  const { userId, limit, page } = req.params;
  const response = await mercadolibreService
    .getUserPurchases(userId, limit, page)
    .catch((error) => {
      res.status(404).json(error.message);
    });
  res.json(response);
});

routes.get("/level/:levelId", async (req, res) => {
  const response = await mercadolibreService
    .getLevel(req.params.levelId)
    .catch((error) => {
      res.status(404).json(error.message);
    });
  res.json(response);
});

routes.get("/shipment/:shipmentId", async (req, res) => {
  const response = await mercadolibreService
    .getShipment(req.params.shipmentId)
    .catch((error) => {
      res.status(404).json(error.message);
    });
  res.json(response);
});

routes.get("/payment/:paymentId", async (req, res) => {
  const response = await mercadolibreService
    .getPayment(req.params.paymentId)
    .catch((error) => {
      res.status(404).json(error.message);
    });
  res.send(response);
});

module.exports = routes;
