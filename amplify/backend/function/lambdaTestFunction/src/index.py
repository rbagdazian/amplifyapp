import json
import time


def handler(event, context):
  print('received event:')
  print(event)
  tvd = time.time()
  tv = json.JSONEncoder()
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(tv)
  }