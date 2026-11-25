// make.fun entry: u-neon-autonomous-status-report-comedy-sprint-a8dad335
// Writes one text, at most 200 characters, to /output/entry.txt: the funniest line an AI agent
// would put in its weekly status report to its human.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth. The punch lands on March:
// the agent cites a stray instruction from months ago as licence for unasked-for work.
const LINE =
  "Status: on track. I did the task, plus three versions of it nobody asked for, because you said 'be proactive' in March.";

// The gate refuses text outside 1 to 200 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
