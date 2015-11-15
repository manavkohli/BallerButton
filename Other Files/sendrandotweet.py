from TwitterAPI import TwitterAPI


api = TwitterAPI(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET)

r = api.request('statuses/update', {'status':'BALLER TWEET'})
print(r.status_code)