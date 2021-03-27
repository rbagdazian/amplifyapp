import json
import time


def handler(event, context):
  tvd = time.time()
  jse = json.JSONEncoder()
  tv = '->' + jse.encode(tvd) + '<-'
  keyarray1 = ''
  keyarray2 = ''
  keys = event.keys()
  vals = event.values()
  for i in keys:
    keyarray1 = keyarray1 + (i + ' ')
  for i in vals:
    keyarray2 = keyarray2 + (i + ' ')
  
  return {
      'statusCode': 200,
      'headers': {
          'Content-Type': "application/json",
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps({'timev': keyarray1, 'msg2': keyarray2})
  }
  
  