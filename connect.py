import urllib.request
import json
f = urllib.request.urlopen('http://localhost:8000')
dic = json.loads(f.read().decode("utf-8"))
print (dic["seg0"]["lt"])

