import { createClient, RedisClientType } from 'redis';

const redisClient : RedisClientType = createClient({
  url: process.env.REDIS_BASEURL
});

redisClient.on("ready", () => {
   console.error('Redis connection established')
});

redisClient.on("error", (err : any) => {
  console.error('Redis error:', err)
});

(async () => {
  await redisClient.connect();
  console.log("Checking Redis connection", await redisClient.ping())
})();

export default redisClient;
