const pkginfo = require('../../package.json');
const spec = require('../spec');
const dto = require('./dto');
const ip = require('ip');

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Public
 *     summary: Count user request
 *     operationId: showApiInfo
 *     responses:
 *       200:
 *         description: You being counted!
 */
exports.welcome = async (ctx) => {

  // BUSINESS LOGIC
 
  var count =  await dto.update();

  const data = {
    name: pkginfo.name,
    version: pkginfo.version,    
    myIp: ip.address(),
    counter: count
  };

  ctx.res.ok(data, 'You being counted');
};

exports.stat = async (ctx) => {
  var count =  await dto.get();  
  ctx.res.ok(count, "Total Count")
}

exports.showSwaggerSpec = ctx => {
  ctx.body = spec;
};
