import path from "path";

const getDukeployPath = (pathName: string) =>
  path.join(DUKEPLOY_ROOT_PATH, pathName);

export const { DUKEPLOY_ROOT_PATH = "/etc/dukeploy" } = process.env;

export const dukeployPaths = {
  DIRECTORIES: {
    APPS_DIR_PATH: getDukeployPath("apps"),
  },
  FILES: {
    CONFIG_FILE_PATH: getDukeployPath("config.json"),
    DEPLOYMENTS_FILE_PATH: getDukeployPath("deployments.json"),
    GIT_TOKENS_FILE_PATH: getDukeployPath("git_tokens.json"),
  },
} as const;

export const REQUIRED_DEPENDENCIES = [
  "git",
  "docker",
  "docker-compose",
] as const;
