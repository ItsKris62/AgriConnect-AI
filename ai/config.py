import os

MODEL_PATH = os.getenv("MODEL_PATH", "models/price_predictor.h5")
DEBUG_MODE = os.getenv("DEBUG", "True").lower() in ["true", "1", "yes"]
PORT = int(os.getenv("PORT", 5001))
