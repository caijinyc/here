import Datastore from 'nedb';
import path from 'path';
// const remote = window.require('electron').remote;

export default new Datastore({
  filename: path.join(__dirname, '/data.db'),
  autoload: true
});
