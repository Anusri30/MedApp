import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import joblib

# Load your dataset
data = pd.read_csv('mental_health_data.csv')

# Define features (X) and target (y)
X = data[['Mood_Level', 'Sleep_Hours', 'Activity_Level', 'Stress_Level']]
y = data['Mental_Health_Score']

# Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the trained model to the models folder
joblib.dump(model, 'models/mental_health_model.pkl')