// Copyright 2018 Lars Nielsen
//
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
// 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
// PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
// TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

"use strict";

function get_curentime() {

    var timing = new Date();
  
    var year = timing.getFullYear();       //年
  
    var month = timing.getMonth() + 1;     //月
  
    var day = timing.getDate();            //日
  
    var hour = timing.getHours();            //时
  
    var min = timing.getMinutes();          //分
  
    var s = timing.getSeconds();           //秒
  
    var clock = year + "-";
  
    if (month < 10)
  
      clock += "0";
  
    clock += month + "-";
  
    if (day < 10)
  
      clock += "0";
  
    clock += day + " ";
  
    if (hour < 10)
  
      clock += "0";
  
    clock += hour + ":";
  
    if (min < 10) clock += '0';
  
    clock += min + ":";
  
    if (s < 10) clock += '0';
  
    clock += s;
  
    return (clock);
  
  }

function generateSpecial(timestamp, tag) {
    var msg = "[";
    if (timestamp && tag) {
        msg = msg + get_curentime() + " : " + tag;
    } else if (timestamp) {
        msg = msg + get_curentime()
    } else {
        msg = msg + tag;
    }

    msg = msg + "] ";
    return msg;
}

function generateString(type, msg, timestamp, tag)
{
    var res = "";
    if (timestamp || tag) {
        res = generateSpecial(timestamp, tag);
    }

    return res + type + ": " + msg;

}

function Logger(tag, timestamp) {
    this.tag = tag;
    this.timestamp = timestamp;
}

Logger.prototype.message = function(msg) {
    console.log(generateString('message', msg, this.timestamp, this.tag));
}

Logger.prototype.info = function(msg) {
    console.log(generateString('info', msg, this.timestamp, this.tag));
}

Logger.prototype.data = function(msg) {
    console.log(generateString('data', msg, this.timestamp, this.tag));
}

Logger.prototype.success = function(msg) {
    console.log(generateString('success', msg, this.timestamp, this.tag));
}

Logger.prototype.warning = function(msg) {
    console.log(generateString('warning', msg, this.timestamp, this.tag));
}

Logger.prototype.failur = function(msg) {
    console.log(generateString('failur', msg, this.timestamp, this.tag));
}

Logger.prototype.fatal = function(msg) {
    console.log(generateString('fatal', msg, this.timestamp, this.tag));
}

Logger.prototype.error = function(msg) {
    console.log(generateString('error', msg, this.timestamp, this.tag));
}

function LoggerFactory() {
    this.tag = null;
    this.timestamp = false;
}

LoggerFactory.prototype.setTag = function(tag) {
    this.tag = tag;
}

LoggerFactory.prototype.setTimestamp = function(timestamp) {
    this.timestamp = timestamp;
}

LoggerFactory.prototype.build = function() {
    return new Logger(this.tag, this.timestamp);
}

export {Logger}