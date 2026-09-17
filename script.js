let gemas = 0;
let tiempo;
let segundosRestantes = 15;
const pantalla = document.getElementById("pantalla-juego");
const contadorGemas = document.getElementById("gemas-count");

function actualizarGemas() {
    gemas++;
    contadorGemas.innerText = gemas;
}

// 1. INICIO DE LA AVENTURA
function iniciarMision() {
    pantalla.innerHTML = `
        <div class="card">
            <h2>Estación 1: El Bosque de la Empatía 🌳</h2>
            <p>¡Para entrar al bosque necesitas enfocar tus ojos de Guardiana!</p>
            <p><strong>RETO DE CONCENTRACIÓN:</strong> Tienes 15 segundos para encontrar al animalito intruso que está escondido entre las plantas.</p>
            <button class="btn btn-principal" onclick="iniciarRetoConcentracion()">¡Empezar Reto Ya! ⏱️</button>
        </div>
    `;
}

// 2. JUEGO DE CONCENTRACIÓN (ENCUENTRA EL INTRUSO)
function iniciarRetoConcentracion() {
    segundosRestantes = 15;
    
    pantalla.innerHTML = `
        <div class="card">
            <h2>¡Busca al diferente! ⏱️ <span id="tiempo-txt">15</span>s</h2>
            <p>¿Dónde está el animalito que NO es una planta?</p>
            
            <!-- Grupo de emojis para concentración visual -->
            <div style="font-size: 2.5rem; letter-spacing: 10px; margin: 20px 0; background: #e1f5fe; padding: 15px; border-radius: 15px; line-height: 1.8;">
                🌿🌿🌿🌿🌿🌿🌿<br>
                🌿🌿🌿🌿🌿🌿🌿<br>
                🌿🌿🌿🌿🐿️🌿🌿<br>
                🌿🌿🌿🌿🌿🌿🌿
            </div>
            
            <button class="btn" onclick="retoConcentracionFallado()">¡Hacer clic en las plantas! 🌿</button>
            <button class="btn btn-principal" onclick="retoConcentracionGanado()">¡Encontré la Ardilla! 🐿️</button>
        </div>
    `;

    // Iniciar el cronómetro de atención
    tiempo = setInterval(function() {
        segundosRestantes--;
        document.getElementById("tiempo-txt").innerText = segundosRestantes;
        
        if (segundosRestantes <= 0) {
            clearInterval(tiempo);
            pantalla.innerHTML = `
                <div class="card">
                    <h2>¡Se acabó el tiempo! 🔄</h2>
                    <p>El bosque cambió de forma. ¡No te preocupes, respira hondo e inténtalo otra vez para entrenar tus ojos!</p>
                    <button class="btn btn-principal" onclick="iniciarRetoConcentracion()">Volver a intentar ⏱️</button>
                </div>
            `;
        }
    }, 1000);
}

function retoConcentracionFallado() {
    alert("¡Esas son plantas normales! Mira con mucha atención fila por fila para encontrar al animalito oculto.");
}

// 3. RETO DE CONOCIMIENTO
function retoConcentracionGanado() {
    clearInterval(tiempo); // Detiene el reloj
    pantalla.innerHTML = `
        <div class="card">
            <h2>¡Excelente concentración! 🎯🐿️</h2>
            <p>¡Encontraste a la ardilla muy rápido! Has demostrado gran atención visual.</p>
            <hr style="margin: 15px 0; border: 1px dashed #b0bec5;">
            <h3>Pregunta de Conocimiento:</h3>
            <p>Para cruzar el río del bosque, el castor te pregunta:<br><strong>¿Por qué las abejas son tan importantes para la naturaleza?</strong></p>
            <button class="btn" onclick="respuestaIncorrecta()">Porque hacen miel rica para nosotros 🍯</button>
            <button class="btn btn-principal" onclick="retoValores1()">Porque ayudan a que nazcan nuevas flores y plantas (Polinización) 🌸</button>
        </div>
    `;
}

function respuestaIncorrecta() {
    alert("¡La miel es deliciosa! Pero las abejas hacen un trabajo mucho más grande e importante para todo el planeta. ¡Prueba la otra opción!");
}

// 4. RETO DE VALORES (EMPATÍA)
function retoValores1() {
    pantalla.innerHTML = `
        <div class="card">
            <h2>✨ Dilema del Corazón: La Empatía ✨</h2>
            <p>Un pajarito bebé se ha caído de su nido cerca del camino y está piando triste. Si te detienes a ayudarlo perderás tiempo para buscar tu gema. ¿Qué hace una Guardiana?</p>
            <button class="btn btn-valores" onclick="ganarGema1(false)">Sigo caminando rápido, mi meta es más importante. 🏃‍♀️</button>
            <button class="btn btn-valores" onclick="ganarGema1(true)">Me detengo, lo acompaño y pido ayuda para subirlo a su nido. 🐦💚</button>
        </div>
    `;
}

function ganarGema1(ayudoAlPajaro) {
    if (ayudoAlPajaro) {
        actualizarGemas();
        pantalla.innerHTML = `
            <div class="card">
                <h2>¡Eres fantástica! 💚🤩</h2>
                <p>Tu empatía y gran corazón han salvado al pajarito. El bosque está feliz contigo.</p>
                <h3 style="font-size: 4rem; margin: 15px 0; animation: pulse 1s infinite;">🟢</h3>
                <p><strong>¡Has ganado la Gema Verde de la Empatía!</strong></p>
                <button class="btn btn-principal" onclick="estacionDos()">Ir a la Montaña de la Honestidad 🏔️</button>
            </div>
        `;
    } else {
        alert("El pajarito se queda piando con frío. Las Guardianas usan sus poderes para proteger a los que están en problemas. ¡Elige con el corazón!");
    }
}

// 5. MARCADOR DE POSICIÓN PARA EL SIGUIENTE NIVEL
function estacionDos() {
    pantalla.innerHTML = `
        <div class="card">
            <h2>🏔️ Estación 2: La Montaña de la Honestidad</h2>
            <p>¡Felicidades! Has completado el primer nivel de tu juego en Visual Studio Code.</p>
            <p>La niña ya puede entrenar su concentración con el reloj y ganar su primera gema.</p>
        </div>
    `;
}