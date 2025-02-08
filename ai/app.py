from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from inference import load_model, predict_price

app = Flask(__name__)
model = load_model()

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json.get("values", [])
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        prediction = predict_price(model, np.array(data).reshape(1, -1))
        return jsonify({"price_prediction": prediction.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)
