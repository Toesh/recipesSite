# recipeSite
A site to add/view/search you recipes


## Docker
### Build container
`docker build -t recipesite:develop .`

### Run container
`docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm recipesite:develop`

### Intellij IDEA settings
- Context folder: `.`
- Image tag: `recipesite:develop`
- Run options: `-v /app -v /app/node_modules -p 4201:4200 --rm`

### URL
The url for accessing the site from your browser: `http://localhost:4201/`
