echo "*** Checking routegen:dev"
yarn routegen:dev

echo "*** Check if commited files matches generated sample"
if [[ `git status --porcelain` ]]; then
  echo "Looks like codegen needs to be run:"
  git --no-pager diff HEAD --color
  git ls-files --others --exclude-standard
  echo "Have you tried running 'yarn routegen:dev'?"
  exit 1
fi

echo "*** Done checking routegen:dev"