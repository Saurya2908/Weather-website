#npm packages/core modules used in weather-app:

**axios**: to make http requests(earlier request module)
**express**: to make web server and serve files to user as frontend
**path**: to integrate static files in other directories
**hbs**: handlebars.js express view engine for templating files

*to run the app:*
1. set the weather-website directory as pwd and in cmd type: npm i
2. run the project using command : npm start (or look for the run command in package.json file inside scripts)
3. ctrl+click on the url generated and search for your weather(or in your browser go to url localhost:3000)


#To deploy:

*Git and Github:*
Create an account on github and login
Go to git-scm.com and install git and git bash
Set up SSH keys(see file)

*to push code to github:*
Go to github account and open settings and select SSH and GPG keys
select add SSH key and set a title and in the key area paste the content of the id_rsa.pub file(see SSH setup file)
to copy contents of id_rsa.pub file, run command : cat ~/.ssh/id_rsa.pub
To test your SSH connection, run command : ssh -T git@github.com

Go to github account and create a new repository
To connect to your github repository, run command: git remote add origin git@github.com:<repository_url>
To push code to github: git push -u origin master



*Heroku :*
Create an account on heroku and login
To download Heroku CLI open git bash and run command : npm i -g heroku
to check proper heroku installation check version : heroku -v
login to heroku cli: heroku login 

*To upload code to heroku:*

Add your SSH keys to heroku, run command : heroku keys:add
To create your heroku app, run command : heroku create <app_name>
To check availiable remotes, run command : git remote
To push code to heroku, run command : git push heroku master(Before pushing code to heroku check changes to deploy file)