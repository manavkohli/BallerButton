from slacker import Slacker

slack = Slacker('xoxp-14563700771-14567200706-14576295297-9d138b4ab3')

# Send a message to #general channel
slack.chat.post_message('#general', 'You are all super noobs')