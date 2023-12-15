# Omegle-clone-react [Live](https://omegle-chat.vercel.app)

> **Note:-** Open this application in two browsers (for exa- Chrome and edge) to test and give me feedback <a href="mailto:softdev.shivraj@gmail.com">📧softdev.shivraj@gmail.com<a> or you can fix the issue, i am open to merge your contribute.

## Table of contents
1. Tech Stack
2. Demo
3. How to start

## 1. Tech Stack 🛠
1. ReactJS as **frontend**
2. NodeJS as **backend**
3. Socket.io as **bi-directional communication**

## 2. Demo 🎢
<div align="center">
<img style="width:200px" src="https://res.cloudinary.com/dhcc4rnbc/image/upload/v1702456750/ezgif.com-video-to-gif-converted_dojkkd.gif" alt="demo gif"/>
<img style="width:630px" src="https://res.cloudinary.com/dhcc4rnbc/image/upload/v1702454464/Screenshot_28_bflomu.png" alt="demo image"/>
</div>

## 3. How to start 👨‍💻
### 1. Prerequisites:
- Ensure Node.js is installed on your device.
- Basic familiarity with the following technologies is assumed:
  - React.js - [React.js Official Documentation](https://reactjs.org/)
  - Node.js - [Learn more about Node.js](https://nodejs.org/)
  - Socket.io - [Socket.io Documentation](https://socket.io/docs/v4)
  - JavaScript - [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - Tailwind CSS - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
 
These prerequisites are essential for a smooth setup and understanding of the project.

### 2. backend setup 
1. clone backend repository
```sh
git clone https://github.com/iamshiv007/omegle-backend.git
```
2. jump in to project
```sh
cd omegle-backend
```
3. install packages
```sh
npm install
```
4. Enviroment variables
   - create a `.env` file
   - set the variables
  ```sh
PORT="8080"
FRONTEND_URL="http://localhost:3000"
  ```
5. start server
```sh
node app.js
```
**OR** (if you have nodemon installed)

```sh
nodemon app.js
```

now you would get this output in terminal
```sh
Server run on port http://localhost:8080
```

### 3. frontend setup
1. clone frontend repository
```sh
git clone https://github.com/iamshiv007/omegle-clone.git
```
2. again jump in to project
```sh
cd omegle-clone
```
3. install packages
```sh
npm install
```
4. set enviroment variables
   - create `.env.local` file
   - and put the anviroment variables
     ```sh
     REACT_APP_BASE_URL=http://localhost:8080
     ```
5. start project
    ```sh
    npm start
   ```
🎉 Now you ready to **explore**, **create** and **contribute.🤝**

<h3 align="center">🌟 Give a star if you find this project helpful.⭐️</h3>
<h3 align="center">🌟Thank You for visiting my project😀🙏⭐️</h3>
