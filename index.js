function myFunction(){
    document.getElementById('demo').style.right = '0%';
    document.getElementById('m').style.display = 'none';
    document.getElementById('x').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function myFunction2(){
    document.getElementById('demo').style.right = '-100%';
    document.getElementById('m').style.display = 'flex';
    document.getElementById('x').style.display = 'none';
    document.body.style.overflow = 'scroll';
}