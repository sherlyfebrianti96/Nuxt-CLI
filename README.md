# Nuxt CLI for Class Componenent

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

## Contributors

[<img alt="sherlyfebrianti96" src="https://avatars.githubusercontent.com/u/2855979?v=4&s=117 width=117">](https://github.com/sherlyfebrianti96) |
:---:|
[sherlyfebrianti96](https://github.com/sherlyfebrianti96)|
