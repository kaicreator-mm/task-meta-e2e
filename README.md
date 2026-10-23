# task-meta-e2e

Test subject repository for [task-meta](https://github.com/kaicreator-mm/task-meta) real
GitHub publication: a ZCode agent works on an Issue here, task-meta captures the run through
its ZCode plugin and publishes an ADS structured report comment on that Issue, then reads it
back. Not a product repository.

- `npm test` — test suite
- `bash gate.sh` — verifier gate (prints `GATE_SUBJECT_SHA`, verdict line and `EXIT=<code>`)
