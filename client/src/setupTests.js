const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({ adapter: new Adapter()})
require('jest-enzyme');
require('construction-designer-core/geometry'); // Add extensions to Number
const setupJSDOM = require('construction-designer-core/drawing-editor/spec/helpers/setupJSDOM')
const Storage = require('dom-storage')

global.localStorage = new Storage(null, { strict: true });

// Install our mock for Canvas elements
setupJSDOM()

afterEach(() => {
  localStorage.clear();
})
