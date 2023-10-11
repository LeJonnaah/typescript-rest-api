import { createCostumers } from "../controllers/createCostumers";
import { getCostumers } from "../controllers/getCostumers";
import { getCostumer } from "../controllers/getCostumer";

const express = require('express');

const router = express.Router();

router.get('/:id', getCostumer);
router.get('/', getCostumers);
router.post('/', createCostumers);

module.exports = router;
