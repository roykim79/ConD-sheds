const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({ adapter: new Adapter()})
require('jest-enzyme');
require('construction-designer-core/geometry').NumberExtensions; // eslint-disable-line no-unused-expressions
const Storage = require('dom-storage')

global.localStorage = new Storage(null, { strict: true });

afterEach(() => {
  localStorage.clear();
})
