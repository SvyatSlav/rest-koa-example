const redis = require("redis");
const client = redis.createClient({
    host: process.env.REDIS
});

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

client.on('error', function (err) {
    console.log('Redis Error:', err);
});

exports.get = async () => {
   
    const res = await getAsync("counter");
    
    return parseInt(res);

};

exports.update = async () => {
    var temp =  await getAsync("counter");
    temp = parseInt(temp);
   
    if (isNaN(temp)) {
        temp = 1;
    }
    else {
        temp = temp + 1;
    }
   
    client.set("counter", temp, redis.print);
    return temp;
};