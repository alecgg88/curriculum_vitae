

function inicio(){
document.getElementById('estudio').style.display='none';
document.getElementById('experiencia').style.display='none';
document.getElementById('otros').style.display='none';
document.getElementById('hob').style.display='none';
document.getElementById('cont').style.display='none';
document.getElementById('yo').style.display = 'block';	
}




document.getElementById('sobre-mi').addEventListener('click', function() {
document.getElementById('estudio').style.display='none';
document.getElementById('experiencia').style.display='none';
document.getElementById('otros').style.display='none';
document.getElementById('hob').style.display='none';
document.getElementById('cont').style.display='none';
document.getElementById('yo').style.display = 'block';
})

document.getElementById('estudios').addEventListener('click',function() {
document.getElementById('estudio').style.display = 'block';
document.getElementById('experiencia').style.display = 'none';
document.getElementById('otros').style.display = 'none';
document.getElementById('hob').style.display = 'none';
document.getElementById('cont').style.display = 'none';
document.getElementById('yo').style.display = 'none';
})
document.getElementById('laboral').addEventListener('click',function() {
document.getElementById('estudio').style.display = 'none';
document.getElementById('experiencia').style.display = 'block';
document.getElementById('otros').style.display = 'none';
document.getElementById('hob').style.display = 'none';
document.getElementById('cont').style.display = 'none';
document.getElementById('yo').style.display = 'none';
})

document.getElementById('conocimientos').addEventListener('click',function() {
document.getElementById('estudio').style.display = 'none';
document.getElementById('experiencia').style.display = 'none';
document.getElementById('otros').style.display = 'block';
document.getElementById('hob').style.display = 'none';
document.getElementById('cont').style.display = 'none';
document.getElementById('yo').style.display = 'none';
})

document.getElementById('hobbies').addEventListener('click',function() {
document.getElementById('estudio').style.display = 'none';
document.getElementById('experiencia').style.display = 'none';
document.getElementById('otros').style.display = 'none';
document.getElementById('hob').style.display = 'block';
document.getElementById('cont').style.display = 'none';
document.getElementById('yo').style.display = 'none';
})
document.getElementById('contacto').addEventListener('click',function() {
document.getElementById('estudio').style.display = 'none';
document.getElementById('experiencia').style.display = 'none';
document.getElementById('otros').style.display = 'none';
document.getElementById('hob').style.display = 'none';
document.getElementById('cont').style.display = 'block';
document.getElementById('yo').style.display = 'none';
})



