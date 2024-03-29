# Flash Chat

## Video demo
https://youtu.be/Ova07NuKj2E

## Deployment Instructions
1. Clone the repository.
2. Install the packages in the root directory.
3. In the fronted directory, give the command `npm i` or if it throws error`npm i --force` 
4. To run the backend, go to  the root directory and run command `npm run server`.
5. To run the frontend, go to the frontend directory and run command `npm start`.
6. Open the localhost server on which the frontend is running.

## Inspiration
Flash is a versatile chat app that can be used for both professional and personal purposes. We want to integrate cutting-edge features with ease of use to create a perfect amalgamation for a meticulously designed and robust software.

## What it does
1) The app allows user to chat with people registered on the app in 2 modes:
	i) User-to-user communication 
	ii) Group communication
	
2) Users can sign up easily with their Google Account and begin using our services.

3) The user can modify their profile flexibly and can even generate images via prompts that fetches a wide array of images from the OpenAI API.

4) They can use emojis in the chat to make the experience fun and interactive.

4) No need to type long unnecessary long texts with the voice-to-text feature of our app.

## Design and Architecture

### Frontend
The fronted of the site is designed with the help of React. The app had to had multiple pages. For designing the routes, we have used React-router. The user is able to keep a profile picture.
The styling and design of the site is created with the help of [Chakra UI](https://chakra-ui.com/) and [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app).

### Backend
The backend is handled by NodeJS, using Express framework, while the database for the web-app is handled by MongoDB.

### Authorization
We have used [Google OAuth](https://developers.google.com/identity/protocols/oauth2) for handling the login/signup of our app. 

### Real-time communication
For the real-time communication between users, [Socket.IO](https://socket.io/) is used.


## Features->

### Chat History and Notifications
The chats of the users are stored which the user can access later from the site on the chat interface. There is also a notification feature that helps user to check if there are any unread conversations.

### Adding AI Generated Image for Profile Picture
An AI image generator for the user's profile picture that provides the user with a wide array of pictures generated by using the [OpenAI API](https://platform.openai.com/docs/api-reference). The profile picture can be set instantly for the user, making it a user-friendly experience.

### Group Chat
Users can create a group chat by adding other users via their emails.

### Voice-to-Text Feature
A voice-to-text feature in the chat app that uses [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition?activeTab=readme) package on the chat screen to convert the comments of the user to syllables.

### Emojis
Users are also provided emojis for communication, adding an extra dimension of fun. The emoji feature is augmented by using [emoji-mart](https://www.npmjs.com/package/emoji-mart) package.
