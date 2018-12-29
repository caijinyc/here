import Datastore from 'nedb';
import path from 'path';
// import { remote } from 'electron';
const remote = window.require('electron').remote;

console.log(
  'remote.app.getPath',
  path.join(remote.app.getPath('userData'), '/data.db')
);

export default new Datastore({
  filename: path.join(remote.app.getPath('userData'), '/data.db'),
//   filename: '/Users/zx/Desktop/data.db',
  autoload: true
});
