// ==========================================
// 🏞️ NIVEL 3: EL VALLE DE LA PERSEVERANCIA
// ==========================================
function proximamenteNivel3() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem; margin-bottom: 10px;">🏞️⚡✨</div>
            <h2>Nivel 3: El Valle</h2>
            <p style="font-size: 1.3rem;">¡Has llegado al Valle de la Perseverancia!</p>
            <div style="background: #fff9c4; padding: 15px; border-radius: 15px; margin-bottom: 20px; border: 2px dashed #fbc02d;">
                <p style="margin: 0; font-weight: bold; color: #f57f17;">⏱️ RETO MÁGICO DE MEMORIA:</p>
                <p style="margin: 0; font-size: 1.1rem;">¡Mira con mucha atención la serie de figuras y descubre cuál es la que sigue!</p>
            </div>
            <button class="btn btn-principal" style="background: #fbc02d; box-shadow: 0 6px #f57f17; color: #333;" onclick="iniciarRetoValle()">¡Ver la Secuencia! 🧠</button>
        </div>
    `;
}

function iniciarRetoValle() {
    segundosRestantes = 15;
    pantalla.innerHTML = `
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 1.4rem;">🧩 ¿Qué figura sigue?</span>
                <span style="background: #ff9800; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 1.2rem; color: white;">⏱️ <span id="tiempo-txt">15</span>s</span>
            </div>
            
            <!-- Patrón de figuras para concentración en serie -->
            <div style="font-size: 3rem; letter-spacing: 10px; margin: 20px 0; background: #fffde7; padding: 20px; border-radius: 20px; border: 3px solid #fff59d;">
                🔴 🔵 🔴 🔵 🔴 ...
            </div>
            
            <p style="font-size: 1.2rem; color: #546e7a; font-weight: bold;">Si el patrón se repite, ¿cuál viene ahora?</p>
            
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-principal" style="background: #2196f3; box-shadow: 0 6px #0d47a1;" onclick="retoValleGanado()">Círculo Azul 🔵</button>
                <button class="btn" style="background: #e53935; box-shadow: 0 6px #b71c1c; color: white;" onclick="alert('¡Casi! Fíjate bien cuál va después del círculo rojo. 🔴')">Círculo Rojo 🔴</button>
            </div>
        </div>
    `;

    tiempo = setInterval(function() {
        segundosRestantes--;
        document.getElementById("tiempo-txt").innerText = segundosRestantes;
        if (segundosRestantes <= 0) {
            clearInterval(tiempo);
            proximamenteNivel3();
        }
    }, 1000);
}

function retoValleGanado() {
    clearInterval(tiempo);
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem;">🍎🧐✨</div>
            <h2>¡Excelente lógica! 🎯</h2>
            <p style="font-size: 1.2rem; font-weight: bold; color: #f57f17;">Completaste la serie a la perfección.</p>
            <div style="background: #e8f5e9; padding: 15px; border-radius: 15px; margin: 15px 0; border: 2px solid #a5d6a7;">
                <p style="margin: 0; font-size: 1.2rem;">🍎 <strong>Acertijo Matemático:</strong><br>Si tienes 3 manzanas y tu mamá te regala el doble... ¿Cuántas manzanas tienes en total?</p>
            </div>
            <button class="btn" style="background: #fff; color: #333; border: 3px solid #b0bec5; box-shadow: 0 6px #78909c; padding: 15px;" onclick="alert('¡El doble de 3 es 6! Súmalas a tus 3 manzanas iniciales. 🍎')">Tengo 6 manzanas</button>
            <button class="btn btn-principal" style="background: #ffb74d; box-shadow: 0 6px #f57c00;" onclick="retoValores3()">Tengo 9 manzanas 🍎</button>
        </div>
    `;
}

function retoValores3() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem;">🧗‍♀️💔✨</div>
            <h2>Prueba de la Perseverancia</h2>
            <p style="font-size: 1.2rem;">Estás intentando cruzar un puente colgante muy difícil. Te has caído dos veces seguidas y tus rodillas están un poco cansadas. ¿Qué decides hacer?</p>
            <button class="btn btn-valores" style="background: #e57373; box-shadow: 0 6px #c62828;" onclick="alert('Si regresas a casa no sabrás si podías lograrlo. Las Guardianas respiran profundo y lo vuelven a intentar. 💖')">Me rindo y regreso a casa triste. 😢</button>
            <button class="btn btn-valores" style="background: #81c784; box-shadow: 0 6px #2e7d32;" onclick="ganarGema3()">Respiro hondo, analizo en qué fallé y lo intento otra vez. 💪</button>
        </div>
    `;
}

function ganarGema3() {
    actualizarGemas();
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 5rem; text-shadow: 0 0 20px #fbc02d;">🟡</div>
            <h2>¡Gema de la Perseverancia!</h2>
            <p style="font-size: 1.3rem; color: #f57f17; font-weight: bold;">¡Tu esfuerzo y paciencia te han llevado a la victoria! 🏆⭐</p>
            <p>Has ganado tu tercera gema: la <strong>Gema Amarilla</strong>.</p>
            <button class="btn btn-principal" style="background: #9c27b0; box-shadow: 0 6px #4a148c;" onclick="proximamenteNivel4()">Ir a la Isla del Respeto 🏝️🐢</button>
        </div>
    `;
}

function proximamenteNivel4() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 5rem;">🏝️🐢🌊</div>
            <h2>¡Tres gemas en tu poder!</h2>
            <p style="font-size: 1.3rem;">Rebeca ya acumuló las gemas 🟢, 🔵 y 🟡.</p>
            <p>¡El juego se está convirtiendo en una gran aventura de valores!</p>
        </div>
    `;
}