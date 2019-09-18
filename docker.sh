docker rm -f 42E
docker run \
	--name 42E \
	-v $(pwd):/usr/share/nginx/html:ro \
	-p :80 \
	-e "VIRTUAL_HOST=www.42entrepreneurs.com,42entrepreneurs.com,www.42entrepreneurs.fr,42entrepreneurs.fr" \
    -e "LETSENCRYPT_HOST=www.42entrepreneurs.com,42entrepreneurs.com,www.42entrepreneurs.fr,42entrepreneurs.fr" \
    -e "LETSENCRYPT_EMAIL=contact@42entrepreneurs.com" \
    -d nginx
