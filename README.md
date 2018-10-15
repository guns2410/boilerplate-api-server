# API Server

This is a boilerplate for creating an api server. Please follow the install instructions below:

### Using the boilerplate

Step 1: Clone the Repo
```bash
git clone https://github.com/guns2410/boilerplate-api-server.git <folder_name>
```
Step 2: `cd` into the repo
```bash
cd <folder_name>
```

Step 3: Install dependencies
```bash
npm install
```

OR

```bash
yarn install
```

### Adding an api endpoint

Step 1: Create an api endpoint

> Write your API Endpoint business logic in `./src/api/<filename>.js`

Step 2: Add to `index.js` file for import management

Step 3: Map the file with a URL in `<root_dir>/index.js`


### Running the API Server

For running the server in DEV mode

```bash
npm run dev
```

OR

```bash
yarn dev
```

Running in production

```bash
npm start
```

OR

```bash
yarn start
```

### Testing the API Server

For running tests
```bash
npm test
```

OR

```bash
yarn test
```

For test coverage
```bash
npm run test:coverage
```

OR

```bash
yarn test:coverage
```
