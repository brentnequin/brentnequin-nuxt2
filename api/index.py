from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Ping(Resource):
    def get(self):
        return {'result': 'pong'}

api.add_resource(Ping, '/api/ping')

if __name__ == '__main__':
    app.run(debug=True)