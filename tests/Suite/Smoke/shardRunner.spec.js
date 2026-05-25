import { exec } from 'child_process';

const totalShards = 4;   // adjust based on project size
const testDir = './tests';

function runShard(shardNumber) {
  console.log(`🚀 Starting Shard ${shardNumber}/${totalShards}...`);

  const command = `npx playwright test ${testDir} --shard=${shardNumber}/${totalShards}`;
  const start = Date.now();

  const process = exec(command);

  process.stdout.on('data', (data) => {
    console.log(`[Shard ${shardNumber}] ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.error(`[Shard ${shardNumber} ERROR] ${data}`);
  });

  process.on('exit', (code) => {
    const duration = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`✅ Shard ${shardNumber} finished with code ${code} in ${duration}s`);
  });
}

// Run all shards in parallel
for (let i = 1; i <= totalShards; i++) {
  runShard(i);
}