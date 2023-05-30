# CrudOperation-Api-with-image-upload
This is a simple Event Api where crud operation Insert, Delete, Create, Paginate, Update of events  as model.

### Project layout

```
|- node_modules                          // projects all libraries file
|- routes/routes                         // File contains the routes for operation to be performed

|   |- controllers/controller                   // Folder containing REST Controllers (UserController)
|   |- models/events                        // File contaning 
|   |- public                              //it store the images or files which are provided of insertion evemt.  
|- server.js/                            // main file or connection file with database.

```

---

### Build and Run

##### Pre Requirements

- `Vscode or any other IDE`
 
- `cors, express, mongoose, body-parser, multer`
- `MongoDb installed in system.`
- `Postman.exe for demonstation.`

##### Build Project

```
$ download the folder
$ open with with IDE (VsCode)
$ install node module with command 
- npm install node 
$ Initialise the node environment with 
- npm init
$ run the server.js file with commandd        # - run application.
- npm start
```

#### User Service

|HTTP Method|URL|Description|
|---|---|---|
|`POST`| http://localhost:8000/api/v3/app/events | Create new Event |
|`PUT`| http://localhost:8000/api/v3/app/events/uid | Update Event by _ID |
|`GET`| http://localhost:8000/api/v3/app/events?id=event_id | Get Events by _ID |
|`GET`| http://localhost:8000/api/v3/app/events?type=latest&limit=3&page=1 | Get 3 limit of Events or Pagination |
|`DELETE`| http://localhost:8000/api/v3/app/events/uid | Delete Event by _ID |
