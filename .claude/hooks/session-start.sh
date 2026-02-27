#!/bin/bash
set -euo pipefail

# Alleen uitvoeren in remote omgeving (Claude Code on the web / Replit)
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "==> [session-start] Dependencies installeren..."

# Node.js: web frontend
echo "    npm install (web)..."
npm install --prefix "$CLAUDE_PROJECT_DIR/web"

# Node.js: backend
echo "    npm install (backend)..."
npm install --prefix "$CLAUDE_PROJECT_DIR/backend"

# Python: taogate CLI dependencies (directe install, geen editable build)
echo "    pip install (taogate deps)..."
pip install click rich --quiet

echo "==> [session-start] Klaar."
