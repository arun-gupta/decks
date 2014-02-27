## Install HTTP2 module

npm install http2

## Generate the key and certificate

- keytool -genkey -keystore localhost.keystore -storepass http2store -keypass http2key -dname "CN=localhost,OU=MKTG,O=redhat.com,L=San Jose,C=US"

- keytool -export -file localhost.cert -keystore localhost.keystore

## Run the server

node server2.js

Follow up on https://github.com/molnarg/node-http2/issues/59
