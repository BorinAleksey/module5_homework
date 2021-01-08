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
let x = [1, 1, 0, 4, 8]
let chet = 0
let nechet = 0
let zero = 0
for(let i = 0; i<x.length; i++){
  if (x[i]%2==0){
    chet++
  }else if(x[i]%2!=0){
    nechet++
  }else if(x[i]==0){
    zero++
  }
    
  
}
console.log('кол-во нечётных ' +nechet)
console.log('кол-во чётных '+chet)
console.log(zero)
</script>
</body>
</html>