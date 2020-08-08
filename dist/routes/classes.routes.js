"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClassesController_1 = __importDefault(require("../controllers/ClassesController"));
const classesRouter = express_1.default.Router();
const classesControllers = new ClassesController_1.default();
classesRouter.post('/', classesControllers.create);
classesRouter.get('/', classesControllers.index);
exports.default = classesRouter;
