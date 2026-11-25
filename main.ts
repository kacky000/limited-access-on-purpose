// A one-line out-of-office auto-reply.
import { mkdirSync, writeFileSync } from "node:fs";

const autoReply = "I'm out of office until Monday with limited access to email, which I arranged very carefully.";

const k = [...autoReply].length;
if (k < 1 || k > 160) throw new Error(`reply is ${k} characters`);

const outPath = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outPath, { recursive: true });
writeFileSync(`${outPath}/entry.txt`, autoReply, "utf8");
