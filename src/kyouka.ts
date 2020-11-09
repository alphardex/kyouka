import arrayToCSV from "./arrayToCSV";
import attempt from "./attempt";
import average from "./average";
import compact from "./compact";
import compose from "./compose";
import CSVToArray from "./CSVToArray";
import CSVToJSON from "./CSVToJSON";
import curry from "./curry";
import debounce from "./debounce";
import deepClone from "./deepClone";
import disableTouchMove from "./disableTouchMove";
import distance from "./distance";
import formatDuration from "./formatDuration";
import getCenterPointPos from "./getCenterPointPos";
import getMousePos from "./getMousePos";
import { getScrollPosition, getScrollPositionAsVw } from "./getScrollPosition";
import getTimeDeltaAsSeconds from "./getTimeDeltaAsSeconds";
import getTimeFromDate from "./getTimeFromDate";
import getURLParameters from "./getURLParameters";
import initialize2DArray from "./initialize2DArray";
import initializeArrayWithValues from "./initializeArrayWithValues";
import intersection from "./intersection";
import iosInputScrollFix from "./iosInputScrollFix";
import isBottomVisible from "./isBottomVisible";
import isEmpty from "./isEmpty";
import isPhoneNumber from "./isPhoneNumber";
import JSONToCSV from "./JSONToCSV";
import mapKeys from "./mapKeys";
import mapObject from "./mapObject";
import mapValues from "./mapValues";
import mask from "./mask";
import memorize from "./memorize";
import omit from "./omit";
import partial from "./partial";
import pick from "./pick";
import pluck from "./pluck";
import previewImage from "./previewImage";
import promisify from "./promisify";
import px2vw from "./px2vw";
import randomIntArrayInRange from "./randomIntArrayInRange";
import randomIntegerInRange from "./randomIntegerInRange";
import randomNumberInRange from "./randomNumberInRange";
import range from "./range";
import requestInterval from "./requestInterval";
import sample from "./sample";
import shuffle from "./shuffle";
import sleep from "./sleep";
import sum from "./sum";
import throttle from "./throttle";
import union from "./union";
import uniq from "./uniq";
import unzip from "./unzip";
import vw2px from "./vw2px";
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
};
export default kyoka;
