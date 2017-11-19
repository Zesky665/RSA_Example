var e ;
var d ;
var n ;

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
};
function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
};
function totient(e,d,phi) {
  var p = e*d;
  if( (p%phi) == 1){
    return 1;
  }
  else{
    return 0;
  }
};
function encrypt() {
  var std_id = parseInt(document.getElementById('std_id').value);
  var display = document.getElementById('nums').checked;
  m2 = std_id%100;
  m1 = (std_id - m2)/100;
  var c1 = Math.pow(m1,e) % n;
  var c2 = Math.pow(m2,e) % n;
  document.getElementById('output').innerHTML = c1 + "" + c2 ;
  if(display){
    window.alert("M1 : " + m1 + "\nM2 : " + m2 +"\nN : " + n +  "\ne : " + e + "\nd : " + d + "\nC1 : " + c1 +"\nC2 : " + c2 );
  }
};
function decrypt() {
  var std_id = document.getElementById('std_id').value;
  var display = document.getElementById('nums').checked;
  m2 = parseInt(std_id)%(1000);
  m1 = (parseInt(std_id) - m2)/1000;
  var c1 ;
  c1 = bigInt(bigInt(m1).pow(d)).mod(n);
  var c2 ;
  c2 = bigInt(bigInt(m2).pow(d)).mod(n);
  document.getElementById('output').innerHTML = c1 + "" + c2 ;
  if(display){
    window.alert("M1 : " + m1 + "\nM2 : " + m2 +"\nN : " + n +  "\ne : " + e + "\nd : " + d + "\nC1 : " + c1 +"\nC2 : " + c2 );
  }
};


function generate_keys() {

    var q = 19;//parseInt(document.getElementById('q').value);
    var p = 29//parseInt(document.getElementById('p').value);
    var text_out;
    var display = document.getElementById('nums').checked;

    var m2 = std_id%100;
    var m1 = (std_id - m2)/100;
    n = q*p;
    phi = (q - 1)*(p - 1);

    if(isPrime(q) == false){
      window.alert("Q is not prime");
    }
    if(isPrime(p) == false){
      window.alert("P is not prime");
    }
    e = 4;
    while(gcd(e,phi) != 1){
      if(e+1 == q || e+1 == p){
        e =  e +2;
      }
      else{
        e++;
      }
    }
    d = 2;
    while(totient(e,d,phi) != 1){
      if(d == e){
        d = d + 2;
      }
      else{
        d++;
      }
    }

    document.getElementById('PU').innerHTML = "{" + e + "," + n + "}";
    document.getElementById('PR').innerHTML = "{" + d + "," + n + "}";

    if(display){
    window.alert("Q : " + q + "\nP : " + p + "\nN : " + n + "\nPhi : " + phi + "\ne : " + e + "\nd : " + d );
    }

    //document.getElementById('text-out').value = text_out;
};
