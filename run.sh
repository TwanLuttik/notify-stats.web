# remove dist folder
rm -rf ./dist/

# Install node modules
npm i

# Run build
npm run build

# Remove the current ....
rm -rf /var/www/notify-stats/

# Create the webfolder
mkdir /var/www/notify-stats

# move the dist folder to ....
mv -f ./dist/* /var/www/notify-stats/


echo done