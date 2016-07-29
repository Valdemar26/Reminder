const getFormattedTime = (timeArr) => {
  let year = timeArr[0];
  let month = timeArr[1];
  let day = timeArr[2];
  let hour = timeArr[3];
  let min = timeArr[4];

  let ms = new Date(year, month, day, hour, min).getTime() - Date.now();
  return ms
}

module.exports = getFormattedTime;