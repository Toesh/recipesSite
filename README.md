# recipeSite

A site to add/view/search you recipes

## 1. Frontend

Angular 8

## 2. Backend

Node.js and Express

## 3. Docker

### 3.1 Docker-compose

Build with: `docker-compose build`

Run with: `docker-compose up`

### 3.2 Frontend

Build with: `docker build -t recipe-site-frontend:dev .`

Run with: `docker run -d --name recipe-site-frontend -p 4200:4200 recipe-site-frontend:dev`

### 3.3 Backend

Build with: `docker build -t recipe-site-backend:dev .`

Run with: `docker run -d --name recipe-site-backend -p 3000:3000 recipe-site-backend:dev`
