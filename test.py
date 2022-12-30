import re

CLEANR = re.compile('<.*?>') 

def cleanhtml(raw_html):
  cleantext = re.sub(CLEANR, '', raw_html)
  return cleantext
  

with open('test.txt', encoding='utf-8') as f:
    output = cleanhtml(f.read())
    print(output)
    with open('output.txt', 'w', encoding='utf-8') as f:
        f.write(output)
