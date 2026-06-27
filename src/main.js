/**
 * Bloom — CSS Blossoming Flowers at Magical Night
 * Starts the CSS animation, adds floating hearts + personal message.
 */

const params = new URLSearchParams(window.location.search);
const recipientName = (params.get('for') || params.get('name') || 'crush').trim();
const customMessage = 'Congratulations! Engilou';

// Start animation after a brief pause
setTimeout(() => {
    document.body.classList.remove('not-loaded');
}, 1000);

// Butterflies
function butterflySVG(cA, cB) {
    return `<svg viewBox="-32 -26 64 52" xmlns="http://www.w3.org/2000/svg">
        <g><path d="M0,0 C-28,-22 -32,-2 -16,9 C-8,14 -2,7 0,0 Z" fill="${cA}"/><path d="M0,2 C-18,5 -24,18 -12,21 C-5,23 -1,12 0,4 Z" fill="${cB}"/></g>
        <g><path d="M0,0 C28,-22 32,-2 16,9 C8,14 2,7 0,0 Z" fill="${cA}"/><path d="M0,2 C18,5 24,18 12,21 C5,23 1,12 0,4 Z" fill="${cB}"/></g>
        <ellipse cx="0" cy="1" rx="1.5" ry="9" fill="#3a2a1a"/>
    </svg>`;
}

function buildButterflies() {
    const host = document.getElementById('butterflies');
    const palettes = [['#f6c9a8','#e9a878'], ['#cbb6e6','#a98fd0'], ['#f3d99a','#e6bf66'], ['#f5b8c4','#e08fa0'], ['#b8e6cc','#78c9a0']];
    const count = window.innerWidth < 520 ? 4 : 6;
    let html = '';
    for (let i = 0; i < count; i++) {
        const p = palettes[i % palettes.length];
        const path = (i % 3) + 1;
        const dur = (16 + Math.random() * 14).toFixed(1);
        const del = (-Math.random() * 20).toFixed(1);
        const top = (10 + Math.random() * 50).toFixed(0);
        const size = (26 + Math.random() * 20).toFixed(0);
        const flap = (0.28 + Math.random() * 0.14).toFixed(2);
        const glow = (2 + Math.random() * 1.5).toFixed(1);
        html += `<div class="butterfly fly${path}" style="top:${top}%;width:${size}px;--dur:${dur}s;--del:${del}s;--flap:${flap}s;--glow:${glow}s;--bf-glow:${p[0]}44">` +
            `<div class="bf-body"><div class="bf-glow"></div>${butterflySVG(p[0], p[1])}</div></div>`;
    }
    host.innerHTML = html;
}

// Floating hearts
function buildHearts() {
    const host = document.getElementById('hearts');
    const count = window.innerWidth < 520 ? 6 : 9;
    let html = '';
    for (let i = 0; i < count; i++) {
        const x = 4 + Math.random() * 92;
        const y = 4 + Math.random() * 65;
        const size = 16 + Math.random() * 28;
        const dur = (3.5 + Math.random() * 4).toFixed(1);
        const del = (-Math.random() * 5).toFixed(1);
        const rot = (-15 + Math.random() * 30).toFixed(0);
        const circled = Math.random() > 0.4;

        if (circled) {
            html += `<div class="heart-item" style="left:${x.toFixed(1)}%;top:${y.toFixed(1)}%;--hd:${dur}s;--hdel:${del}s;--hr:${rot}deg;opacity:${(0.5 + Math.random() * 0.3).toFixed(2)}">
                <svg width="${(size * 1.5).toFixed(0)}" height="${(size * 1.5).toFixed(0)}" viewBox="0 0 44 44">
                    <circle cx="22" cy="22" r="19" fill="none" stroke="hsl(340,50%,65%)" stroke-width="1.6" opacity="0.65"/>
                    <path d="M22 31 C15 25 12 22 15 19 C16.5 17.5 19 18 22 21 C25 18 27.5 17.5 29 19 C32 22 29 25 22 31 Z" fill="hsl(340,58%,65%)"/>
                </svg>
            </div>`;
        } else {
            html += `<div class="heart-item" style="left:${x.toFixed(1)}%;top:${y.toFixed(1)}%;--hd:${dur}s;--hdel:${del}s;--hr:${rot}deg;opacity:${(0.45 + Math.random() * 0.35).toFixed(2)}">
                <svg width="${size.toFixed(0)}" height="${size.toFixed(0)}" viewBox="0 0 24 24">
                    <path d="M12 21 C4 14 2 10 5 7 C7 5 10 6 12 9 C14 6 17 5 19 7 C22 10 20 14 12 21 Z" fill="hsl(340,62%,66%)"/>
                </svg>
            </div>`;
        }
    }
    host.innerHTML = html;
}

// Message
function setupMessage() {
    const msg = document.getElementById('message');
    msg.innerHTML = customMessage.replace(/\n/g, '<br>');
    setTimeout(() => msg.classList.add('show'), 6000);
}

buildButterflies();
setupMessage();
