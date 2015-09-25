#!/bin/bash -e
APP_NAME="`cat package.json | jq '.name' | tr -d '"'`"
RELEASE_VERSION=`cat package.json | jq '.version' | tr -d '"'`
REPO_OWNER="holidayextras"

echo ${GHUSER}:${GHPASS}
echo ${RELEASE_VERSION}
echo ${CIRCLE_USERNAME}
echo ${CIRCLE_BUILD_NUM}
echo ${REPO_OWNER}
echo ${CIRCLE_PROJECT_REPONAME}
echo ${GRAPHITE_API_KEY}
echo ${GRAPHITE_ENDPOINT_PREFIX}
echo ${APP_NAME}
echo "${GRAPHITE_API_KEY}.counters.${APP_NAME}.production.inf.deployment 1"

curl --user "${GHUSER}:${GHPASS}" --data "{\"tag_name\": \"v${RELEASE_VERSION}\",\"target_commitish\": \"master\",\"name\": \"v${RELEASE_VERSION}\",\"body\": \"Production release by @${CIRCLE_USERNAME} (via build: [${CIRCLE_BUILD_NUM}](https://circleci.com/gh/${REPO_OWNER}/${CIRCLE_PROJECT_REPONAME}/${CIRCLE_BUILD_NUM})).\",\"draft\": false,\"prerelease\": false}" https://api.github.com/repos/${REPO_OWNER}/${CIRCLE_PROJECT_REPONAME}/releases
echo "${GRAPHITE_API_KEY}.counters.${APP_NAME}.production.inf.deployment 1" | nc ${GRAPHITE_ENDPOINT_PREFIX}.carbon.hostedgraphite.com 2003
