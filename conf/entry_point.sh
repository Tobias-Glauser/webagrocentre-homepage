echo "${BASE_PATH}/"
files=$(grep -lr "base-path-string" /usr/share/nginx/html)
echo "${BASE_PATH}/"
URL=$(echo "${BASE_PATH}/" | sed -E 's@(://)|(/)+@\1\2@g')
echo "${BASE_PATH}/"
for f in ${files}; do sed -i -E "s@base-path-string@${URL}@g" "$f"; done
echo "${BASE_PATH}/"
nginx -g 'daemon off;'
