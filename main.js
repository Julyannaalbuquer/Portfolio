//Função de baixar arquivos
document.getElementById('btn-certificado').addEventListener('click', function() {
    const pdfUrl = './assets/Profile.pdf';

    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'Currículo.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});



