#!/bin/bash -e

REPO_OWNER="holidayextras"

echo "Chesking https://api.github.com/repos/${REPO_OWNER}/${CIRCLE_PROJECT_REPONAME}/releases/latest"

APP_VERSION="`cat package.json | jq '.version' | tr -d '"' `"
RELEASE=`curl --user "${GHUSER}:${GHPASS}" https://api.github.com/repos/${REPO_OWNER}/${CIRCLE_PROJECT_REPONAME}/releases/latest | jq '.tag_name' | tr -d '"' | tr -d 'v'`

echo "Current Release: $RELEASE"
echo "Local Version: $APP_VERSION"

LOCALVERSION=(${APP_VERSION//./ })
REMOTEVERSION=(${RELEASE//./ })

if [ ${LOCALVERSION[0]} -lt ${REMOTEVERSION[0]} ]; then
	exit 1
fi

if [ ${LOCALVERSION[0]} -le ${REMOTEVERSION[0]} ] && [ ${LOCALVERSION[1]} -lt ${REMOTEVERSION[1]} ]; then
	exit 1
fi

if [ ${LOCALVERSION[0]} -le ${REMOTEVERSION[0]} ] && [ ${LOCALVERSION[1]} -le ${REMOTEVERSION[1]} ] && [ ${LOCALVERSION[2]} -le ${REMOTEVERSION[2]} ]; then
	exit 1
fi
exit 0
