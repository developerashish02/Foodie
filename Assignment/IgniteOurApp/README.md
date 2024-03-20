# What is NPM?

NPM is the package manager where all packages are hosted.
If we want to install and use any packages, we use NPM.
NPM does not stand for the Node Package Manager 😁.

If we want to add NPM to our app, we need to run `npm init` and follow the commands.

# What is `Parcel/Webpack`? Why do we need it?

`Parcel/Webpack/Vite` are bundlers commonly used in web applications. They are essential for creating production-ready app bundles that help with optimizations such as minification, lazy loading, code splitting, HMR (Hot Module Replacement), a development server, and many more features.

# What is `.parcel-cache`

`parcel` performs the caching to accelerate the building of the next development server. It caches the code
and store code locate in the `.parcel-cache` folder. This folder servers as the storage location for cached code.

# What is `npx` ?

`npm` is used to install packages and `npx` is used to execute the packages.

# What is difference between `dependencies` vs `devDependencies`

`devDependencies` - when the we developing the web application in that time we need the some `devDependencies` or packages in development time only we called them as `devDependencies`
command - `npm install -D packageName`

`dependencies` - when the we need some packages in production levels we called them dependencies
command - `npm install packageName`
