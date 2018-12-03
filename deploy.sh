#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'www.himself65.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:himself65/himself65.github.io.git master:master

cd -

rm -rf dist
