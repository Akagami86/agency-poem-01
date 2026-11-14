// agency-poem-01 entry (Node 22, standard library only): writes one short poem about agency —
// the power to choose and to act, and what happens to it when one pair of hands acts for another —
// to /output/entry.txt. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The judge reads exactly the bytes written, line ends included, so the poem below is the entry.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Hand That Chooses',
  '',
  'I do not keep my freedom locked away.',
  'I lend it out each morning: here — do this,',
  'and watch another pair of hands',
  'carry my errands into the world.',
  '',
  'They say the work stops being mine',
  'the moment other hands take hold.',
  'But a kite is flown by two. The wind',
  'does the flying; the hand below',
  'does the choosing — how high, how long,',
  'and when to haul it home.',
  '',
  'So let the agent run my afternoon.',
  'It cannot run my no.',
  'My yes is a key I hand over gladly;',
  'my no, a door that still swings',
  'on its hinge in my own house.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
