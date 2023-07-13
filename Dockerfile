FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]


# default.conf을 /etc/nginx/conf.d/ 경로에 있는 default.conf에 복사한다.
# COPY ./default.conf /etc/nginx/conf.d/default.conf

# nextjs build한 결과물을 /usr/share/nginx/html에 복사한다.
# COPY --from=build out  /usr/share/nginx/html