function convert() {
  let fi = document.getElementById("fi").value;
  let output = document.getElementById("output");

  let inBase = document.getElementById("in");
  inBase = inBase.options[inBase.selectedIndex].value;
  let outBase = document.getElementById("out");
  outBase = outBase.options[outBase.selectedIndex].value;

  if (fi !== ''){
    if (inBase == 'bin') {
      if (outBase == 'oct') {
        output.innerHTML = binToOct(fi);
      } else if (outBase == 'dec') {
        output.innerHTML = binToDec(fi);
      } else if (outBase == 'hex') {
        output.innerHTML = binToHex(fi);
      }
    } else if (inBase == 'oct') {
      if (outBase == 'bin') {
        output.innerHTML = octToBin(fi);
      } else if (outBase == 'dec') {
        output.innerHTML = octToDec(fi);
      } else if (outBase == 'hex') {
        output.innerHTML = octToHex(fi);
      }
    } else if (inBase == 'dec') {
      if (outBase == 'bin') {
        output.innerHTML = decToBin(fi);
      } else if (outBase == 'oct') {
        output.innerHTML = decToOct(fi);
      } else if (outBase == 'hex') {
        output.innerHTML = decToHex(fi);
      }
    } else if (inBase == 'hex') {
      if (outBase == 'bin') {
        output.innerHTML = hexToBin(fi);
      } else if (outBase == 'oct') {
        output.innerHTML = hexToOct(fi);
      } else if (outBase == 'dec') {
        output.innerHTML = hexToDec(fi);
      }
    }
  } else {
    output.innerHTML = '';
  }


  return false;
}

function hide() {
  let inBase = document.getElementById("in");
  inBase = inBase.options[inBase.selectedIndex].value;

  if (inBase == 'bin') {
    document.getElementById('bin').style['display'] = 'none';
    document.getElementById('oct').style['display'] = 'block';
    document.getElementById('dec').style['display'] = 'block';
    document.getElementById('hex').style['display'] = 'block';
  } else if (inBase == 'oct') {
    document.getElementById('bin').style['display'] = 'block';
    document.getElementById('oct').style['display'] = 'none';
    document.getElementById('dec').style['display'] = 'block';
    document.getElementById('hex').style['display'] = 'block';
  } else if (inBase == 'dec') {
    document.getElementById('bin').style['display'] = 'block';
    document.getElementById('oct').style['display'] = 'block';
    document.getElementById('dec').style['display'] = 'none';
    document.getElementById('hex').style['display'] = 'block';
  } else if (inBase == 'hex') {
    document.getElementById('bin').style['display'] = 'block';
    document.getElementById('oct').style['display'] = 'block';
    document.getElementById('dec').style['display'] = 'block';
    document.getElementById('hex').style['display'] = 'none';
  }

  document.getElementById('out').selectedIndex = -1;
}

//Binary
function binToBin(num) {
  return parseInt(num, 2).toString(2)
}

function binToOct(num) {
  return parseInt(num, 2).toString(8)
}

function binToDec(num) {
  return parseInt(num, 2).toString(10)
}

function binToHex(num) {
  return parseInt(num, 2).toString(16)
}

//Octal
function octToBin(num) {
  return parseInt(num, 8).toString(2)
}

function octToOct(num) {
  return parseInt(num, 8).toString(8)
}

function octToDec(num) {
  return parseInt(num, 8).toString(10)
}

function octToHex(num) {
  return parseInt(num, 8).toString(16)
}

//Decimal
function decToBin(num) {
  return parseInt(num, 10).toString(2)
}

function decToOct(num) {
  return parseInt(num, 10).toString(8)
}

function decToDec(num) {
  return parseInt(num, 10).toString(10)
}

function decToHex(num) {
  return parseInt(num, 10).toString(16)
}

//Hexadecimal
function hexToBin(num) {
  return parseInt(num, 16).toString(2)
}

function hexToOct(num) {
  return parseInt(num, 16).toString(8)
}

function hexToDec(num) {
  return parseInt(num, 16).toString(10)
}

function hexToHex(num) {
  return parseInt(num, 16).toString(16)
}

