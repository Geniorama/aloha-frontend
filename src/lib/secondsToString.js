export default function secondsToString(seconds) {
  var minute = Math.floor((seconds / 60) % 60);
  minute = minute < 10 ? "0" + minute : minute;
  var second = Math.floor(seconds % 60);
  second = second < 10 ? "0" + second : second;
  return minute + ":" + second;
}
