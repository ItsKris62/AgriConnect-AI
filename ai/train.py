import tensorflow as tf
import numpy as np
import os

# Generate dummy dataset
X_train = np.random.rand(100, 3)
y_train = X_train.sum(axis=1) * 0.5 + np.random.rand(100) * 0.1

# Define a simple neural network
model = tf.keras.Sequential([
    tf.keras.layers.Dense(16, activation='relu', input_shape=(3,)),
    tf.keras.layers.Dense(1)
])

model.compile(optimizer='adam', loss='mse')

# Train model
model.fit(X_train, y_train, epochs=10)

# Save model
os.makedirs("models", exist_ok=True)
model.save("models/price_predictor.h5")
print("Model training complete and saved to models/price_predictor.h5")
