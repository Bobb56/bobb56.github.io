var keepCode = true;
var canInput = true;



function _print_(string)
{
  var aff = document.getElementById('console');

  // va vérifier qu'il ne faut pas clear la console
  if (string.indexOf("T5#sD9@jPzQ7fH*2m$1") != -1) // code d'effacage de la console
  {
    aff.value = "";
    return;
  }
  
  if (aff.value != '')// pour simuler le console.log
    aff.value += '\n';
  
  aff.value += string;
  
  aff.scrollTop = aff.scrollHeight;
}


function exec(string)
{
  ccall('execCode', null, ['string'], [string]);
}



function clear_console()
{
  document.getElementById('console').value = "";
}

function neon_init()
{
  ccall('neonExit', null, null, null);
  ccall('neonInit', null, null, null);
}

function keep_code()
{
  keepCode = !keepCode;
}

function ok_button()
{
  var contenu = document.getElementById('entree').value;
  
  Module.ccall('execCode',null,['string'],[contenu]);
  
  if (!keepCode)
    document.getElementById('entree').setRangeText("", 0, contenu.length); // vide l'entrée
}