# Nuxt CLI for Class Componenent
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is a Nuxt CLI to auto-generate the components/Layout/Pages/Store for your [Nuxtjs application](https://nuxtjs.org/).

This CLI built for your [Component-Class](https://class-component.vuejs.org) needs.

## Installation

You can run this command to do the installation :

```
npm install nuxt-cli-class-component
```

## Usage

After the installation, you can run by calling the package's `index.js` or register it to your `package.json` file.

### Register to NPM command

After the installation, you can register this `nuxt-cli-class-component` to your `package.json` file.

```
{
  "name": "your-project",
  "scripts": {
    ...
    "cli": "node node_modules/nuxt-cli-class-component/index.js"
  },
  ...
}
```

### Run the command

After the `nuxt-cli-class-component` has been registered to your `package.json`, now you can simply use it :

```
npm run cli
```

### Generate schematic

When you run the `nuxt-cli`, you will get the option for `what do you want to generate`.

#### Component
- When you choose this option, it will asking you for the **Component Name**.
- After this, it will generate the folder + file structure and its default content.
- Example :
- Generate a component `base/sample` :
  - Run the `nuxt-cli` :
    ![Generate component](./documentation/img/01.%20Generate%20Component.png)
  - After finished, it will generate the folder and files structure.
    ```
    .
    ├── ...
    ├── components                          # Folder contains all components
    │   ├── base                            # Folder contains all Base components
    │   │   ├── base-sample                 # Folder contains Base Sample component
    │   │   │   ├── base-sample.en-US.json  # Component translation En-US
    │   │   │   ├── base-sample.id-ID.json  # Component translation Id-ID
    │   │   │   ├── base-sample.vue         # Component written in Vue
    │   │   │   └── base-sample.spec.js     # Unit Testing for the component
    │   │   └── ...
    │   └── ...
    └── ...
    ```

#### Layout
- When you choose this option, it will asking you for the **Layout Name**.
- After this, it will generate the folder + file structure and its default content.
- Example :
- Generate a layout `authentication` :
  - Run the `nuxt-cli` :
    ![Generate layout](./documentation/img/02.%20Generate%20Layout.png)
  - After finished, it will generate the folder and files structure.
    ```
    .
    ├── ...
    ├── layouts                     # Folder contains all layouts
    │   ├── authentication          # Folder contains all Base components
    │   │   └── authentication.vue  # Layout written in Vue
    │   └── ...
    └── ...
    ```

#### Page
- When you choose this option, it will asking you for the **Page Name**.
- After this, it will generate the folder + file structure and its default content.
- Example :
- Generate a page `authentication/forgot-password` :
  - Run the `nuxt-cli` :
    ![Generate page](./documentation/img/03.%20Generate%20Page.png)
  - After finished, it will generate the folder and files structure.
    ```
    .
    ├── ...
    ├── pages                                   # Folder contains all pages
    │   ├── authentication                      # Folder contains all Authentication page
    │   │   ├── forgot-password                 # Folder contains Authentication Forgot-Password page
    │   │   │   ├── forgot-password.en-US.json  # Page translation En-US
    │   │   │   ├── forgot-password.id-ID.json  # Page translation Id-ID
    │   │   │   ├── forgot-password.vue         # Page written in Vue
    │   │   │   └── forgot-password.spec.js     # Unit Testing for the page
    │   │   └── ...
    │   └── ...
    └── ...
    ```

#### Store
- When you choose this option, it will asking you for the **Store Name**.
- After this, it will generate the folder + file structure and its default content.
- Example :
- Generate a store `message/status` :
  - Run the `nuxt-cli` :
    ![Generate page](./documentation/img/04.%20Generate%20Store.png)
  - After finished, it will generate the folder and files structure.
    ```
    .
    ├── ...
    ├── store                   # Folder contains all stores
    │   ├── message             # Folder contains all Message store
    │   │   ├── status          # Folder contains Message Status store
    │   │   │   └── status.vue  # Store written in Vue
    │   │   └── ...
    │   └── ...
    └── ...
    ```

## Documentation

If you want to know about more about this project, you can see the reproduce steps in these article :

- [Building a Nuxt CLI using NPM](https://sherlyfebrianti96.medium.com/building-a-nuxt-cli-using-npm-84801968aed3?sk=ee7263f9cde4b5fea7e69207eef5f712)
- [Publish the Nuxt CLI to NPM Package](https://sherlyfebrianti96.medium.com/publish-the-nuxt-cli-to-npm-package-7092d2dbd1ca?sk=fc7f2ca21480d1e66f0d711879c44de4)
- [Building a Nuxt CLI using NPM in Advanced](https://sherlyfebrianti96.medium.com/building-a-nuxt-cli-using-npm-in-advanced-8b2435aa7aa4?sk=c41bf010aa4f8a26baabc5d6e66dadad)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/sherly-febrianti-4021a982/"><img src="https://avatars.githubusercontent.com/u/2855979?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sherly Febrianti</b></sub></a><br /><a href="https://github.com/Sherly Febrianti/Nuxt-CLI/commits?author=sherlyfebrianti96" title="Code">💻</a> <a href="#maintenance-sherlyfebrianti96" title="Maintenance">🚧</a> <a href="https://github.com/Sherly Febrianti/Nuxt-CLI/commits?author=sherlyfebrianti96" title="Documentation">📖</a> <a href="#question-sherlyfebrianti96" title="Answering Questions">💬</a> <a href="https://github.com/Sherly Febrianti/Nuxt-CLI/pulls?q=is%3Apr+reviewed-by%3Asherlyfebrianti96" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

The list was generated using [All Contributors](https://allcontributors.org/).

See the [contributing docs](https://allcontributors.org/docs/en/project/contribute) for more information
