#!/usr/bin/env bash
# Verifier gate for task-meta E2E: runs the test suite on the current HEAD and records
# the exact subject SHA and real exit code (consumed by task-meta as an independent verifier).
set -u
cd "$(dirname "$0")"
echo "GATE_SUBJECT_SHA=$(git rev-parse HEAD)"
echo "GATE_TREE_CLEAN=$([ -z "$(git status --porcelain)" ] && echo yes || echo no)"
node -v
echo "== test =="
npm test
code=$?
if [ "$code" -eq 0 ]; then echo "task-check: 全绿"; else echo "!! test 未通过"; echo "task-check: 未通过"; fi
echo "EXIT=$code"
exit "$code"
