# recipeSite
A site to add/view/search you recipes


## 1. Docker
### 1.1 Build container
`docker build -t recipesite:develop .`

### 1.2 Run container
`docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm recipesite:develop`

### 1.3 Intellij IDEA settings
- Context folder: `.`
- Image tag: `recipesite:develop`
- Run options: `-v /app -v /app/node_modules -p 4201:4200 --rm`

### 1.4 URL
The url for accessing the site from your browser: `http://localhost:4201/`

## 2. Git
### 2.1 Hooks
#### 2.1.1 pre-commit
```
 #!/bin/sh
 
 pass=true
 RED='\033[1;31m'
 GREEN='\033[0;32m'
 NC='\033[0m'
 
 echo "Running Linters:"
 
 # Run tslint and get the output and return code
 tslint=$(npm run tslint)
 ret_code=$?
 
 # If it didn't pass, announce it failed and print the output
 if [ $ret_code != 0 ]; then
 	printf "\n${RED}tslint failed:${NC}"
 	echo "$tslint\n"
 	pass=false
 else
 	printf "${GREEN}tslint passed.${NC}\n"
 fi
 
 # Run stylelint and get the output and return code
 stylelint=$(npm run stylelint)
 ret_code=$?
 
 if [ $ret_code != 0 ]; then
 	printf "${RED}stylelint failed:${NC}"
 	echo "$stylelint\n"
 	pass=false
 else
 	printf "${GREEN}stylelint passed.${NC}\n"
 fi
 
 # If there were no failures, it is good to commit
 if $pass; then
 	exit 0
 fi
 
 exit 1
```
