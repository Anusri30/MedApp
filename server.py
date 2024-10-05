from flask import Flask, request, jsonify
import joblib  # Assuming you saved your trained model using joblib or pickle

# Load the pre-trained model
model = joblib.load('mental_health_model.pkl')

app = Flask(_name_)

@app.route('/predict', methods=['POST'])
def predict():
    # Receive JSON input from the frontend
    data = request.get_json()
    mood = data['mood']
    sleep = data['sleep']
    activity = data['activity']
    stress = data['stress']

    # Make prediction using the model
    prediction = model.predict([[mood, sleep, activity, stress]])

    # Send back the result
    return jsonify({'mental_health_score': prediction[0]})

if _name_ == '_main_':
    app.run(debug=True)