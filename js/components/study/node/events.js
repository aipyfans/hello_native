/**
 * 使用方法参见如下链接
 * http://nodejs.cn/api/events.html#events_emitter_addlistener_eventname_listener
 */
'use strict';

const EventEmitter = require('events');

class NodeEventEmitter extends EventEmitter{

    EVENT_TOGETHER = "together";

}

const HelloEventEmitter = new NodeEventEmitter();
export default HelloEventEmitter;