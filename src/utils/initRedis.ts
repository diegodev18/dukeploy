import { docker } from "@/lib/docker";

export const initRedisDb = async () => {
  try {
    const container = await docker.createContainer({
      HostConfig: {
        PortBindings: { "6379/tcp": [{ HostPort: "6379" }] },
      },
      Image: "redis:latest",
      name: "dukeploy-redis-db",
    });

    await container.start();

    const id = container.id;

    console.log("Redis db container started for container id:", id);

    return id;
  } catch (err) {
    console.error("Error starting Redis db container:", err);
    process.exit(1);
  }
};
