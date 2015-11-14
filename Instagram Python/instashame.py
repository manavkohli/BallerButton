#example taken from:
#https://github.com/lukecyca/python-instagram-upload
import instagram
USERNAME="thekohlice"
PASSWORD="tennis1"

def shameFriends(username, password):
	filepath = "noobs.jpg"
	print "Uploading " + filepath
	insta = instagram.InstagramSession()
	if insta.login(username, password):
	    media_id = insta.upload_photo("noobs.jpg")
	    print media_id
	    if media_id is not None:
	        insta.configure_photo(media_id, "noobs")

shameFriends(USERNAME, PASSWORD);