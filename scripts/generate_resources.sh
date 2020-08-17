# Remove (--gc) exiting resources and generate for GitHub pages build
hugo --minify --gc -s exampleSite --themesDir=../.. --baseURL https://janraasch.github.io/hugo-product-launch/

# Generate "production"-environment resources
hugo --minify -s exampleSite --themesDir=../..

# Generate "development"-environment resources
hugo server -s exampleSite --themesDir=../..
