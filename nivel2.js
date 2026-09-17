function estacionDos() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem; margin-bottom: 10px;">🏔️❄️✨</div>
            <h2>Nivel 2: La Montaña</h2>
            <p><strong>RETO DE ATENCIÓN:</strong> ¡Encuentra el diamante en 12 segundos!</p>
            <button class="btn btn-principal" style="background: #0288d1;" onclick="iniciarRetoMontaña()">¡Buscar Diamante! 💎</button>
        </div>
    `;
}

function iniciarRetoMontaña() {
    segundosRestantes = 12;
    pantalla.innerHTML = `
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 1.4rem;">💎 ¡Busca el brillo!</span>
                <span style="background: #ff9800; padding: 5px 15px; border-radius: 20px; color: white;">⏱️ <span id="tiempo-txt">12</span>s</span>
            </div>
            <div style="font-size: 2.8rem; letter-spacing: 12px; margin: 20px 0; background: #eceff1; padding: 20px; border-radius: 20px; line-height: 2;">
                🪨🪨🪨🪨🪨🪨<br>🪨🪨🪨🪨🪨🪨<br>🪨💎🪨🪨🪨🪨
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn" style="background: #e0e0e0; color: #333;" onclick="alert('Eso es una piedra 🪨')">Rocas 🪨</button>
                <button class="btn btn-principal" style="background: #00bcd4;" onclick="retoMontañaGanado()">¡El Diamante! 💎</button>
            </div>
        </div>
    `;

    tiempo = setInterval(function() {
        segundosRestantes--;
        document.getElementById("tiempo-txt").innerText = segundosRestantes;
        if (segundosRestantes <= 0) {
            clearInterval(tiempo);
            estacionDos();
        }
    }, 1000);
}

function retoMontañaGanado() {
    clearInterval(tiempo);
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem;">🏔️👑✨</div>
            <h2>¡Encontrado! 💎</h2>
            <p>👵 <strong>El Sabio pregunta:</strong> ¿Cuál es el océano más grande del mundo?</p>
            <button class="btn" style="border: 2px solid #ffab91;" onclick="alert('Ese es hermoso, pero hay uno más grande en el mapa! 🗺️')">🏊‍♂️ El de mi ciudad</button>
            <button class="btn btn-principal" onclick="retoValores2()">🌎 El Océano Pacífico</button>
        </div>
    `;
}

function retoValores2() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem;">🎒🪙✨</div>
            <h2>Prueba de Honestidad</h2>
            <p>Te encuentras una mochila con monedas de oro de un Guardián. Nadie te ve. ¿Qué haces?</p>
            <button class="btn btn-valores" style="background: #ffb74d;" onclick="alert('La magia de la montaña solo premia la verdad. ¡Devuélvela! 💖')">💰 Quedármela</button>
            <button class="btn btn-valores" style="background: #81c784;" onclick="ganarGema2()">🤝 Buscar al Guardián y devolverla</button>
        </div>
    `;
}

function ganarGema2() {
    actualizarGemas();
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 5rem;">🔵</div>
            <h2>¡Gema de la Honestidad!</h2>
            <p>¡Has ganado tu segunda gema: la Gema Azul! 🤝✨</p>
            <button class="btn btn-principal" onclick="proximamenteNivel3()">Ir al Valle de la Perseverancia 🏞️🚀</button>
        </div>
    `;
}
