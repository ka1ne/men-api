# MEN stack API

MongoDB, Express, Node API to enter, query and manipulate user data.

## DB setup

First, [install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)  

Then, start server

```bash
$ mongod
```

connect, so we can create a user.

```bash
$ mongo --port 27017
> use admin
> db.createUser(
>  {
>    user: "user",
>    pwd:  "userpassword123",
>    roles: [ { role: "readWrite", db: "test" } ]
>  }
> )
```

Stop server (CTRL-C/CMD-C) to restart with authentication flag
```bash
$ mongod --auth
```

Connect with new user, via another terminal window

```bash
$ mongo --port 27017 -u "user" -p "userpassword123" --authenticationDatabase "admin"
```

## Run app

```bash
$ cd
$ git clone https://github.com/ka1ne/men-api.git
$ cd men-api
$ node app.js
```

## Postman collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/12438044-8bfd921f-c3ac-470c-9090-d02ef7a58806?action=collection%2Ffork&collection-url=entityId%3D12438044-8bfd921f-c3ac-470c-9090-d02ef7a58806%26entityType%3Dcollection#?env%5BSpicyMango%20user%20data%20api%5D=W3sia2V5IjoidXNlcklkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoidGV4dCJ9XQ==)

[JSON link for collection](https://www.getpostman.com/collections/28f48e2b5b14fbcf328c)  

### Select environment:  
![Environment selection, use SpicyMango user data api](/img/environ.png "Environment selection, use SpicyMango user data api")
