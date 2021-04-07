
const path = require('path');
const shelljs = require('shelljs');
const program = require('commander');
var fs = require('fs');
 
const targetFile = path.resolve(__dirname, '../dist/package.json');
const packagejson = require(targetFile);
const currentVersion = packagejson.version; // 读取版本号
const versionArr = currentVersion.split('.');
const [mainVersion, subVersion, phaseVersion] = versionArr;
 
// 默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${+phaseVersion+1}`;
let newVersion = defaultVersion;
 
// // 从命令行参数中取版本号输入 npm run buildAndPublish -v 9.9.9
program
  .option('-v, --versions <type>', 'Add release version number');
 
program.parse(process.argv);

const options = program.opts();

if (options.versions) {
  newVersion = options.versions;
}

function publish() {
  shelljs.sed('-i', '"name": "hanson"', '"name": "@hanson/hanson-js-utils"', targetFile); // 修改包名
  shelljs.sed('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile); // 修改版本号
  shelljs.cd('dist');
  // 同步修改dist目录下的package.json
  var cbDataPackage = JSON.parse(fs.readFileSync('../package.json'))
  cbDataPackage.version = newVersion
  // 重写dist下的package.json
  fs.writeFile('../package.json', JSON.stringify(cbDataPackage), function(err) {
    if (err) console.error(err)
    console.log('----------------------修改package.json文件完毕，version修改为：', cbDataPackage.version)
  })
  // 执行命令行
  shelljs.exec('npm publish'); // 发布
}
 
publish();