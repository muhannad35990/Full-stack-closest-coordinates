"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const withinRangeRouter_1 = __importDefault(require("./routes/withinRangeRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(`${__dirname}/public`));
///ROUTES
app.use("/api/v1/within", withinRangeRouter_1.default);
app.listen(3002, () => {
    console.log("server is running on port 3002");
});
//# sourceMappingURL=index.js.map