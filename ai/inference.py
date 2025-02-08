import tensorflow as tf
import numpy as np

MODEL_PATH = "models/price_predictor.h5"

def load_model():
    """Loads the trained TensorFlow model."""
    return tf.keras.models.load_model(MODEL_PATH)

def predict_price(model, input_data):
    """Predicts price based on input data."""
    return model.predict(input_data)

if __name__ == "__main__":
    model = load_model()
    test_input = np.array([[0.5, 0.2, 0.8]])
    prediction = predict_price(model, test_input)
    print(f"Predicted price: {prediction}")
