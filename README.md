## Staging

database: test-ntf5.cr8wqjzbs99c.ap-southeast-1.rds.amazonaws.com
port: 3306
password: MwNzkEPL
Node: 14.17.3
Prisma: 4.0.0

## Docs

backend api endpoint: http://be-ntf5.eba-r76r72bq.ap-southeast-1.elasticbeanstalk.com/api
frontend endpoint: http://fe-ntf5.eba-r76r72bq.ap-southeast-1.elasticbeanstalk.com
docs endpoint: http://be-ntf5.eba-r76r72bq.ap-southeast-1.elasticbeanstalk.com/swagger

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
