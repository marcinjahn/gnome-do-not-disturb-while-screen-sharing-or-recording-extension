#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FILE="$SCRIPT_DIR/../resources/metadata.json"
CURRENT_VERSION=$(grep -oP '(?<="version": )\d+' "$FILE")
NEW_VERSION=$((CURRENT_VERSION + 1))

sed -i -E "s/\"version\": $CURRENT_VERSION/\"version\": $NEW_VERSION/" "$FILE"

echo "Updated version to $NEW_VERSION"