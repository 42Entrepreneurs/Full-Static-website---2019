docker rm -f 42E
docker run \
	--name 42E \
	-v $(pwd):/usr/share/nginx/html:ro \
	-p :80 \
	-e "VIRTUAL_HOST=www.42entrepreneurs.com,42entrepreneurs.com" \
    -e "LETSENCRYPT_HOST=www.42entrepreneurs.com,42entrepreneurs.com" \
    -e "LETSENCRYPT_EMAIL=tim@keynes.fr" \
    -d nginx