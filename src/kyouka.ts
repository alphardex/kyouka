import addHoursToDate from "./addHoursToDate";
import addMinutesToDate from "./addMinutesToDate";
import addSecondsToDate from "./addSecondsToDate";
import animateNumber from "./animateNumber";
import arrayToCSV from "./arrayToCSV";
import attempt from "./attempt";
import average from "./average";
import chunk from "./chunk";
import compact from "./compact";
import compose from "./compose";
import copyToClipboard from "./copyToClipboard";
import CSVToArray from "./CSVToArray";
import CSVToJSON from "./CSVToJSON";
import curry from "./curry";
import debounce from "./debounce";
import deepClone from "./deepClone";
import deg2rad from "./deg2rad";
import detectDeviceType from "./detectDeviceType";
import disableTouchMove from "./disableTouchMove";
import distance from "./distance";
import equals from "./equals";
import factorial from "./factorial";
import formatDuration from "./formatDuration";
import fromTimestamp from "./fromTimestamp";
import getCenterPointPos from "./getCenterPointPos";
import getMousePos from "./getMousePos";
import { getScrollPosition, getScrollPositionAsVw } from "./getScrollPosition";
import getTimeDeltaAsSeconds from "./getTimeDeltaAsSeconds";
import getTimeFromDate from "./getTimeFromDate";
import getTimestamp from "./getTimestamp";
import getURLParameters from "./getURLParameters";
import head from "./head";
import includesAll from "./includesAll";
import includesAny from "./includesAny";
import initialize2DArray from "./initialize2DArray";
import initializeArrayWithValues from "./initializeArrayWithValues";
import intersection from "./intersection";
import iosInputScrollFix from "./iosInputScrollFix";
import isBottomVisible from "./isBottomVisible";
import isEmpty from "./isEmpty";
import isEven from "./isEven";
import isOdd from "./isOdd";
import isPhoneNumber from "./isPhoneNumber";
import isUrl from "./isUrl";
import JSONToCSV from "./JSONToCSV";
import last from "./last";
import loadImageAsBase64URL from "./loadImageAsBase64URL";
import loadVideoAsBlob from "./loadVideoAsBlob";
import mapKeys from "./mapKeys";
import mapObject from "./mapObject";
import mapValues from "./mapValues";
import mask from "./mask";
import maxN from "./maxN";
import memorize from "./memorize";
import minN from "./minN";
import objectMap from "./objectMap";
import objectToQueryString from "./objectToQueryString";
import omit from "./omit";
import padNumber from "./padNumber";
import partial from "./partial";
import pick from "./pick";
import pluck from "./pluck";
import previewImage from "./previewImage";
import promisify from "./promisify";
import px2vh from "./px2vh";
import px2vw from "./px2vw";
import rad2deg from "./rad2deg";
import randomHexColorCode from "./randomHexColorCode";
import randomIntArrayInRange from "./randomIntArrayInRange";
import randomIntegerInRange from "./randomIntegerInRange";
import randomNumberInRange from "./randomNumberInRange";
import range from "./range";
import requestInterval from "./requestInterval";
import reverseString from "./reverseString";
import sample from "./sample";
import sampleSize from "./sampleSize";
import shuffle from "./shuffle";
import sleep from "./sleep";
import orderBy from "./orderBy";
import sum from "./sum";
import sumPower from "./sumPower";
import throttle from "./throttle";
import timeTaken from "./timeTaken";
import union from "./union";
import uniq from "./uniq";
import unzip from "./unzip";
import vh2px from "./vh2px";
import vw2px from "./vw2px";
import yesNo from "./yesNo";
import zip from "./zip";

const kyoka = {
  disableTouchMove,
  getCenterPointPos,
  getMousePos,
  getTimeFromDate,
  randomIntArrayInRange,
  randomNumberInRange,
  randomIntegerInRange,
  requestInterval,
  sample,
  shuffle,
  sleep,
  vw2px,
  sum,
  formatDuration,
  getTimeDeltaAsSeconds,
  isPhoneNumber,
  isBottomVisible,
  getURLParameters,
  average,
  previewImage,
  getScrollPosition,
  getScrollPositionAsVw,
  px2vw,
  initialize2DArray,
  deepClone,
  initializeArrayWithValues,
  CSVToArray,
  arrayToCSV,
  JSONToCSV,
  CSVToJSON,
  uniq,
  omit,
  pick,
  iosInputScrollFix,
  mapObject,
  mapKeys,
  mapValues,
  isEmpty,
  debounce,
  throttle,
  partial,
  compose,
  curry,
  memorize,
  attempt,
  compact,
  promisify,
  distance,
  zip,
  range,
  unzip,
  union,
  pluck,
  mask,
  intersection,
  animateNumber,
  detectDeviceType,
  deg2rad,
  factorial,
  equals,
  includesAll,
  includesAny,
  rad2deg,
  randomHexColorCode,
  timeTaken,
  sumPower,
  reverseString,
  vh2px,
  px2vh,
  loadImageAsBase64URL,
  sampleSize,
  fromTimestamp,
  getTimestamp,
  isOdd,
  isEven,
  copyToClipboard,
  yesNo,
  loadVideoAsBlob,
  maxN,
  minN,
  padNumber,
  addHoursToDate,
  addMinutesToDate,
  addSecondsToDate,
  chunk,
  isUrl,
  objectMap,
  orderBy,
  head,
  last,
  objectToQueryString,
};
export default kyoka;
