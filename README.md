# What is this project?

[This project](https://serene-savannah-58732.herokuapp.com/) was a take home coding challenge: 

**Build a dashboard to display messages from a server that appear every two seconds.** 

The requirements were: 
1. Display the messages
2. Filter messages by `level`
3. Start/stop messages from the server
4. Delete all messages
5. Delete individual messages
6. Edit messages
7. Use pretty colors

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Folder Structure
```
└── src
    ├── App.js
    ├── components
    │   ├── Chart.js
    │   ├── Chart.module.scss
    │   ├── Dialogue.js
    │   ├── Dialogue.module.scss
    │   ├── EditMessage.js
    │   ├── EditMessage.module.scss
    │   ├── FullMenu.js
    │   ├── FullMenu.module.scss
    │   ├── Header.js
    │   ├── Header.module.scss
    │   ├── Message.js
    │   ├── Message.module.scss
    │   ├── MessageButtons.js
    │   ├── MessageButtons.module.scss
    │   ├── Messages.js
    │   ├── Messages.module.scss
    │   ├── MiniMenu.js
    │   ├── MiniMenu.module.scss
    │   ├── PlayPauseIcons.js
    │   ├── PlayPauseIcons.module.scss
    │   ├── Select.js
    │   ├── Select.module.scss
    │   └── Snackbar.js
    ├── context.js
    ├── helpers
    │   ├── helpers.js
    │   ├── styles.js
    │   └── useInterval.js
    ├── index.css
    ├── index.js
    ├── setupTests.js
    └── store
        ├── generator.js
        ├── levels.js
        └── reducer.js
```
