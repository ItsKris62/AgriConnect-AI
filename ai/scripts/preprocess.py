import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler

def preprocess_data(csv_path):
    data = pd.read_csv(csv_path)
    
    # Assume the dataset has 'price' and other numerical features
    X = data.drop(columns=['price'])
    y = data['price']

    scaler = MinMaxScaler()
    X_scaled = scaler.fit_transform(X)

    return X_scaled, y

if __name__ == "__main__":
    X, y = preprocess_data("data/market_data.csv")
    print(f"Preprocessed {len(X)} samples.")
