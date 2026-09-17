function iniciarMision() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem; margin-bottom: 10px;">🌳 Fairy ✨</div>
            <h2>Nivel 1: El Bosque</h2>
            <p style="font-size: 1.3rem;">¡Usa tus ojos de súper exploradora para entrar!</p>
            <div style="background: #fff3e0; padding: 15px; border-radius: 15px; margin-bottom: 20px; border: 2px dashed #ffb74d;">
                <p style="margin: 0; font-weight: bold; color: #e65100;">⏱️ RETO MÁGICO:</p>
                <p style="margin: 0; font-size: 1.1rem;">¡Encuentra al animalito intruso en 15 segundos!</p>
            </div>
            <button class="btn btn-principal" onclick="iniciarRetoConcentracion()">¡Empezar Ya! 🚀</button>
        </div>
    `;
}

function iniciarRetoConcentracion() {
    segundosRestantes = 15;
    pantalla.innerHTML = `
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 1.5rem;">🎯 ¡Busca al diferente!</span>
                <span style="background: #ffc107; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 1.2rem;">⏱️ <span id="tiempo-txt">15</span>s</span>
            </div>
            <div style="font-size: 2.8rem; letter-spacing: 12px; margin: 20px 0; background: #e1f5fe; padding: 20px; border-radius: 20px; line-height: 2; border: 3px solid #b3e5fc;">
                🌸🌸🌸🌸🌸🌸<br>🌸🌸🌸🌸🌸🌸<br>🌸🌸🌸🐿️🌸🌸<br>🌸🌸🌸🌸🌸🌸
            </div>
            <p style="font-size: 1.1rem; color: #546e7a;">¿Dónde está la ardilla oculta entre las flores?</p>
            <div style="display: flex; gap: 10px;">
                <button class="btn" style="background: #e0e0e0; color: #333;" onclick="alert('¡Esas son flores! Busca a la ardilla 🐿️')">Flores 🌸</button>
                <button class="btn btn-principal" onclick="retoConcentracionGanado()">¡La ardilla! 🐿️</button>
            </div>
        </div>
    `;

    tiempo = setInterval(function() {
        segundosRestantes--;
        document.getElementById("tiempo-txt").innerText = segundosRestantes;
        if (segundosRestantes <= 0) {
            clearInterval(tiempo);
            iniciarMision();
        }
    }, 1000);
}

function retoConcentracionGanado() {
    clearInterval(tiempo);
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem;">🎯🏆🎉</div>
            <h2>¡Lo lograste!</h2>
            <p style="font-size: 1.2rem; font-weight: bold; color: #2e7d32;">¡Tus ojos son súper veloces! 🐿️</p>
            <p>🐝 <strong>El Castor pregunta:</strong> ¿Por qué son importantes las abejas?</p>
            <button class="btn" style="border: 2px solid #ffb74d;" onclick="respuestaIncorrecta()">🍯 Solo hacen miel</button>
            <button class="btn btn-principal" onclick="retoValores1()">🌸 Hacen nuevas flores y plantas</button>
        </div>
    `;
}

function retoValores1() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem;">✨💖✨</div>
            <h2>Misión del Corazón</h2>
            <p style="font-size: 1.2rem;">Un pajarito bebé se cayó de su nido. ¿Qué hace una Guardiana? 🐣</p>
            <button class="btn btn-valores" style="background: #e57373;" onclick="alert('El pajarito tiene miedo. ¡Elige ayudarlo! 💚')">🏃‍♀️ Dejarlo ahí</button>
            <button class="btn btn-valores" style="background: #81c784;" onclick="ganarGema1()">🐦 Detenerse a cuidarlo</button>
        </div>
    `;
}

function ganarGema1() {
    actualizarGemas();
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 5rem;">🟢</div>
            <h2>¡Gema de la Empatía!</h2>
            <p>¡El pajarito canta feliz gracias a ti! 🐦🎶</p>
            <button class="btn btn-principal" onclick="estacionDos()">Subir a la Montaña 🏔️🚀</button>
        </div>
    `;
}