FROM node
WORKDIR ./opt/app
ENV PORT=3000
COPY package.json package.json
RUN npm install
EXPOSE 3000
COPY . ./opt/app
CMD ["npm", "start"]