import requests

response = requests.get('http://217.25.88.166:8081/')

print(response.text)