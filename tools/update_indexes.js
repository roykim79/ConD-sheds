#!/usr/bin/env node

// Purpose: update the index.js file containing CommonJS export statements for
// each module.

const modules = [
  'server',
  'client/src/shared'
];

const fs = require('fs');
const path = require('path');
const showLogStatements = false;

const walk = function(dir, shouldRejectFile) {
  let results = [];
  if (!fs.existsSync(dir)) {
    return results;
  }

  if (showLogStatements) {
    console.log(`Analyzing ${dir}`);
  }
  const list = fs.readdirSync(dir);
  list.forEach(file => {

    file = `${dir}/${file}`;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file, shouldRejectFile));
    } else if (shouldRejectFile && shouldRejectFile(file)) {
      if (showLogStatements) {
        console.log(`  skipping ${file}`);
      }
    } else {
      results.push(file);
    }
  });

  if (results.length > 0 && showLogStatements) {
    console.log(`  exported ${results.length} files from ${dir}`);
  }
  return results;
};

/**
 * @return boolean - true if file should be omitted, false if file should be included
 */
const excludeSpecFiles = function(file) {
  return (/^\./.test(file) ||
          (/.*\/spec\/.*/).test(file) ||
          (/.*\/__tests__\/.*/).test(file) ||
          (/.*\/setupTests.js/).test(file) ||
          path.extname(file) !== '.js');
};

const includeSpecFiles = function(file) {
  return (/^\./.test(file) ||
          path.extname(file) !== '.js');
};

const exportGroups = modules.reduce((exportGroups, library) => {
  const files = walk(`${library}`, excludeSpecFiles)
        .concat(walk(`${library}/spec/helpers`, includeSpecFiles))
        .filter(file => !file.match(/index.js$/))
  const stripExtension = file => file.slice(0, -3)
  const stripDirectory = file => file.slice(library.length + 1)
  const prepFile = file => stripDirectory(stripExtension(file))
  const symbolForFile = file => path.basename(file)
  const makeExport = file => ({
    symbol: symbolForFile(file),
    file: file,
  })

  const bySymbol = (a,b) => {
    const aSymbol = a.symbol,
          bSymbol = b.symbol
    if (aSymbol < bSymbol) return -1
    if (aSymbol > bSymbol) return 1
    return 0
  }

  exportGroups[library] = files.map(prepFile).map(makeExport).sort(bySymbol)
  return exportGroups
}, {});

const dumpStringToFile = (string, file) => {
  const stream = fs.createWriteStream(file, {
    flags: 'w+',
    defaultEncoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
  })
  stream.once('open', _fd => {
    stream.write(string)
    stream.end()
  })
}

const exportString = exports => {
  const exportLine = ({symbol, file}) => `  '${symbol}': require('./${file}'),`
  return [`module.exports = {`]
    .concat(exports.map(exportLine))
    .concat(['}\n'])
    .join('\n')
}

modules.forEach(library => {
  const string = exportString(exportGroups[library])
  dumpStringToFile(string, `${library}/index.js`)
})
