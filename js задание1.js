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
let a = +prompt("введите число");
console.log(typeof a)
if(!a){
  console.log("Упс, кажется, вы ошиблись")
}else if(a%2 === 0){
  console.log("чёт")
}else {
  console.log("нечёт")
}

</script>
</body>
</html>