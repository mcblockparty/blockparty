// ============================================================
//  BLOCK PARTY — Cart & Shared Utilities
// ============================================================

// ---------- Cart Storage ----------
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('bp_cart') || '[]');
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('bp_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = cart.length;
    el.style.display = cart.length === 0 ? 'none' : '';
  });
}

// ---------- Add to Pack ----------
function addToPack(modelId, selectedVariants, selectedPositions) {
  const cart = getCart();
  const existing = cart.findIndex(i => i.id === modelId);
  const item = { id: modelId, variants: selectedVariants, positions: selectedPositions };
  if (existing >= 0) cart[existing] = item;
  else cart.push(item);
  saveCart(cart);
  showToast('Added to your pack!');
}

function quickAdd(modelId) {
  const model = MODELS.find(m => m.id === modelId);
  if (!model) return;
  const allVariants = model.variants.map(v => v.code);
  const allPositions = model.positions.map(p => p.code);
  addToPack(modelId, allVariants, allPositions);
  showToast(`${model.name} — all variants added!`);
}

function removeFromPack(modelId) {
  const cart = getCart().filter(i => i.id !== modelId);
  saveCart(cart);
}

// ---------- Toast ----------
let toastTimer;
function showToast(msg) {
  let toast = document.getElementById('bp-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'bp-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ---------- Nav active state ----------
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('active', href === page || (page === 'index.html' && href === 'index.html'));
  });
}

// ---------- Init on load ----------
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  setActiveNav();
});
