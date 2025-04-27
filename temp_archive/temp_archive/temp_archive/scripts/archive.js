import { execSync } from "node:child_process";
import { mkdirSync } from "node:fs";

/**
 * 배포 전 전체 프로젝트 아카이브를 생성합니다.
 * archive 디렉토리에 타임스탬프가 포함된 zip 파일을 생성합니다.
 */
const ts = new Date().toISOString().replace(/[-:T]/g,"").slice(0,13);
mkdirSync("archive", { recursive: true });
execSync(`zip -r archive/${ts}_dist.zip .`, { stdio: "inherit" }); 