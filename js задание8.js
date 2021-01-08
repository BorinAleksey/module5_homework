<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2021 by anonymous (http://jsbin.com/jomafacoye/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
let myMap = new Map()
myMap.set('ee', 'eeewe')
myMap.set('www', 'wwwwwe')
myMap.set('qqq', 'qqqqe')
myMap.set('rrrr', 'rrrrwe')

console.log(myMap.keys())
console.log(myMap.values())
for (let name of myMap.keys()){
  console.log('Ключ-'+name)
}
for (let name of myMap.values()){
  console.log('Значение-'+name)
}
</script>
</body>
</html>