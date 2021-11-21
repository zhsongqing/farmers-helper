"use strict";
var logger = new Logger("main", true);
var WaxApi = {
    rawapi : nil,
    toolConfs: [],
    newGetTableRowsRequest: function(paramObj){
        return Object.assign({
            json: true,
            code: 'farmersworld',
            scope: 'farmersworld',
            table: "",
            lower_bound: "",
            upper_bound: "",
            index_position: "",
            key_type: "",
            limit: "100",
            reverse: false,
            show_payer: false
        }, paramObj);
    },
    createNew: function(){
        rawapi = new waxjs.WaxJS({
            rpcEndpoint: 'https://wax.eosphere.io',
            tryAutoLogin: true
        });
        var wax = {};
        wax.asyncLogin = async function () {
            try{
            ret = await WaxApi.rawapi.login();
            logger.debug("login ret:", ret)
            }catch(e) {
                logger.error("login error:",e.message)
            }
        },
        wax.asyncGetToolsConf = async function (){
            /*
              {
                      "json": true,
                      "code": "farmersworld",
                      "scope": "farmersworld",
                      "table": "toolconfs",
                      "lower_bound": "",
                      "upper_bound": "",
                      "index_position": 1,
                      "key_type": "",
                      "limit": 100,
                      "reverse": false,
                      "show_payer": false
                  }
            */
            var response = await WaxApi.rawapi.getTableRows({
                "table": "toolconfs",
                "index_position": 1
            })
            if ( response && (response["rows"] instanceof Array)){
              return response["rows"]
            }else{
              return false
            }
          //{"rows":[{"template_name":"Axe","img":"QmUCg2d1Ww2734tiCwEPA5s3WL1Pr9jMTNsoPx3A9vKsJe","schema_name":"tools","type":"Wood","rarity":"Common","level":1,"template_id":203881,"energy_consumed":10,"durability_consumed":5,"mints":["400.0000 GOLD","2400.0000 WOOD"],"rewards":["5.0000 WOOD"],"charged_time":3600},{"template_name":"Saw","img":"QmPiXkBCNYgKw1J4Yxnj9Z6RUPfmxER5ePPc8YCkdykinN","schema_name":"tools","type":"Wood","rarity":"Uncommon","level":2,"template_id":203883,"energy_consumed":30,"durability_consumed":15,"mints":["1200.0000 GOLD","7200.0000 WOOD"],"rewards":["17.0000 WOOD"],"charged_time":3600},{"template_name":"Chainsaw","img":"QmZFGkTKNGb52N7B8JDKC8WpRmAXoGRodb3fuDn8rtM8Eh","schema_name":"tools","type":"Wood","rarity":"Rare","level":3,"template_id":203886,"energy_consumed":60,"durability_consumed":45,"mints":["3600.0000 GOLD","21600.0000 WOOD"],"rewards":["54.0000 WOOD"],"charged_time":3600},{"template_name":"Fishing Rod","img":"QmVy4xphMjDCYGmzQR6FhU8E6gHEaMpKbzf39wKFyqNBVV","schema_name":"tools","type":"Food","rarity":"Common","level":1,"template_id":203887,"energy_consumed":0,"durability_consumed":5,"mints":["200.0000 GOLD","1200.0000 WOOD"],"rewards":["5.0000 FOOD"],"charged_time":3600},{"template_name":"Fishing Net","img":"QmPRWao5gLUmTktJZHdEg7A4dLYA9TzBjSGDvLNk3aCeh4","schema_name":"tools","type":"Food","rarity":"Uncommon","level":2,"template_id":203888,"energy_consumed":0,"durability_consumed":20,"mints":["800.0000 GOLD","4800.0000 WOOD"],"rewards":["20.0000 FOOD"],"charged_time":3600},{"template_name":"Fishing Boat","img":"QmSWBPJ5edSngtFAZMBw26EjexWMMYTHcHghWfSp9aWMdq","schema_name":"tools","type":"Food","rarity":"Rare","level":3,"template_id":203889,"energy_consumed":0,"durability_consumed":32,"mints":["3200.0000 GOLD","19200.0000 WOOD"],"rewards":["80.0000 FOOD"],"charged_time":3600},{"template_name":"Mining Excavator","img":"QmfM1hip56o1sUKfQFEhVVMjMcwpnC61dNwEtPrV67tagy","schema_name":"tools","type":"Gold","rarity":"Common","level":1,"template_id":203891,"energy_consumed":133,"durability_consumed":5,"mints":["4000.0000 GOLD","24000.0000 WOOD"],"rewards":["100.0000 GOLD"],"charged_time":7200},{"template_name":"Stone Axe","img":"QmPUoWpAkUVAhWo2EFwqaGxEczBptftCv5cdJXsFvfGr6T","schema_name":"tools","type":"Wood","rarity":"Common","level":1,"template_id":260763,"energy_consumed":5,"durability_consumed":3,"mints":["800.0000 WOOD","135.0000 GOLD"],"rewards":["1.7000 WOOD"],"charged_time":3600}],"more":false,"next_key":""}
        }
        wax.asyncGetTools = async function (userName){
            /*
            {
              "json": true,
              "code": "farmersworld",
              "scope": "farmersworld",
              "table": "tools",
              "lower_bound": "iiwya.wam",
              "upper_bound": "iiwya.wam",
              "index_position": 2,
              "key_type": "i64",
              "limit": "100",
              "reverse": false,
              "show_payer": false
          }
            */
          var response = await WaxApi.rawapi.getTableRows({
            "table": "tools",
            "index_position": 2,
            "key_type": "i64",
            "lower_bound": userName,
            "upper_bound": userName,
        })
        if ( response && (response["rows"] instanceof Array)){
          return response["rows"]
        }else{
          return falses;
        }
    }
      //{"rows":[{"template_name":"Axe","img":"QmUCg2d1Ww2734tiCwEPA5s3WL1Pr9jMTNsoPx3A9vKsJe","schema_name":"tools","type":"Wood","rarity":"Common","level":1,"template_id":203881,"energy_consumed":10,"durability_consumed":5,"mints":["400.0000 GOLD","2400.0000 WOOD"],"rewards":["5.0000 WOOD"],"charged_time":3600},{"template_name":"Saw","img":"QmPiXkBCNYgKw1J4Yxnj9Z6RUPfmxER5ePPc8YCkdykinN","schema_name":"tools","type":"Wood","rarity":"Uncommon","level":2,"template_id":203883,"energy_consumed":30,"durability_consumed":15,"mints":["1200.0000 GOLD","7200.0000 WOOD"],"rewards":["17.0000 WOOD"],"charged_time":3600},{"template_name":"Chainsaw","img":"QmZFGkTKNGb52N7B8JDKC8WpRmAXoGRodb3fuDn8rtM8Eh","schema_name":"tools","type":"Wood","rarity":"Rare","level":3,"template_id":203886,"energy_consumed":60,"durability_consumed":45,"mints":["3600.0000 GOLD","21600.0000 WOOD"],"rewards":["54.0000 WOOD"],"charged_time":3600},{"template_name":"Fishing Rod","img":"QmVy4xphMjDCYGmzQR6FhU8E6gHEaMpKbzf39wKFyqNBVV","schema_name":"tools","type":"Food","rarity":"Common","level":1,"template_id":203887,"energy_consumed":0,"durability_consumed":5,"mints":["200.0000 GOLD","1200.0000 WOOD"],"rewards":["5.0000 FOOD"],"charged_time":3600},{"template_name":"Fishing Net","img":"QmPRWao5gLUmTktJZHdEg7A4dLYA9TzBjSGDvLNk3aCeh4","schema_name":"tools","type":"Food","rarity":"Uncommon","level":2,"template_id":203888,"energy_consumed":0,"durability_consumed":20,"mints":["800.0000 GOLD","4800.0000 WOOD"],"rewards":["20.0000 FOOD"],"charged_time":3600},{"template_name":"Fishing Boat","img":"QmSWBPJ5edSngtFAZMBw26EjexWMMYTHcHghWfSp9aWMdq","schema_name":"tools","type":"Food","rarity":"Rare","level":3,"template_id":203889,"energy_consumed":0,"durability_consumed":32,"mints":["3200.0000 GOLD","19200.0000 WOOD"],"rewards":["80.0000 FOOD"],"charged_time":3600},{"template_name":"Mining Excavator","img":"QmfM1hip56o1sUKfQFEhVVMjMcwpnC61dNwEtPrV67tagy","schema_name":"tools","type":"Gold","rarity":"Common","level":1,"template_id":203891,"energy_consumed":133,"durability_consumed":5,"mints":["4000.0000 GOLD","24000.0000 WOOD"],"rewards":["100.0000 GOLD"],"charged_time":7200},{"template_name":"Stone Axe","img":"QmPUoWpAkUVAhWo2EFwqaGxEczBptftCv5cdJXsFvfGr6T","schema_name":"tools","type":"Wood","rarity":"Common","level":1,"template_id":260763,"energy_consumed":5,"durability_consumed":3,"mints":["800.0000 WOOD","135.0000 GOLD"],"rewards":["1.7000 WOOD"],"charged_time":3600}],"more":false,"next_key":""}
        return wax;
    },
    

}