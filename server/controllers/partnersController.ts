import fs from "fs";
import arePointsNear from "../utils/arePointsNear";

const getPartnerswithIn = async (req: any, res: any, next: any) => {
  let pointsWithin: any = [];
  if (req.params.distance) {
    const allpartners = JSON.parse(
      fs.readFileSync(`${__dirname}/../data/partners.json`, "utf-8")
    );
    const centeralpoint = { lat: 51.5144636, lng: -0.142571 };
    allpartners.map((partner: any, index: any) => {
      let offices: any = [];
      partner.offices.map((office: any, i: number) => {
        const [lat, lng] = office.coordinates.split(",");
        const checkpoint = { lng: parseFloat(lng), lat: parseFloat(lat) };

        const { isNear, distance } = arePointsNear(
          checkpoint,
          centeralpoint,
          req.params.distance
        );
        if (isNear) {
          offices.push({ ...office, distance: distance });
        }
      });
      if (offices.length > 0) {
        pointsWithin.push({
          ...partner,
          offices: offices,
        });
      }
    });
    res.status(200).json({
      status: "success",
      data: { pointsWithin },
    });
  }
};

export default getPartnerswithIn;
