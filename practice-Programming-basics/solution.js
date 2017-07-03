// BEGIN (write your solution here)
const Time = (mins) => {
  let resstr = '';
  let hours = 0;
  let ResMins = 0;
  if (mins>=60){
    hours = Math.floor(mins/60);
  }
  else {
    ResMins = mins;
  }
  ResMins = mins - hours * 60;
  resstr =CheckStr(hours) + ':' + CheckStr(ResMins);
  return resstr;
}
const CheckStr = (str) => {
  const ch = String(str);
  if (ch.length<2){
    return '0' + ch;
  }
  return ch;
}
export default Time;
// END