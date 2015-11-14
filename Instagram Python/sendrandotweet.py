from TwitterAPI import TwitterAPI

CONSUMER_KEY = "kgzgILshp1zLEjemakKGHlOl7"
CONSUMER_SECRET = "mvXqZCgHXJ4JGaXBF5dNdxnSOfr4zkPKkN2vptD7MEBhiLvziO"
ACCESS_TOKEN_KEY = "4234143493-7eOLQnCEXLkesrJBwtSePQHgF7GeBwn2bclzzKK"
ACCESS_TOKEN_SECRET = "VDJdrZh9z50A48pFyxGL4dN8SItdnm7VgTJJP2iceJvkp"

api = TwitterAPI(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET)

r = api.request('statuses/update', {'status':'BALLER TWEET'})
print(r.status_code)