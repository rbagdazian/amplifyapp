import json
import time


def handler(event, context):
  tvd = time.time()
  jse = json.JSONEncoder()
  tv = '->' + jse.encode(tvd) + '<-'
  keyarray1 = ''
  keyarray2 = ''
  for key in event.keys():
    keyarray1 += (key+' ')

  
  return {
      'statusCode': 200,
      'headers': {
          'Content-Type': "application/json",
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps({'timev': keyarray1, 'msg2': 'message2'})
  }
  
  