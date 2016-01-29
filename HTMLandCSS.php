<html>
<head>
  <title>HTML and CSS</title>
  <link rel="stylesheet" href="HTMLandCSS.css" type="text/css">
</head>
<body>

<div id="fixed">
  This text is fixed on the viewport.  It can be fixed at any position on the viewport
  you choose in the css.  The <img id="imgCrows" src="Images/Attempted%20Murder.PNG" /> css uses position: fixed; along
  with position values of top and left.  The image is positioned with float:left and appears in the html just between the
  words 'The' and 'css' in the third sentence of this paragraph.

</div>

<div id="divBoxVals" class="classSpecial">
  This div is styled both with #divBoxValuesNoFloat :
  <pre>
#divBoxValsNoFloat
{
    width: 450px;
    padding: 6px;
    border: 2px dotted black;
    margin: 5px;
    text-align: left;

}
  </pre>
  and .classSpecialNoBang :

  <pre>
  .classSpecialNoBang
  {
      text-align: justify;
      border: 5px solid green;
  }
  </pre>
</div>
<div id="divBoxVals" class="classSpecial">
  This div is styled both with #divBoxValues :
  <pre>
#divBoxVals
{
    width: 450px;
    padding: 5px;
    border: 2px dotted black;
    margin: 5px;
    text-align: left;
    float: left;
}
  </pre>
  and .classSpecial :

  <pre>
  .classSpecial
  {
      text-align: justify;
      border: 5px solid green !important;
  }
  </pre>
</div>

<div id="divNoBoxVals">
See <a href="https://www.w3.org/TR/CSS21/cascade.html#specificity" target="_blank">
    Calculating a CSS selector's specificity.
</a>
</div>
</body>
</html>
