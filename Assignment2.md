##Assignment 2

What is NPM?
Ans:
Hypothetically knows as node package manager is free open source library for javascript packages. It is used to publish open source node.js projects.

What is Parcel/Webpack? why is it required?
Ans:Webpack and parcel are both javascript bundles which optimize our code and create them prodution ready. Because react or javascript code isnt clean and ready to use on production env a bundler binds all the code and minifies it. webpack needs config files to be setup but parcel claims to be zero configuration bundler.

What is .parcel-cache?
Ans:parcel cahce contains files of our projects which is already parsed so when we make any chaneg in our project parcel bundler do not re parse the whole project again but only changed elements which is why parcel has a better performance in rebuild times.

What is npx?
Ans:Npx stands for node package execute which is used for executing node packages without installing themm and it commes with node pre installed.

Diff btw dependencies and devdependencies?
Ans:
Depenedencies are the packages which are required for project to run on production while devdependencies are used to run and test the project in developmment enviornment.

What is treeshaking?
Ans:
tree shaking is a javscript technique which is used to remove unused code from project before making it ready for production. Its a form of dead code removal

1.  tree shaking starts at entry point of a bundle
2.  it uses immport and export for identifying which code is used and which is not
3.  it emlimminates unused finctions and codes

what is Hot module replacement(HMR)?
Ans: it is a technique used to update code of a project. it send s update mmessage whcih contains only the chunks which are changed while application is running. it only updates the what is changed and saves the state of the application.

List 5 super powers of parcel and describe 3 in your words.
Ans: Minifiying, HMR, Tree shaking, file wathcing and removing console.log

Hot Module Replacement: It is a feature which allows to change the part of application which are changed in software and HMR sends a update to applcation and only updates the chunk which were changed.

Tree shaking: it is used to clean the code and remove the modules and code which is unused. It start from the entry point of bundle and uses improt and export to check which code is used and whcih is not.

Remove console.log: this is sued to remove all the console.log before makingg the build so production do not contain any console

What is .gitignore? what should we add and what should we not add in .gitignore?
Ans: gitignore is a git file which is used to specify which files and extensions that are not to be uploaded on git while pushing them. only the files that are auto generated must be included in gitignore and should avoid files that are self written such as codes.

Diff btw package.json and package-lock.json?
Ans:
package.json contains the list of dependencies and libraries included in project while package-lock.json actually contains the exact versions of library and dependecies stored in it to it will be easy to install consistent and create a exact enoviroment to run the project.

Why should I touch package-lock.json?
Ans: when npm downloads the node modules it check the package.json file to see which dependecies are present in project and npm creates a new file called package-lock.json which contains all the versions of the dependencies

What are node mmodules should we upload them to git?
Ans: node modules are the dependencies used by the project on which it is depended to run and execute which can be geenrated automatically as they are listed in package.json so thy are not required to be uploaded on githb.

what is dist?
Ans:dist contains the build files and comlete mminified files of our project which can be released on production.

what is browserlist?
ams: it contains all the list of broweser which our project should be made compatible to and it is a npm package which is open source
