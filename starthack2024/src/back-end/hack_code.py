# Import all necessary libraries
import os
import tarfile
import urllib.request
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
from tensorflow.keras.applications import InceptionV3
from tensorflow.keras.utils import to_categorical

# NOTE: Implement your own function to load and preprocess the images and labels
def load_images_and_labels():
    # returns: train_images, train_labels, test_images, test_labels
    return None, None, None, None

# Load the dataset
train_images, train_labels, test_images, test_labels = load_images_and_labels()

# Convert class vectors to binary class matrices (for use with categorical_crossentropy)
train_labels = to_categorical(train_labels)
test_labels = to_categorical(test_labels)

# Configure the InceptionV3 Model
base_model = InceptionV3(input_shape = (150, 150, 3), include_top = False, weights = 'imagenet')
for layer in base_model.layers:
    layer.trainable = False
  
x = layers.Flatten()(base_model.output)
x = layers.Dense(1024, activation='relu')(x)
x = layers.Dropout(0.2)(x)
x = layers.Dense(train_labels.shape[1], activation='softmax')(x)

model = tf.keras.models.Model(base_model.input, x)

# Compile the model
model.compile(optimizer = tf.keras.optimizers.RMSprop(lr=0.0001), 
              loss = 'categorical_crossentropy', 
              metrics = ['acc'])

# Train the model with your data
history = model.fit(train_images,
                    train_labels, 
                    epochs=20,
                    validation_data=(test_images, test_labels)
                    )

# Save the model
model.save('validation.h5') 