from flask import Flask, render_template, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

here = os.path.abspath(os.path.dirname(__file__))

# you say you want you file to be created in /var/createcode, so
# you want the parent directory
parent = os.path.dirname(here)

# now we can build the path
filepath = os.path.join(parent, "fingerprints.txt")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fingerprints.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
number = 0

class FP(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	content = db.Column(db.String(200),nullable=False)
	date_created = db.Column(db.DateTime, default=datetime.now)

	def __repr__(self):
		return 'Fingerprints %r created:' % self.id


@app.route("/")
def index():
	return render_template("index.html")


@app.route('/parsing_data', methods=['POST', 'GET'])
def get_data():
	if request.method == "POST":
		data = request.get_json()
		print(data)
		# fingerprint = FP(content=str(data))
		# db.session.add(fingerprint)
		# db.session.commit()
		file = open(filepath, "a")
		global number
		number = number + 1
		file.write("No."+str(number)+"User's fingerprints:\n"+str(data)+"\n"+"\n")
		file.close()
	results = {'received': 'true'}
	return jsonify(results)


@app.route("/view")
def view():
	return render_template("view.html", values=FP.query.all())


if __name__ == "__main__":
#	db.create_all()
	app.run(debug=True)



