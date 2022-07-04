const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 4000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
