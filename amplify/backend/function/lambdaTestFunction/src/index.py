import json
import time


def handler(event, context):
  print('received event:')
  print(event)
  print("context is:",context)
  tvd = time.time()
  jse = json.JSONEncoder()
  tv = '->' + jse.encode(tvd) + '<-'
  keyarray = '<p><br />'
  keys = event.keys()
  vals = event.values()
  for i in range(0,len(keys)):
    keyarray = keyarray + '[ ' + keys[i] + ', ' + vals[i] +' ]<br>'
  
  keyarray = keyarray + '</p>'
  
  return {
      'statusCode': 200,
      'headers': {
          'Content-Type': "application/json",
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps({'timev': keyarray})
  }
  
  