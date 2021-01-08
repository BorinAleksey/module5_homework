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
let x = [1, 3, 3, 4, 5]
for(let i=0; i<x.length; i++)
  if(x[i]!=x[i+1]){
    console.log(false)
  }else {
    console.log(true)
  }
</script>
</body>
</html>