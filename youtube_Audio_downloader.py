import pafy

# get the url of the video 
url = 'https://www.youtube.com/watch?v=GYe-ekvh8Q4'

# the new object of pafy

result = pafy.new(url)
## getting the best quality of video from the 'result' using the getbest()
best_quality_audio = result.getbestaudio()
## you can print it to see the quality of the video
print(best_quality_audio)
## download it using the download()
# best_quality_audio.download()