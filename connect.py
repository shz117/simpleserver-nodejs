import urllib.request
import json
f = urllib.request.urlopen('http://ec2-54-213-33-30.us-west-2.compute.amazonaws.com:8000')
dic = json.loads(f.read().decode("utf-8"))
print (dic["seg0"]["lt"])

