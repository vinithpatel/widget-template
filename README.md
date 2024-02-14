
<!-- markdownlint-disable MD001 MD024 -->
<!-- https://github.com/DavidAnson/markdownlint/blob/master/README.md#configuration -->
<!-- $PublishToSwym{"swym-data":"eyJzY2hlbWEiOiJBIiwiY29tbXVuaXRpZXMiOnsiX3lmeFQ5T0JTOFNkVW5RY3FqUXdXUSI6eyJtZWRpYXMiOnt9LCJ0eXBlIjoid2lraSIsInBhcmVudElkIjoiWVFnUjhtbkpUVkstRWhMRnFnb3k3USIsIm1kNSI6ImQ3ZDUwNWNlNzIzN2YyOGM5ZDJiNzU5MDFmY2E5Mzc5IiwiaWQiOiJJZzF0SnluWlFtdWVJaFdzN2FfTWJ3In19fQ=="}$ -->

# Widget Template Vue _light version_

## Installation

### 1. Get the sources

You can download the [template zip](https://btcc.s3-eu-west-1.amazonaws.com/widget-lab/templates/widget-template-vue-light.zip) and unzip it wherever you prefer.

### 2. Install the development dependencies

Open a terminal in the location you've put the downloaded / cloned sources, then:

```bash
npm install
```

### 3. Start the Widget

```bash
npm start
```

For further documentation, installation, configuration, please refer to the [Widget Template Vue.js light documentation](https://itgit.dsone.3ds.com/widget-lab/widget-template-vue-light/blob/master/Configuration.md)

##  Introduction

This template is meant to ease the development of 3DDashboard Widgets.

Using this environment has many advantages :

- Ability do develop _outside_ of the 3DDashboard
- Hot & Live Reload: as soon as you modify a file, the change is applied in your web browser without a single action (even if your 3DEXPERIENCE Platform is on the cloud)
- Compliance with the latest front-end technologies (it's time to forget jQuery!)
- Ability to use the browser's debugger even in "modules"


> ⚠️ Disclaimer ⚠️
>
> This template is provided ​“AS IS”. We make no warranties, express or implied, and hereby disclaim all implied warranties, including any warranty of merchantability and warranty of fitness for a particular purpose. Besides, this template has not been reviewed or validated by the Dassault Systèmes' Research and Development organization.
>
> ⚠️ Disclaimer ⚠️

 ##  All commands

Command | Description
--- | ---
`npm run start` | Build app continuously and serve @ `http://localhost:8081/widget`
`npm run startS3` | Build app continuously to `/dist/` and serve through AWS S3
`npm run build` | Build app to `/dist/`