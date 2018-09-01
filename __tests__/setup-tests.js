require('@babel/register')({
  plugins: ['styled-jsx/babel'],
  presets: ['@babel/preset-env', [
    'next/babel',
    {
      'styled-jsx': { optimizeForSpeed: true }
    }
  ], '@babel/preset-stage-0'],
  babelrc: false,
});
require('@babel/polyfill');
const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

const m = require('module');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const spies = require('chai-spies');


chai.use(chaiAsPromised);
chai.use(spies);

global.expect = chai.expect;
global.should = chai.should();
global.spy = chai.spy;


const originalLoader = m._load;

m._load = function hookedLoader(request, parent, isMain) {
  if (request.match(/.jpeg|.jpg|.png$/)) {
    return { uri: request };
  }
  return originalLoader(request, parent, isMain);
};


function noop() {
  return null;
}
require.extensions['.css'] = noop;
require.extensions['.yml'] = noop;
require.extensions['.png'] = noop;
require.extensions['reqwest.js'] = noop;
