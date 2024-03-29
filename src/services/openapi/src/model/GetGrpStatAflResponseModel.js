/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetGrpStatAflResponseModel model module.
 * @module model/GetGrpStatAflResponseModel
 * @version 0.1.0
 */
class GetGrpStatAflResponseModel {
    /**
     * Constructs a new <code>GetGrpStatAflResponseModel</code>.
     * Base class for grouped statistics
     * @alias module:model/GetGrpStatAflResponseModel
     * @param bitmapCvg {Number} 
     * @param corpusCount {Number} 
     * @param corpusFavored {Number} 
     * @param corpusFound {Number} 
     * @param corpusVariable {Number} 
     * @param cyclesDone {Number} 
     * @param cyclesWoFinds {Number} 
     * @param date {String} 
     * @param execsDone {Number} 
     * @param execsPerSec {Number} 
     * @param knownCrashes {Number} 
     * @param peakRssMb {Number} 
     * @param slowestExecMs {Number} 
     * @param stability {Number} 
     * @param uniqueCrashes {Number} 
     * @param workTime {Number} 
     */
    constructor(bitmapCvg, corpusCount, corpusFavored, corpusFound, corpusVariable, cyclesDone, cyclesWoFinds, date, execsDone, execsPerSec, knownCrashes, peakRssMb, slowestExecMs, stability, uniqueCrashes, workTime) { 
        
        GetGrpStatAflResponseModel.initialize(this, bitmapCvg, corpusCount, corpusFavored, corpusFound, corpusVariable, cyclesDone, cyclesWoFinds, date, execsDone, execsPerSec, knownCrashes, peakRssMb, slowestExecMs, stability, uniqueCrashes, workTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bitmapCvg, corpusCount, corpusFavored, corpusFound, corpusVariable, cyclesDone, cyclesWoFinds, date, execsDone, execsPerSec, knownCrashes, peakRssMb, slowestExecMs, stability, uniqueCrashes, workTime) { 
        obj['bitmap_cvg'] = bitmapCvg;
        obj['corpus_count'] = corpusCount;
        obj['corpus_favored'] = corpusFavored;
        obj['corpus_found'] = corpusFound;
        obj['corpus_variable'] = corpusVariable;
        obj['cycles_done'] = cyclesDone;
        obj['cycles_wo_finds'] = cyclesWoFinds;
        obj['date'] = date;
        obj['execs_done'] = execsDone;
        obj['execs_per_sec'] = execsPerSec;
        obj['known_crashes'] = knownCrashes;
        obj['peak_rss_mb'] = peakRssMb;
        obj['slowest_exec_ms'] = slowestExecMs;
        obj['stability'] = stability;
        obj['unique_crashes'] = uniqueCrashes;
        obj['work_time'] = workTime;
    }

    /**
     * Constructs a <code>GetGrpStatAflResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGrpStatAflResponseModel} obj Optional instance to populate.
     * @return {module:model/GetGrpStatAflResponseModel} The populated <code>GetGrpStatAflResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGrpStatAflResponseModel();

            if (data.hasOwnProperty('bitmap_cvg')) {
                obj['bitmap_cvg'] = ApiClient.convertToType(data['bitmap_cvg'], 'Number');
            }
            if (data.hasOwnProperty('corpus_count')) {
                obj['corpus_count'] = ApiClient.convertToType(data['corpus_count'], 'Number');
            }
            if (data.hasOwnProperty('corpus_favored')) {
                obj['corpus_favored'] = ApiClient.convertToType(data['corpus_favored'], 'Number');
            }
            if (data.hasOwnProperty('corpus_found')) {
                obj['corpus_found'] = ApiClient.convertToType(data['corpus_found'], 'Number');
            }
            if (data.hasOwnProperty('corpus_variable')) {
                obj['corpus_variable'] = ApiClient.convertToType(data['corpus_variable'], 'Number');
            }
            if (data.hasOwnProperty('cycles_done')) {
                obj['cycles_done'] = ApiClient.convertToType(data['cycles_done'], 'Number');
            }
            if (data.hasOwnProperty('cycles_wo_finds')) {
                obj['cycles_wo_finds'] = ApiClient.convertToType(data['cycles_wo_finds'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('execs_done')) {
                obj['execs_done'] = ApiClient.convertToType(data['execs_done'], 'Number');
            }
            if (data.hasOwnProperty('execs_per_sec')) {
                obj['execs_per_sec'] = ApiClient.convertToType(data['execs_per_sec'], 'Number');
            }
            if (data.hasOwnProperty('known_crashes')) {
                obj['known_crashes'] = ApiClient.convertToType(data['known_crashes'], 'Number');
            }
            if (data.hasOwnProperty('peak_rss_mb')) {
                obj['peak_rss_mb'] = ApiClient.convertToType(data['peak_rss_mb'], 'Number');
            }
            if (data.hasOwnProperty('slowest_exec_ms')) {
                obj['slowest_exec_ms'] = ApiClient.convertToType(data['slowest_exec_ms'], 'Number');
            }
            if (data.hasOwnProperty('stability')) {
                obj['stability'] = ApiClient.convertToType(data['stability'], 'Number');
            }
            if (data.hasOwnProperty('unique_crashes')) {
                obj['unique_crashes'] = ApiClient.convertToType(data['unique_crashes'], 'Number');
            }
            if (data.hasOwnProperty('work_time')) {
                obj['work_time'] = ApiClient.convertToType(data['work_time'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} bitmap_cvg
 */
GetGrpStatAflResponseModel.prototype['bitmap_cvg'] = undefined;

/**
 * @member {Number} corpus_count
 */
GetGrpStatAflResponseModel.prototype['corpus_count'] = undefined;

/**
 * @member {Number} corpus_favored
 */
GetGrpStatAflResponseModel.prototype['corpus_favored'] = undefined;

/**
 * @member {Number} corpus_found
 */
GetGrpStatAflResponseModel.prototype['corpus_found'] = undefined;

/**
 * @member {Number} corpus_variable
 */
GetGrpStatAflResponseModel.prototype['corpus_variable'] = undefined;

/**
 * @member {Number} cycles_done
 */
GetGrpStatAflResponseModel.prototype['cycles_done'] = undefined;

/**
 * @member {Number} cycles_wo_finds
 */
GetGrpStatAflResponseModel.prototype['cycles_wo_finds'] = undefined;

/**
 * @member {String} date
 */
GetGrpStatAflResponseModel.prototype['date'] = undefined;

/**
 * @member {Number} execs_done
 */
GetGrpStatAflResponseModel.prototype['execs_done'] = undefined;

/**
 * @member {Number} execs_per_sec
 */
GetGrpStatAflResponseModel.prototype['execs_per_sec'] = undefined;

/**
 * @member {Number} known_crashes
 */
GetGrpStatAflResponseModel.prototype['known_crashes'] = undefined;

/**
 * @member {Number} peak_rss_mb
 */
GetGrpStatAflResponseModel.prototype['peak_rss_mb'] = undefined;

/**
 * @member {Number} slowest_exec_ms
 */
GetGrpStatAflResponseModel.prototype['slowest_exec_ms'] = undefined;

/**
 * @member {Number} stability
 */
GetGrpStatAflResponseModel.prototype['stability'] = undefined;

/**
 * @member {Number} unique_crashes
 */
GetGrpStatAflResponseModel.prototype['unique_crashes'] = undefined;

/**
 * @member {Number} work_time
 */
GetGrpStatAflResponseModel.prototype['work_time'] = undefined;






export default GetGrpStatAflResponseModel;

