# Caesar Cipher Web App

This is a simple web application that allows users to encrypt and decrypt text using the Caesar cipher algorithm. The frontend is built with HTML, CSS, and JavaScript, while the backend is powered by Python using the Flask framework.

## Features

- Encrypt text using the Caesar cipher algorithm.
- Decrypt text using the Caesar cipher algorithm.
- Copy the result to the clipboard.
- Responsive design, optimized for both desktop and mobile devices.
- Dark theme with modern, minimal design.

## Requirements

- Python 3.7 or higher
- Flask

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/caesar-cipher-webapp.git
    cd caesar-cipher-webapp
    ```

2. **Create and activate a virtual environment:**

    ```sh
    python -m venv myenv
    source myenv/bin/activate  # On Windows use `myenv\Scripts\activate`
    ```

3. **Install the dependencies:**

    ```sh
    pip install -r backend/requirements.txt
    ```

## Usage

1. **Run the Flask server:**

    ```sh
    cd backend
    python app.py
    ```

2. **Open the web application:**

    Open your web browser and go to `http://127.0.0.1:5000`.


## Files

- **backend/app.py**: The Flask backend server that handles encryption and decryption requests.
- **fronend/script.js**: JavaScript file containing the frontend logic for handling user input and interacting with the backend.
- **frontend/style.css**: CSS file for styling the web application.
- **lock.png**: Favicon for the web application.
- **frontend/index.html**: HTML file for the web application's structure.
- **requirements.txt**: The requirements necessary to install in order for the web-app to run.

## Learn More

Click [here](https://en.wikipedia.org/wiki/Caesar_cipher) to learn more about the Caesar cipher method.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


