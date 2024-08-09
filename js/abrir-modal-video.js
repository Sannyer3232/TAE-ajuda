function abrirModalVideo() {
    const modal = document.getElementById('janela-modal-alerta');
    modal.classList.add('abrir');
    const video = document.getElementById('video');
    
    // Verificação para depuração
    console.log("ID: " + id);
    
    video.scr = './assets/videos/membros.mp4';

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal-video' || e.target.id == 'fechar-alerta') {
            modal.classList.remove('abrir');
        }
    });
}

document.getElementById('fechar').addEventListener('click', () => {
    document.getElementById('janela-modal-video').classList.remove('abrir');
});

document.getElementById('fechar-alerta').addEventListener('click', () => {
    document.getElementById('janela-modal-video').classList.remove('abrir');
});
