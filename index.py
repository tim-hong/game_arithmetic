from flask import Flask, render_template, request
from gensim.models import Doc2Vec
import codecs
import json
app = Flask(__name__)
model = Doc2Vec.load('data/nopunc.dat')
f = codecs.open('data/wiki.json','r+','utf8')
games = json.load(f)
f.close()

@app.route('/')
def index():
    return render_template('index.html')
    
@app.route('/similar',  methods=['GET', 'POST'])
def similar():
    try:
        pg = json.loads(request.args.get('pg'))
        pterms = json.loads(request.args.get('pt'))
        ng = json.loads(request.args.get('ng'))
        nterms = json.loads(request.args.get('nt'))
        pt = []
        nt = []
        if pterms:
            pt = [model[x] for x in pterms]
        if nterms:
            nt = [model[x] for x in nterms]
        pos = pg + pt
        neg = ng + nt
        sim = model.docvecs.most_similar(positive=pos, negative=neg)
        sim = [(games[x],y) for x,y in sim]
        return render_template('similar.html', sim=sim)
    except:
        return "Sorry there was a problem with your request"

if __name__ == '__main__':
    app.run()