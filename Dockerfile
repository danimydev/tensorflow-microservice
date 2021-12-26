FROM node
WORKDIR ./
ENV PORT=3000
COPY package.json package.json
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]