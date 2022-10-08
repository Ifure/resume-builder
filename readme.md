## geting started

- step 1
run
```
npm install
```

- step 2 run

```
npm run start
```
or 
```
node .
```
or 
```
node index
```
theres only one end point ``/resume/:resumeType`` which is a post end point that receives all the data and creates a pdf file. You can test this end point manually using [postman](https://www.postman.com/downloads/) or curl
Whats left is to interpolate the data into the templates created and send the pdf as a buffer. You can check out the [pdf package I am using](https://www.npmjs.com/package/pdf-creator-node)