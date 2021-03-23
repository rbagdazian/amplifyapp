import json
import time


def handler(event, context):
  #print('received event:')
  #print(event)
  tvd = time.time()
  jse = json.JSONEncoder()
  tv = '-> ' + jse.encode(tvd) + ' <-'
  
  return {
      'statusCode': 200,
      'headers': {
          'Content-Type': "application/json",
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps({'timev': tv})
  }
  
  