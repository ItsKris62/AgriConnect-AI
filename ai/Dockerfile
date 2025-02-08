# Use an official Python runtime as base image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy everything to the container
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose API port
EXPOSE 5001

# Start the Flask app
CMD ["python", "app.py"]
