#
# This script is meant to be run form within a hugo site's root
# with hugo-product-launch installed under ./themes/hugo-product-launch
#
echo 'ExampleSite: Copy contents of exampleSite into root'
cp -v -r themes/hugo-product-launch/exampleSite/ ./

echo 'NodeJS: Copy package.json'
cp -v themes/hugo-product-launch/package.json .
cp -v themes/hugo-product-launch/package-lock.json .

echo 'Git: Copy .gitignore'
cp -v themes/hugo-product-launch/.gitignore .

echo 'NodeJS: Copy .nvmrc'
cp -v themes/hugo-product-launch/.nvmrc .

echo 'NodeJS: Install dependencies'
echo 'NodeJS Version:'
node -v
echo 'NPM Version:'
npm -v
npm install

echo 'Custom CSS: Copy main.css into local "assets/css"-directory'
cp -v -r themes/hugo-product-launch/assets ./
