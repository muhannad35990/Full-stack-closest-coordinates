const arePointsNear = (checkpoint: any, centralpoint: any, km: number) => {
  const distance = getDistanceFromLatLonInKm(
    centralpoint.lat,
    centralpoint.lng,
    checkpoint.lat,
    checkpoint.lng
  );

  return { isNear: distance <= km, distance };
};

function getDistanceFromLatLonInKm(lat1: any, lng1: any, lat2: any, lng2: any) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lng2 - lng1);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: any) {
  return deg * (Math.PI / 180);
}

export default arePointsNear;
