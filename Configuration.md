
<!-- markdownlint-disable MD001 MD024 -->
<!-- https://github.com/DavidAnson/markdownlint/blob/master/README.md#configuration -->
<!-- $PublishToSwym{"swym-data":"eyJzY2hlbWEiOiJBIiwiY29tbXVuaXRpZXMiOnsiX3lmeFQ5T0JTOFNkVW5RY3FqUXdXUSI6eyJtZWRpYXMiOnt9LCJ0eXBlIjoid2lraSIsInBhcmVudElkIjoiWVFnUjhtbkpUVkstRWhMRnFnb3k3USIsIm1kNSI6ImQ3ZDUwNWNlNzIzN2YyOGM5ZDJiNzU5MDFmY2E5Mzc5IiwiaWQiOiJJZzF0SnluWlFtdWVJaFdzN2FfTWJ3In19fQ=="}$ -->

# Widget Template Vue _light version_

This template is meant to ease the development of 3DDashboard Widgets.

With this template we focused on having the best possible development experience compatible with the 3DDashboard infrastructure. Hence we provide not only a code sample but a development environment based on widgets & web development best practices without embedding too much dependencies:

- Build with bundling (webpack)
- Linting (eslint) and formatting (Prettier)

Using this environment has many advantages :

- Ability do develop _outside_ of the 3DDashboard
- Hot & Live Reload: as soon as you modify a file, the change is applied in your web browser without a single action (even if your 3DEXPERIENCE Platform is on the cloud)
- Compliance with the latest front-end technologies (it's time to forget jQuery!)
- Ability to use the browser's debugger even in "modules"

Basically, you will be able to develop a widget like any other web application!

But that comes with a small price: some setup is required...

> ⚠️ Disclaimer ⚠️
>
> This template is provided ​“AS IS”. We make no warranties, express or implied, and hereby disclaim all implied warranties, including any warranty of merchantability and warranty of fitness for a particular purpose. Besides, this template has not been reviewed or validated by the Dassault Systèmes' Research and Development organization.
>
> ⚠️ Disclaimer ⚠️

# 1. Before starting

## 1.1. Web development

3DDashboard Widgets are HTML5 based applications (with some particularities). Therefore, you absolutely need to have a good knowledge of the following technologies:

- **HTML**
- **JavaScript**
- **CSS**
- HTTP, SSL and a good networking general knowledge

## 1.2. Framework

Also, as we are lazy developers, we like to ease our lives using some good frameworks & technologies. This template includes many of these and you won't get a chance to play around if you don't know:

- [Vue.js](https://vuejs.org/) - Consider spending 1 hour on [this training](https://scrimba.com/g/glearnvue) on Scrimba.
- [ES6](http://es6-features.org/) - You thought JavaScript was crap ? me too. But that was before ES6...
- [RequireJS](https://requirejs.org/) - That's the way you get access to 3DDashboard APIs. Whether you like it or not.
- _Widget and 3DDashboard_ - Well, either you've been trained (lucky you), either you have a good documentation, either... In any case, you need to know the basics.

## 1.3. Tooling

Now that we're good with front-end libraries, let's have a look at the tooling we use:

- [Visual Studio Code](https://code.visualstudio.com/) - You can use your favorite code editor. We do use VSCode and recommend it. Just make sure to accept extensions recommendations when opening the repo with VSCode (e.g. Vue syntax highlighting with Vetur).
- [NodeJS](https://nodejs.org/en/) - It won't be possible to build the widget without NodeJS. It's also the only **mandatory** tool you need to install manually. We encountered issues with the most recent version so until this is fixed, please use the **[LTS](https://nodejs.org/dist/v10.16.2/node-v10.16.2-x64.msi)** version.
- [Webpack](https://webpack.js.org/) - We use webpack to build our source code into a single bundle (_and yes - we also do use requirejs as it's mandatory for 3DDashboard integration_). It comes with many plugins to transpile the source, copy assets, allows hot reload in developing phases, etc. If you stick with our framework stack, you won't need to change & understand the configuration. But if for some reason you need to change our proposed default configuration, the files are in the
  `webpack/` directory.

# 2. Build it yourself

> All changes described below, and your widget development, are intended to take place on your local machine. However there are a couple exceptions:
>
> - if you choose the [3.4. On-premises](#3.4.-on-premises) method below, you'll have a bit of configuration to perform on your on-premises 3DEXPERIENCE 3DDashboard.
> - if you choose to use [VSCode Remote Development](https://code.visualstudio.com/docs/remote/remote-overview), or another comparable technology, then changes will of course happen on a remote machine. But the 3DEXPERIENCE Platform itself will not be modified.

Now that you've carefully read the [Before starting](#1.-before-starting) section, and that [NodeJS](https://nodejs.org/dist/v10.16.2/node-v10.16.2-x64.msi) is installed on your local machine:

## 2.1. Get the sources

You can download the [template zip](https://btcc.s3-eu-west-1.amazonaws.com/widget-lab/templates/widget-template-vue-light.zip) and unzip it wherever you prefer.

> if you want to report some bugs or enhancements, feel free to create issue in https://itgit.dsone.3ds.com/widget-lab/widget-template-vue-light/issues
>
> or if you are familiar with Git, you can clone our repo:
>
> ```bash
> git clone https://itgit.dsone.3ds.com/widget-lab/widget-template-vue-light.git
> ```
>
> and propose some changes back to us

## 2.2. Install the development dependencies

Open a terminal in the location you've put the downloaded / cloned sources, then:

```bash
npm install
```

Wait until it finishes.
You should see a new file at the root of your project: `widget-config.js`. We'll reuse it later to customize the widget to your environment.

# 3. Start developing

## 3.1. Use HTTPS

Due to [mixed content policy](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content), before having fun with development, we need to tackle the networking (trust) part. You basically have 2 options:

1. Serve HTTPS content from webpack-dev-server (and not simple HTTP). The easiest option is then to create an auto-signed certificate (recommended if you're admin on your development machine) and share it with the certificate stores. **OR**
1. Ignore your browser's mixed content warnings (fall-back if you're not local admin). In this case there is nothing specific about the template: just create an exception in your browser.

You'll find below the details to implement the first method.

We need to:

- Configure your browser(s) and your machine to trust your own webpack (express) server
- Configure the local server to serve HTTPS

### 3.1.1. Set up HTTPS

We recommend using [mkcert](https://github.com/FiloSottile/mkcert) - do read that documentation, it's strictly what we are doing below but more detailed.

The tool will assist you in creating the necessary files, stores & keys, configure your OS and your browser(s).

1. [Download the binaries](https://github.com/FiloSottile/mkcert/releases) corresponding to your OS.

1. Open a terminal at the same location where you downloaded mkcert installer

1. Create a new CA (Certificate Authority). mkcert will create the CA and update your OS, Java & Firefox stores

   ```bash
       mkcert -install
   ```

1. Click to accept the new certificate

1. Retrieve the hostname of your machine

   ```bash
       hostname
   ```

1. Create a new certificate

   ```bash
       mkcert localhost $hostname 127.0.0.1 ::1
   ```

   > Be careful:
   >
   > - by default mkcert will generate the CA file (`mkcert -install`) in your **user directory** (C:\Users\\\$USER\AppData\Local\mkcert\rootCA.pem on Windows),
   >
   > - while the KEY and CERT files (`mkcert localhost $hostname 127.0.0.1 ::1`) will be placed in the **current directory** (from where you ran mkcert).

### 3.1.2. Configure webpack-dev-server

[webpack-dev-server](https://webpack.js.org/configuration/dev-server/) is the Webpack module that allows Hot Reload when developing. This module is responsible for creating the HTTPS server.

A new configuration file was created during the initial installation made above: `widget-config.js`. We'll now customize the values to your environment.

> Important: **leave the file name unchanged** so that
>
> - the application works as expected
> - this file is never committed to a repository [(Why?)](https://datree.io/secrets-management-aws/)

Edit the `widget-config.js` _https_ object. Uncomment the _dev_ and _devServer_ objects (and the require for fs module on first line) and replace the following entries with the files you've created with mkcert:

```javascript
https: {
    key: fs.readFileSync("path/to/mkcert/files/localhost+3-key.pem"),
    cert: fs.readFileSync("path/to/mkcert/files/localhost+3.pem")
}
```

Please note that:

- `webpack.config.dev.js` is the default configuration
- `widget-config.js` is the file where your customized configuration is expected to take place, as it overrides `webpack.config.dev.js`

Thus, if you would like to customize any other configuration object, please do so inside `widget-config.js`.

## 3.2. Choose the optimal solution for your context

When developing Widgets, most of the time you will want to test in a 3DDashboard context. But sometimes you may not need to rely on 3DDashboard APIs that much, so developing outside of the 3DDashboard may be more convenient.

We identified 3 use cases which lead to different development environments setup:

| Use case     | Description                                                                                   | Recommendation                                                                        |
| ------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Standalone   | Widget developed and tested outside 3DDashboard (can then be embedded)                                   | Consider trying this option before going further. There is no special setup.          |
| On-premises  | Widget executed in a 3DDashboard on the same network (e.g. 3DEXPERIENCE VM, private cloud...) | Most convenient when possible (see details below) but requires the most configuration |
| Public Cloud | Widget executed in a 3DDashboard located anywhere (e.g. public cloud)                         | Easier than On-premises, but hot reloading is slightly slower (internet file upload). |

> _"same network"_ must be understood as: the server hosting the 3DDashboard can reach your development environment through HTTPS AND you can configure this server. If it is not the case please consider option 1 or 3.

Assuming you have [downloaded the sources](#2.1.-get-the-sources) and [installed the development dependencies](#2.2.-install-the-development-dependencies), open the source code directory in VS Code.

## 3.3. Standalone Widget

First configuration will serve the Widget from a local HTTPS server.

### 3.3.1. Build the Widget

> Note: This step is required to deploy your app in production, but not for development. You will indeed see below that we rely on webpack-dev-server to build the app in RAM and serve it right away, thus skipping the need to build the app on disk.

```bash
npm run build
```

When the build is finished, a new directory `dist/` is created. You'll find there the necessary files to run your widget. The entry point being `index.html`. Push this to your favorite HTTP server and try it right away using the _Run your App_ Widget.

### 3.3.2. Start the Widget

```bash
npm start
```

The command will compile the Widget, start an HTTPS server ([express](https://expressjs.com/)) and open your default web browser, loading the Widget entry point. Hot reload is enabled through a secured web socket, so if you modify and save a file (try with `components/how-to.vue`), the browser will automatically refresh the Widget.

Read [Appendix A: Hot Reload](#appendix-a:-hot-reload) for more details.

> Known limitations 🖐
>
> We did not mock everything provided by the 3DEXPERIENCE Platform. You can find all the details in the [widgets.js](src/lib/widget.js) file. If you identify something missing, you can either:
>
> - add it and open a Merge Request
> - open an Issue

## 3.4. On-premises

Second configuration is typically used when your widget is served from a server on the same network as the 3DDashboard, and you can access the 3DDashboard.

### 3.4.1. Prerequisites

You do need to have administrator privileges on the server running the 3DDashboard.

### 3.4.2. Some context

As in [Standalone Widget](#4.2.-standalone-widget), the Widget will be served from a local HTTPS server, but will be executed within a 3DDashboard. Therefore, due to the 3DDashboard infrastructure, your local HTTPS server must be reachable by the server running the 3DDashboard.

Also, the 3DDashboard won't let you run a non trusted Widget (3DEXPERIENCE Platform must run using HTTPS). That implies that the 3DEXPERIENCE server trusts your local server.

That brings one more configuration step: configuring your 3DDashboard Server to trust your local server.

> The following description relies on SSL configuration for your local server. Another approach is to use the 3DEXPERIENCE reverse proxy to redirect to your local environment. We won't detail the steps to configure it but if you are familiar with apache & reverse proxy usage, you can try, it works!

### 3.4.3. Configure your 3DDashboard

We have to add the previously created Certificate Authority to the Java trusted store (as 3DDashboard HTTPS is served by TomEE, using Java store mechanism).

1. Ensure your 3DDashboard is able to reach your host: from your 3DDashboard server:

   ```bash
       ping `$hostname`
   ```

1. Copy the `rootCA.pem` on the machine running the 3DDashboard.

1. Stop the 3DDashboard.

1. Open a terminal where the `rootCA.pem` file is located and run the following command (as administrator/root):

   > Make sure the JAVA_HOME is properly set! Else you will face an error like `keytool error: java.io.FileNotFoundException: /jre/lib/security/cacerts (No such file or directory)`

   ```bash
       keytool -import -trustcacerts -keystore $JAVA_HOME/jre/lib/security/cacerts -storepass changeit -alias Root -import -file rootCA.pem
   ```

1. You can restart the 3DDashboard.

### 3.4.4. Register your web server

You can use either "Add third-party app" or "Run your app" to register your web server on the 3DDashboard. If you need you widget to talk to other widgets, it needs to be trusted, hence use "Add third-party app".

In both cases, the accepted format is `https://fully.qualified.domain.name/uri`:

- the scheme is `https`, unless you're using the 3DEXPERIENCE reverse proxy as discussed above, in which can you can use `http`
- a fully qualified domain name is required (a hostname will not be accepted). If you need help setting up an FQDN for your web server, contact your company network administration team
- the URI depends on your web server setup

### 3.4.5. Start debugging

We're almost done !

1. In `widget-config.js` there is an `urls` section. Update local URL:

   ```js
    urls: {
        // URL to serve from webpack (local)
        local: "http://localhost:8081/widget/"
        // URL to access this server (public), default is same as local
        // public: "https://public.host:443/widget/"
    },
   ```

   > public URL is used in case of reverse proxy: the public URL differs from the served (local) URL. Due to webpack limitation, the public path and local path must be the same

You will notice the same behavior than in [Standalone mode](#3.3.-standalone-widget).

## 3.5. Public Cloud

Third configuration use when your Widget is running on a different network and you don't have access to the 3DDashboard.

### 3.5.1. Prerequisites

You need an HTTPS server on the same network as your 3DDashboard. If on Public Cloud, then Internet is that network.

### 3.5.2. Some context

By design, the 3DDashboard must be able to access the widget code. Therefore in a context where our local machine can't be reached by the server, we'll assume the 3DDashboard can access to Internet. Which is the case for, e.g., the 3DEXPERIENCE public cloud.

That being said we need an internet-facing HTTPS server to do the job.

We do find [AWS S3](https://aws.amazon.com/s3/) very convenient for this purpose and we do encourage its usage.

> If you have any other repository, you'll have to adapt the webpack plugin we wrote (see below).

[`aws-cli`](https://aws.amazon.com/fr/cli/) needs to be installed and [configured](https://docs.aws.amazon.com/fr_fr/cli/latest/userguide/cli-chap-configure.html) before continuing.

Last but not least, for Hot Reload, webpack-dev-server will create a Web Socket connection between the running widget & the process watching file changes on your local file system. Therefore you still need to have an HTTPS server running locally.

### 3.5.3. Configure your S3 settings

A new configuration file was created during the initial installation made above: `widget-config.js`. We'll now customize the values to your environment.

> Important: **leave the file name unchanged** so that ù
>
> - the application works as expected
> - this file is never committed to a repository [(Why?)](https://datree.io/secrets-management-aws/)

Edit the `widget-config.js` _s3_ object:

```javascript
    s3: {
        options: {
            // aws sdk will use default profile if no accessKeyId & secretAccessKey are provided
            accessKeyId: "your_AWS_AccessKeyId",
            secretAccessKey: "your_AWS_SecretAccessKey",
            region: "your_AWS_S3_bucket_region"
        },
        params: {
            Bucket: "your_bucket_name",
            ACL: "public-read",
            // distant path ;file path & name will be concatenated to the Key parameter
            Key: "path/inside/bucket"
        }
    }
```

Please note that:

- `webpack.config.dev.js` is the default configuration
- `widget-config.js` is the file where your customized configuration is expected to take place, as it overrides `webpack.config.dev.js`

Thus, if you would like to customize any other configuration object, please do so inside `widget-config.js`.

> Important: Make sure to **use this file name** so that
>
> - the application works as expected
> - this file is never committed to a repository [(Why?)](https://datree.io/secrets-management-aws/)

### 3.5.4. Register your web server

You can use either "Add third-party app" or "Run your app" to register your web server on the 3DDashboard. If you need you widget to talk to other widgets, it needs to be trusted, hence use "Add third-party app".

In both cases, the accepted format is `https://fully.qualified.domain.name/uri`:

- the scheme must be `https`, because on Public Cloud you cannot use the 3DEXPERIENCE reverse proxy
- a fully qualified domain name is required (a hostname will not be accepted). If you need help setting up an FQDN for your web server, contact your company network administration team
- the URI depends on your web server setup

### 3.5.5. Build the Widget

> Note: This step is required to deploy your app in production, but not for development. You will indeed see below that we rely on webpack-dev-server to build the app in RAM and serve it right away, thus skipping the need to build the app on disk.

```bash
npm run build
```

When the build is finished, a new directory `dist/` is created. You'll find there the necessary files to run your widget. The entry point being `index.html`.


### 3.5.6. Start debugging

In `widget-config.js` verify that:

- `https` is enabled with appropriate certificates
- public URL is undefined (comment out)

You can now start serving your widget through AWS S3:

```bash
    npm run startS3
```

You are ready to debug your widget executed on the cloud, with Hot Reload!

# 4. Start sharing

You've enhanced our template? Please open a merge request and we'll evaluate the opportunity to include your code in our template.

# Appendix A: Hot Reload

Here's how the hot reload sequence unfolds:

```mermaid
sequenceDiagram
    Code Editor (VSCode)->>webpack dev server: Bundle modified source files
    webpack dev server->>AWS S3: Upload modifications
    AWS S3->>webpack dev server: Upload finished
    webpack dev server->>browser: Apply this update
    browser->>AWS S3: Serve new files
    AWS S3->>browser: Apply new files
```

[Back to 3.3. Standalone Widget](#3.3.-standalone-widget)
