# Heroku Database Setup

1. Create a free account with [Heroku](https://www.heroku.com/).
  
2. Create a new app. 
<img width="306" alt="Google Chrome — CleanShotX | 2021-04-20 at 02 01 56" src="https://user-images.githubusercontent.com/16905768/115322780-b3d58c00-a17e-11eb-8a52-b758fb0ea942.png" />

3. In your new app, go to `Overview` and next to `Installed add-ons`, click `Configure Add-ons`. We need this to set up our database.
![image](https://user-images.githubusercontent.com/16905768/115323232-a53ba480-a17f-11eb-98db-58e2f8c52426.png)

4. Once you clicked on `Configure Add-ons`, click on `Find more add-ons` and search for `postgres`. One of the options will be `Heroku Postgres` - click on that option. 
![image](https://user-images.githubusercontent.com/16905768/115323126-5beb5500-a17f-11eb-8030-7380310807a9.png)

5. Once the pop-up appears, click `Submit Order Form` - plan name should be `Hobby Dev - Free`. 
<img width="512" alt="Google Chrome — CleanShotX | 2021-04-20 at 02 04 29" src="https://user-images.githubusercontent.com/16905768/115323265-b4baed80-a17f-11eb-99f0-d67f019aa6df.png" />

6. Once you completed the above steps, click on your newly created `Heroku Postgres` and go to its `Settings`. 
![image](https://user-images.githubusercontent.com/16905768/115323367-e92ea980-a17f-11eb-9ff4-dec95f2ec349.png)

7. In `Settings`, copy your URI to your Calendso .env file and replace the `postgresql://<user>:<pass>@<db-host>:<db-port>` with it. 
![image](https://user-images.githubusercontent.com/16905768/115323556-4591c900-a180-11eb-9808-2f55d2aa3995.png)
![image](https://user-images.githubusercontent.com/16905768/115323697-7a9e1b80-a180-11eb-9f08-a742b1037f90.png)

8. To view your DB, once you add new data in Prisma, you can use [Heroku Data Explorer](https://heroku-data-explorer.herokuapp.com/).