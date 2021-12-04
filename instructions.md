### Prerequisites
1. Install `Docker Desktop` from [https://docs.docker.com/install/] 
2. (ONLY) IF you are in Linux, install `docker-compose` separately from [https://docs.docker.com/compose/install/]

### Run the app
1. Open terminal of the project directory, and cd into the direcory where contains `docker-compose.yml` (it's usually directly under the project folder.)

2. Configure the `.env` file which contains the port number and other configurations.

3. Run `docker-compose up`, the project should be up and running in port number configured from step 2.

4. (When done the app development) Run `docker-compose down` in the same directory as above. 

### FAQ

#### ERROR: for XXXX  Cannot start service composer: Mounts denied: The path XXXX is not shared from the host and is not known to Docker
You can configure shared paths from Docker -> Preferences... -> Resources -> File Sharing and ensure that your project working directory is in the list. (If you are in MacOS, adding `/Users` to the list would cover most of common directroies)

#### Error response from daemon: driver failed programming external connectivity on endpoint XXXXX: Bind for 0.0.0.0:XXXX failed: port is already allocated
You can configure the port number in the project's `.env`, once you done save the `.env` and run `docker-compose up` again.

#### When shutdown the app with `docker-compose down`, does it wipe out all database changes I have made? 
It does NOT. The `docker-compose down` would just shutdown the app, release its port numbers but the current set up would persiste the app data, so that you can pick it up in next time running `docker-compose up`. If you want to do a "hard reset" to all data back to the start point, simplly do `docker-compose down -v --remove-orphans`.

#### How do I view or manage my current data through some GUI interfaces?
The app comes with some dedicated database administration softwares that allow you to manage the database easily! For MySQL database, there is `PHPMyAdmin`, and for `MongoDB`, there is `MongoExpress`. Please check the following varaibles in `.env`, which indicates which port number can you access the softwares after you run `docker-compose up`
```
PHPMYADMIN_PORT
ME_PORT
```

#### Is there any cheatsheet for Docker CLI?
https://github.com/collabnix/dockerlabs/blob/master/docker/cheatsheet/README.md