from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='../frontend', static_url_path='')
CORS(app)  # Enable CORS

def caesar_cipher(text, shift, mode='encrypt'):
    result = ''
    shift = shift if mode == 'encrypt' else -shift
    for char in text:
        if char.isalpha():
            start = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - start + shift) % 26 + start)
        else:
            result += char
    return result

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/encrypt', methods=['POST'])
@app.route('/decrypt', methods=['POST'])
def cipher():
    data = request.get_json()
    text = data.get('text')
    shift = data.get('shift')
    mode = 'encrypt' if request.path == '/encrypt' else 'decrypt'
    result = caesar_cipher(text, shift, mode)
    return jsonify({'result': result})


if __name__ == '__main__':
    app.run(debug=True)
