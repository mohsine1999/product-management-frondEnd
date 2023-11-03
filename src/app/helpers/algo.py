from flask import Flask, request, jsonify

app = Flask(__name)

# Chiffrement de Vigenere
def chiff_vigenere(plain_text, key):
    # Votre code de chiffrement Vigenere reste inchangé

# Déchiffrement de Vigenere
def dechiff_vigenere(cipher_text, key):
    # Votre code de déchiffrement Vigenere reste inchangé

# Endpoint pour le chiffrement
@app.route('/chiffrement', methods=['POST'])
def chiffrement():
    data = request.get_json()
    plain_text = data['plain_text']
    key = data['key']
    cipher_text = chiff_vigenere(plain_text, key)
    return jsonify({'cipher_text': cipher_text})

# Endpoint pour le déchiffrement
@app.route('/dechiffrement', methods=['POST'])
def dechiffrement():
    data = request.get_json()
    cipher_text = data['cipher_text']
    key = data['key']
    plain_text = dechiff_vigenere(cipher_text, key)
    return jsonify({'plain_text': plain_text})

if __name__ == '__main__':
    app.run(debug=True)
