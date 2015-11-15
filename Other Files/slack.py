from slacker import Slacker

slack = Slacker(GROUP_AUTH_TOKEN)

# Send a message to #general channel
slack.chat.post_message('#general', 'You are all super noobs')