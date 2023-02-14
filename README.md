<h1>AHIN Eye Center</h1><h3>https://ahin-eye.firebaseapp.com/</h3>
<b>Disclaimer: This website has been made for independent self-learning purposes only. This website is not meant to diagnose or treat any disease</b><br>
I have developed an eye-disease diagnostic website called <b>ABHIN Eye Center</b>, that diagnoses eye diseases based on symptoms written in normal sentences by the user. <b>My website can perform diagnoses for more than ten different eye diseases</b>. The diagnosis is done based on the following steps:
<ol>
<li>The first step is to obtain the text entered by the user and <b>convert it into a String array</b>, which contains only words. Using regular expressions, my code removes all numeric characters, tabs, spaces, and all symbols from the String array. 
<li>Then, each word in the String array is <b>compared with the available list of symptoms</b> present in the JavaScript code of the website.</li>
  <li>Three powerful functions <b>converts symptoms into a numerical binary number</b>, that contains only ‘1’s and ‘0’s.</li>
<li>Also, the website scans the text for the presence of any <b>‘negative’ symptoms</b>. For instance, the phrase “no peripheral vision” is read differently than the phrase “peripheral vision”. The first symptom “no peripheral vision” gives a diagnosis of Glaucoma, while the second symptom “peripheral vision” gives a diagnosis of an extraneous disease; a diagnosis of extraneous disease is given when the text given by the user is not useful enough to make any viable diagnosis.</li>
<li>Finally, the findDisease() method in the website’s JavaScript <b>compares the number with 38 unique binary numbers</b> to perform the final eye diagnosis.</li>
<ol>
