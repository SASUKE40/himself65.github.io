#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'www.himself65.com' > CNAME

git config user.email "himself6565@gmail.com"
git config user.name "himself65"

git init
git add -A
git commit -m 'deploy'

git push --force --quiet "https://${GITHUB_TOKEN?:}@github.com/himself65/himself65.github.io.git" master:master > /dev/null 2>&1

cd -

rm -rf dist
