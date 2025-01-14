#!/usr/bin/env node

'use strict';
// @ts-check
// ==================================================================================
// cli.js
// ----------------------------------------------------------------------------------
// Description:   System Information - library
//                for Node.js
// Copyright:     (c) 2014 - 2022
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================

// ----------------------------------------------------------------------------------
// Dependencies
// ----------------------------------------------------------------------------------
const si = require('./index');

// ----------------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------------
(function () {
  si.getStaticData().then(
    ((data) => {
      data.time = si.time();
      console.log(JSON.stringify(data, null, 2));
    }
    ));
})();
