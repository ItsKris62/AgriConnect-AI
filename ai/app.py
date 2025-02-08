from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np

app = Flask(__name__)
model = tf.keras.models.load_model('models/price_predictor.h5')

@app.route('/predict', methods=['POST'])
def predict():
    data = np.array(request.json['values']).reshape(1, -1)
    prediction = model.predict(data)
    return jsonify({'price_prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(port=5001)
