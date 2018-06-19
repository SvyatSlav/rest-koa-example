const redis = require("redis");
const {promisify} = require('util');
const client = redis.createClient({
    host: process.env.REDIS
});

const getAsync = promisify(client.get).bind(client);



client.on('error', function (err) {
    console.log('Redis Error:', err);
});

exports.get =  async () => {
    const res = await getAsync("counter");   
    return parseInt(res);
   
};

exports.update = async () => {
    var temp = await exports.get();
    temp = temp + 1;
    
    client.set("counter", temp, redis.print);
    return temp;
};