let gemas = 0;
let tiempo;
let segundosRestantes = 15;
const pantalla = document.getElementById("pantalla-juego");
const contadorGemas = document.getElementById("gemas-count");

function actualizarGemas() {
    gemas++;
    contadorGemas.innerText = gemas;
}

// 1. BIENVENIDA SUPER VISUAL
function iniciarMision() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem; margin-bottom: 10px;">🌳🧚‍♀️✨</div>
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

// 2. RETO DE CONCENTRACIÓN CON MATRIZ DE COLORES
function iniciarRetoConcentracion() {
    segundosRestantes = 15;
    
    pantalla.innerHTML = `
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 1.5rem;">🎯 ¡Busca al diferente!</span>
                <span style="background: #ffc107; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 1.2rem;">⏱️ <span id="tiempo-txt">15</span>s</span>
            </div>
            
            <!-- Cuadrícula llena de figuras llamativas -->
            <div style="font-size: 2.8rem; letter-spacing: 12px; margin: 20px 0; background: #e1f5fe; padding: 20px; border-radius: 20px; line-height: 2; border: 3px solid #b3e5fc;">
                🌸🌸🌸🌸🌸🌸<br>
                🌸🌸🌸🌸🌸🌸<br>
                🌸🌸🌸🐿️🌸🌸<br>
                🌸🌸🌸🌸🌸🌸
            </div>
            
            <p style="font-size: 1.1rem; color: #546e7a;">¿Dónde está la ardilla oculta entre las flores?</p>
            
            <div style="display: flex; gap: 10px;">
                <button class="btn" style="background: #e0e0e0; color: #333; box-shadow: 0 6px #9e9e9e;" onclick="retoConcentracionFallado()">Flores 🌸</button>
                <button class="btn btn-principal" onclick="retoConcentracionGanado()">¡La ardilla! 🐿️</button>
            </div>
        </div>
    `;

    tiempo = setInterval(function() {
        segundosRestantes--;
        document.getElementById("tiempo-txt").innerText = segundosRestantes;
        
        if (segundosRestantes <= 0) {
            clearInterval(tiempo);
            pantalla.innerHTML = `
                <div class="card">
                    <div style="font-size: 4rem;">🌀✨🍃</div>
                    <h2>¡El bosque cambió!</h2>
                    <p>¡Casi lo logras! Respira hondo como un oso y vuelve a intentarlo.</p>
                    <button class="btn btn-principal" onclick="iniciarRetoConcentracion()">Intentar otra vez 🔄</button>
                </div>
            `;
        }
    }, 1000);
}

function retoConcentracionFallado() {
    alert("¡Esas son hermosas flores! Mira con cuidado fila por fila para atrapar a la ardilla saltarina. 🐿️");
}

// 3. PREGUNTA DE CONOCIMIENTO (CON TARJETAS DE FIGURAS)
function retoConcentracionGanado() {
    clearInterval(tiempo);
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem; animation: pulse 1s infinite;">🎯🏆🎉</div>
            <h2>¡Lo lograste!</h2>
            <p style="font-size: 1.2rem; font-weight: bold; color: #2e7d32;">¡Tus ojos son súper veloces! 🐿️</p>
            
            <div style="background: #f1f8e9; padding: 15px; border-radius: 15px; margin: 15px 0; border: 2px solid #c5e1a5;">
                <p style="margin: 0; font-size: 1.2rem;">🐝 <strong>El Castor pregunta:</strong><br>¿Por qué son importantes las abejas?</p>
            </div>
            
            <!-- Opciones convertidas en tarjetas grandes con dibujos -->
            <button class="btn" style="background: #fff; color: #333; border: 3px solid #ffb74d; box-shadow: 0 6px #ff9800; padding: 15px;" onclick="respuestaIncorrecta()">
                <span style="font-size: 2rem;">🍯</span><br>Solo para darnos miel rica
            </button>
            
            <button class="btn" style="background: #fff; color: #333; border: 3px solid #81c784; box-shadow: 0 6px #4caf50; padding: 15px;" onclick="retoValores1()">
                <span style="font-size: 2rem;">🌸🌱</span><br>Para hacer nuevas flores y plantas
            </button>
        </div>
    `;
}

function respuestaIncorrecta() {
    alert("¡La miel es deliciosa! Pero piensa en las plantitas... ¿qué otra cosa hacen las abejas con las flores? 🌸");
}

// 4. DILEMA DE VALORES VISUAL
function retoValores1() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 4rem;">✨💖✨</div>
            <h2>Misión del Corazón</h2>
            <p style="font-size: 1.2rem;">Un pajarito bebé se cayó de su nido y está asustado. 🐣😭</p>
            
            <div style="background: #f3e5f5; padding: 12px; border-radius: 15px; margin-bottom: 15px; border: 1px dashed #ce93d8;">
                <p style="margin: 0; font-size: 1rem; color: #6a1b9a;">¿Qué hace una verdadera Guardiana?</p>
            </div>

            <button class="btn btn-valores" style="background: #e57373; box-shadow: 0 6px #c62828;" onclick="ganarGema1(false)">
                🏃‍♀️ Caminar rápido y dejarlo ahí.
            </button>
            
            <button class="btn btn-valores" style="background: #81c784; box-shadow: 0 6px #2e7d32;" onclick="ganarGema1(true)">
                🐦💚 Detenerse a cuidarlo y ayudarlo.
            </button>
        </div>
    `;
}

function ganarGema1(ayudoAlPajaro) {
    if (ayudoAlPajaro) {
        actualizarGemas();
        pantalla.innerHTML = `
            <div class="card">
                <div style="font-size: 5rem; text-shadow: 0 0 20px #81c784;">🟢</div>
                <h2>¡Gema Ganada!</h2>
                <p style="font-size: 1.3rem; color: #2e7d32; font-weight: bold;">¡El pajarito canta feliz gracias a ti! 🐦🎶</p>
                <p>Has conseguido la <strong>Gema de la Empatía</strong>.</p>
                
                <button class="btn btn-principal" onclick="estacionDos()">Subir a la Montaña 🏔️🚀</button>
            </div>
        `;
    } else {
        alert("¡Oh no! El pajarito tiene miedo. Las Guardianas del mundo usan su gran corazón para proteger a los animales. ¡Elige la opción de ayudarlo! 💚");
    }
}

function estacionDos() {
    pantalla.innerHTML = `
        <div class="card">
            <div style="font-size: 5rem;">🏔️💎👑</div>
            <h2>¡Nivel 1 Completado!</h2>
            <p style="font-size: 1.2rem;">¡Has guardado con éxito la primera gema en internet!</p>
            <p>¿Lista para diseñar los desafíos visuales del siguiente nivel?</p>
        </div>
    `;
}
