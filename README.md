# Access
https://zoom-clone-vy.vercel.app

# Zoom Clone

This project is a Zoom clone developed using [Next.js](https://nextjs.org/) for both frontend and backend functionalities. It allows users to create and join video conferences with multiple participants, similar to the popular video conferencing application Zoom.

## Features

- **User Authentication:** Users can sign up, log in, and log out using their email address and password.
- **Create and Join Meetings:** Users can create new meetings and share the meeting link with other participants. They can also join existing meetings using a meeting link.
- **Video Conferencing:** The application provides real-time video conferencing with support for multiple participants. Users can see and hear each other during the meeting.
- **Screen Sharing:** Participants can share their screens with others during the meeting.
- **Recording:** The application supports recording of meetings for later playback.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vyhoangquocnguyen/zoom_clone.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd zoom_clone
    ```

3. **Install dependencies for the frontend:**

    ```bash
    cd client
    npm install
    ```

4. **Install dependencies for the backend:**

    ```bash
    cd ../server
    npm install
    ```

5. **Start the frontend and backend servers:**

    ```bash
    # In the client directory
    npm start

    # In the server directory
    npm start
    ```

6. **Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.**

## Technologies Used

- **Frontend:** NextJS, React, React Router, Socket.IO, Tailwind CSS, Shadcn/UI
- **Backend:** Node.js, Express.js, Socket.IO
- **Database:** MongoDB (with Mongoose)
- **User Authentication:** Clerk Auth
- **Video-Audio:** Stream API

## Credits

This project is based on the tutorial by [JavaScript Mastery](https://github.com/adrianhajdin).

## Contributing

Contributions are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request.
