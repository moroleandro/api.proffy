"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConnectionsController_1 = __importDefault(require("../controllers/ConnectionsController"));
const connectionRouter = express_1.default.Router();
const connectionsControllers = new ConnectionsController_1.default();
connectionRouter.post('/', connectionsControllers.create);
connectionRouter.get('/', connectionsControllers.index);
exports.default = connectionRouter;
