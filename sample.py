# takes in an input and computes the possible standard outputs for the input 

def possibleCombinationOuput(val):

  outputList = []

  # check if the given value is a capital or not 

  for i in range(len(val)):

    outputList.append






def isCapOrNot(val):

  if ord(val)>=65 and ord(val)<=90:
    return 'cap'
  elif ord(val)>=97 and ord(val)<=123:
    return 'nope'
  else:
    return 'damn boy'