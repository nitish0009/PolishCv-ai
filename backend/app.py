# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route('/generate_resume', methods=['POST'])
def generate_resume():
    data = request.json
    print("Received Data:", data)

    # Placeholder logic - we'll build real resume generation later
    resume = f"""
    Name: {data.get('name')}
    Email: {data.get('email')}
    Phone: {data.get('phone')}
    Education: {data.get('education')}
    Experience: {data.get('experience')}
    Skills: {data.get('skills')}
    """

    return jsonify({"resume": resume.strip()})

if __name__ == '__main__':
    app.run(debug=True)
