import arrayToCSV from './arrayToCSV';
import average from './average';
import calcDistance from "./calcDistance";
import CSVToArray from './CSVToArray';
import CSVToJSON from './CSVToJSON';
import debounce from './debounce';
import deepClone from './deepClone';
import disableTouchMove from "./disableTouchMove";
import formatDuration from './formatDuration';
import getCenterPointPos from "./getCenterPointPos";
import getMousePos from "./getMousePos";
import { getScrollPosition, getScrollPositionAsVw } from './getScrollPosition';
import getTimeDeltaAsSeconds from './getTimeDeltaAsSeconds';
import getTimeFromDate from "./getTimeFromDate";
import getURLParameters from './getURLParameters';
import initialize2DArray from './initialize2DArray';
import initializeArrayWithValues from './initializeArrayWithValues';
import iosInputScrollFix from './iosInputScrollFix';
import isBottomVisible from './isBottomVisible';
import isEmpty from './isEmpty';
import isPhoneNumber from './isPhoneNumber';
import JSONToCSV from './JSONToCSV';
import mapKeys from './mapKeys';
import mapObject from './mapObject';
import mapValues from './mapValues';
import omit from './omit';
import pick from './pick';
import px2vw from './px2vw';
import previewImage from './previewImage';
import randomIntArrayInRange from "./randomIntArrayInRange";
import randomIntegerInRange from "./randomIntegerInRange";
import randomNumberInRange from "./randomNumberInRange";
import requestInterval from "./requestInterval";
import sample from "./sample";
import shuffle from "./shuffle";
import sleep from "./sleep";
import sum from './sum';
import throttle from './throttle';
import uniq from './uniq';
import vw2px from "./vw2px";

const kyoka = {
    calcDistance,
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
    throttle
};
export default kyoka;
