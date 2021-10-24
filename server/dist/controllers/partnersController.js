"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const arePointsNear_1 = __importDefault(require("../utils/arePointsNear"));
var _ = require("lodash");
const getPartnerswithIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let pointsWithin = [];
    if (req.params.distance) {
        const allpartners = JSON.parse(fs_1.default.readFileSync(`${__dirname}/../data/partners.json`, "utf-8"));
        const centeralpoint = { lat: 51.5144636, lng: -0.142571 };
        allpartners.map((partner, index) => {
            let offices = [];
            partner.offices.map((office, i) => {
                const [lat, lng] = office.coordinates.split(",");
                const checkpoint = { lng: parseFloat(lng), lat: parseFloat(lat) };
                const { isNear, distance } = (0, arePointsNear_1.default)(checkpoint, centeralpoint, req.params.distance);
                if (isNear) {
                    offices.push(Object.assign(Object.assign({}, office), { distance: distance }));
                }
            });
            if (offices.length > 0) {
                pointsWithin.push(Object.assign(Object.assign({}, partner), { offices: offices }));
            }
        });
        var orderdPoints = _.orderBy(pointsWithin, ["organization"], ["asc"]);
        pointsWithin = orderdPoints;
        res.status(200).json({
            status: "success",
            data: { pointsWithin },
        });
    }
});
exports.default = getPartnerswithIn;
//# sourceMappingURL=partnersController.js.map