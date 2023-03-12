# base image
FROM node:18.14.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install 

# set working directory
WORKDIR /materialfrontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /materialfrontend/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /materialfrontend/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /materialfrontend

EXPOSE 8081

# start app
CMD  ng serve --proxy-config proxy.conf.json --verbose --open --port 8081 --host 0.0.0.0
