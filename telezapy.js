document.getElementById('curiosidade-btn').onclick = function() {
    const curiosidades = [
        'O oxigênio é o terceiro elemento mais abundante do universo, atrás apenas do hidrogênio e do hélio.',
        'O oxigênio puro é altamente reativo e pode ser perigoso em altas concentrações.',
        'O oxigênio foi nomeado por Antoine Lavoisier, que também ajudou a descrever o processo de combustão.',
        'O oxigênio líquido é magnético e pode ser atraído por ímãs fortes.'
    ];
    const idx = Math.floor(Math.random() * curiosidades.length);
    document.getElementById('curiosidade-extra').textContent = curiosidades[idx];
};
