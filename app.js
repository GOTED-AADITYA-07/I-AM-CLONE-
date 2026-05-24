/* ============================
   AFFIRM APP — APP.JS
   ============================ */

'use strict';

// ─── DATA ───────────────────────────────────────────────────────────────────

const AFFIRMATIONS = {
  confidence: [
    { text: "I am worthy of all the good things life has to offer.", emoji: "💪" },
    { text: "I believe in my ability to overcome any challenge.", emoji: "🦁" },
    { text: "I radiate confidence, self-respect, and inner harmony.", emoji: "✨" },
    { text: "I am becoming the best version of myself every single day.", emoji: "🚀" },
    { text: "My voice matters and my ideas are valuable.", emoji: "🎯" },
    { text: "I walk boldly into every room knowing I belong here.", emoji: "💫" },
    { text: "I trust myself completely to handle whatever comes my way.", emoji: "🔥" },
    { text: "My potential is limitless and I embrace it fully.", emoji: "⚡" },
  ],
  gratitude: [
    { text: "I am deeply grateful for the abundance in my life.", emoji: "🙏" },
    { text: "Every day I find new reasons to be thankful.", emoji: "🌸" },
    { text: "I appreciate the beauty in small, everyday moments.", emoji: "🌿" },
    { text: "Gratitude opens my heart to receive more blessings.", emoji: "💝" },
    { text: "I am thankful for my body, my mind, and my spirit.", emoji: "🌟" },
    { text: "The universe conspires in my favor, and I am grateful.", emoji: "🌌" },
    { text: "I give thanks for every experience that has shaped me.", emoji: "🦋" },
    { text: "My heart overflows with gratitude for the people I love.", emoji: "❤️" },
  ],
  health: [
    { text: "My body is a temple and I nourish it with love.", emoji: "💚" },
    { text: "Every cell in my body vibrates with positive energy.", emoji: "⚡" },
    { text: "I am strong, healthy, and full of vibrant energy.", emoji: "🌱" },
    { text: "I choose foods and habits that honor my wellbeing.", emoji: "🥗" },
    { text: "My mind and body work in perfect harmony.", emoji: "🧘" },
    { text: "I wake up each day feeling refreshed and alive.", emoji: "🌅" },
    { text: "I am grateful for the incredible gift of my health.", emoji: "🫀" },
    { text: "Healing comes naturally and easily to me.", emoji: "🌿" },
  ],
  success: [
    { text: "I attract success and prosperity with effortless ease.", emoji: "🚀" },
    { text: "Every action I take moves me closer to my goals.", emoji: "🎯" },
    { text: "I am a magnet for opportunities and positive outcomes.", emoji: "💡" },
    { text: "Success is my natural state of being.", emoji: "👑" },
    { text: "I turn my dreams into plans and my plans into reality.", emoji: "📈" },
    { text: "I create my own luck through persistence and passion.", emoji: "⭐" },
    { text: "My hard work is transforming into extraordinary results.", emoji: "🏆" },
    { text: "I deserve success and I welcome it into my life now.", emoji: "🌠" },
  ],
  love: [
    { text: "I am worthy of deep, passionate, and lasting love.", emoji: "❤️" },
    { text: "Love flows to me and through me effortlessly.", emoji: "💕" },
    { text: "I attract loving, kind, and genuine people into my life.", emoji: "🌹" },
    { text: "I give and receive love with an open and grateful heart.", emoji: "💖" },
    { text: "I am lovable exactly as I am, right now.", emoji: "🥰" },
    { text: "My relationships are filled with joy, respect, and growth.", emoji: "👫" },
    { text: "I choose love over fear in every situation.", emoji: "✨" },
    { text: "The love I seek is also seeking me.", emoji: "🌺" },
  ],
  mindfulness: [
    { text: "I am present in this moment. This moment is enough.", emoji: "🧘" },
    { text: "My mind is calm, clear, and centered at all times.", emoji: "🌊" },
    { text: "I breathe in peace and breathe out all tension.", emoji: "🍃" },
    { text: "I observe my thoughts with compassion and let them pass.", emoji: "☁️" },
    { text: "I am at peace with my past and excited for my future.", emoji: "🌈" },
    { text: "Stillness is my superpower. I access it whenever I need.", emoji: "🕊️" },
    { text: "I choose how I respond to every situation in my life.", emoji: "⚖️" },
    { text: "Each breath I take fills me with calm and clarity.", emoji: "💨" },
  ],
  abundance: [
    { text: "Money flows to me from expected and unexpected sources.", emoji: "💰" },
    { text: "I am open to receiving unlimited abundance.", emoji: "🌊" },
    { text: "Wealth is a natural part of my thriving life.", emoji: "💎" },
    { text: "I deserve financial freedom and I am achieving it.", emoji: "🏦" },
    { text: "I attract prosperity in all areas of my life.", emoji: "✨" },
    { text: "My income exceeds my expenses with ease and grace.", emoji: "📊" },
    { text: "The universe provides everything I need at the right time.", emoji: "⭐" },
    { text: "I am grateful for the abundance that is flowing to me now.", emoji: "🌟" },
  ],
  joy: [
    { text: "Joy is my natural state. I choose happiness today.", emoji: "😊" },
    { text: "I radiate happiness and it comes back to me multiplied.", emoji: "☀️" },
    { text: "I find delight in the simplest pleasures of life.", emoji: "🎉" },
    { text: "My laughter is healing and my smile changes the world.", emoji: "😄" },
    { text: "I deserve to feel good and I allow myself to feel great.", emoji: "🌈" },
    { text: "Every morning I wake up with a heart full of joy.", emoji: "🌸" },
    { text: "I choose to see the bright side of every situation.", emoji: "🌞" },
    { text: "My life is filled with magical moments of pure joy.", emoji: "🎊" },
  ],
};

const CATEGORY_META = {
  confidence:   { label: "Confidence",   emoji: "💪", gradient: "grad-confidence" },
  gratitude:    { label: "Gratitude",    emoji: "🙏", gradient: "grad-gratitude"   },
  health:       { label: "Health",       emoji: "💚", gradient: "grad-health"       },
  success:      { label: "Success",      emoji: "🚀", gradient: "grad-success"      },
  love:         { label: "Love",         emoji: "❤️", gradient: "grad-love"          },
  mindfulness:  { label: "Mindfulness",  emoji: "🧘", gradient: "grad-mindfulness"  },
  abundance:    { label: "Abundance",    emoji: "💰", gradient: "grad-abundance"    },
  joy:          { label: "Joy",          emoji: "😊", gradient: "grad-joy"           },
};

// ─── STATE ──────────────────────────────────────────────────────────────────

const state = {
  onboardingStep: 1,
  selectedGoals:  [],
  currentPage:    'home',
  currentFilter:  'all',
  cardQueue:      [],
  cardIndex:      0,
  favorites:      [],
  streak:         0,
  bestStreak:     0,
  totalAffirmed:  0,
  completedDays:  [],   // ISO date strings "YYYY-MM-DD"
  reminderTime:   '08:00',
  reminderOn:     false,
  calendarMonth:  new Date(),
  isDragging:     false,
  dragStartX:     0,
  dragStartY:     0,
  currentCardEl:  null,
};

// ─── PERSISTENCE ────────────────────────────────────────────────────────────

function save() {
  localStorage.setItem('affirm_state', JSON.stringify({
    selectedGoals:  state.selectedGoals,
    favorites:      state.favorites,
    streak:         state.streak,
    bestStreak:     state.bestStreak,
    totalAffirmed:  state.totalAffirmed,
    completedDays:  state.completedDays,
    reminderTime:   state.reminderTime,
    reminderOn:     state.reminderOn,
    lastOpened:     new Date().toISOString().split('T')[0],
  }));
}

function load() {
  try {
    const raw = localStorage.getItem('affirm_state');
    if (!raw) return false;
    const data = JSON.parse(raw);
    Object.assign(state, data);

    // Streak logic: did they open yesterday?
    const today     = todayStr();
    const yesterday = offsetDate(-1);
    const lastOpened = data.lastOpened || '';

    if (lastOpened === today) {
      // same day, streak unchanged
    } else if (lastOpened === yesterday) {
      // opened yesterday: streak continues (increment only on first affirm today)
    } else if (lastOpened && lastOpened < yesterday) {
      // missed a day — reset streak
      state.streak = 0;
      save();
    }
    return true;
  } catch { return false; }
}

function todayStr() { return new Date().toISOString().split('T')[0]; }
function offsetDate(d) {
  const dt = new Date(); dt.setDate(dt.getDate() + d);
  return dt.toISOString().split('T')[0];
}

// ─── ONBOARDING ─────────────────────────────────────────────────────────────

function initOnboarding() {
  document.getElementById('onboard-next-btn').addEventListener('click', nextOnboardStep);
  document.getElementById('notif-skip').addEventListener('click', finishOnboarding);
  document.getElementById('enable-notif-btn').addEventListener('click', requestNotifAndFinish);

  document.querySelectorAll('.goal-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      const cat = chip.dataset.category;
      if (state.selectedGoals.includes(cat)) {
        state.selectedGoals = state.selectedGoals.filter(g => g !== cat);
      } else {
        state.selectedGoals.push(cat);
      }
    });
  });
}

function nextOnboardStep() {
  if (state.onboardingStep === 2 && state.selectedGoals.length === 0) {
    // select all by default
    state.selectedGoals = Object.keys(CATEGORY_META);
    document.querySelectorAll('.goal-chip').forEach(c => c.classList.add('selected'));
  }

  if (state.onboardingStep < 3) {
    setOnboardStep(state.onboardingStep + 1);
  } else {
    finishOnboarding();
  }
}

function setOnboardStep(step) {
  document.querySelectorAll('.onboard-slide').forEach(s => s.classList.remove('active'));
  document.querySelector(`[data-slide="${step}"]`).classList.add('active');
  document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
  document.querySelector(`[data-dot="${step}"]`).classList.add('active');
  document.getElementById('onboard-step-text').textContent = `${step} of 3`;
  document.getElementById('onboard-next-btn').textContent = step === 3 ? 'Get Started' : 'Continue';
  state.onboardingStep = step;
}

async function requestNotifAndFinish() {
  if ('Notification' in window) {
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      state.reminderOn = true;
      state.reminderTime = document.getElementById('reminder-time').value;
      showToast('🔔 Reminders enabled!');
      scheduleNotificationCheck();
    }
  }
  finishOnboarding();
}

function finishOnboarding() {
  state.completedDays = [];
  save();
  document.getElementById('onboarding').classList.add('hidden');
  launchApp();
}

// ─── APP LAUNCH ─────────────────────────────────────────────────────────────

function launchApp() {
  document.getElementById('app').classList.remove('hidden');
  buildCardQueue(state.currentFilter);
  renderCards();
  buildExploreGrid();
  renderFavorites();
  updateStreakUI();
  buildCalendar();
  setupNavigation();
  setupCardActions();
  setupCategoryFilter();
  setupStreakPage();
  updateGreeting();
}

// ─── CARD QUEUE ──────────────────────────────────────────────────────────────

function buildCardQueue(filter) {
  let pool = [];
  const categories = filter === 'all'
    ? (state.selectedGoals.length ? state.selectedGoals : Object.keys(AFFIRMATIONS))
    : [filter];

  categories.forEach(cat => {
    if (AFFIRMATIONS[cat]) {
      AFFIRMATIONS[cat].forEach(aff => pool.push({ ...aff, category: cat }));
    }
  });

  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  state.cardQueue = pool.slice(0, Math.min(pool.length, 15));
  state.cardIndex = 0;
}

// ─── CARD RENDERING ──────────────────────────────────────────────────────────

function renderCards() {
  const stack = document.getElementById('card-stack');
  stack.innerHTML = '';

  const total = state.cardQueue.length;
  if (total === 0) {
    stack.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-secondary);font-size:15px;text-align:center;padding:24px;">No affirmations found.<br>Adjust your category filter.</div>`;
    document.getElementById('card-counter').textContent = '';
    return;
  }

  // Show up to 3 cards stacked
  for (let i = Math.min(2, total - state.cardIndex - 1); i >= 0; i--) {
    const idx = state.cardIndex + i;
    if (idx >= total) continue;
    const card = createCardEl(state.cardQueue[idx], idx === state.cardIndex);
    if (i === 0) card.classList.add('top');
    else if (i === 1) card.classList.add('back-1');
    else card.classList.add('back-2');
    stack.appendChild(card);
  }

  updateCardCounter();
  attachSwipeToTop();
}

function createCardEl(aff, isTop) {
  const meta = CATEGORY_META[aff.category];
  const isSaved = state.favorites.some(f => f.text === aff.text);

  const card = document.createElement('div');
  card.className = 'affirm-card';
  card.dataset.text = aff.text;
  card.dataset.category = aff.category;

  card.innerHTML = `
    <div class="card-gradient ${meta.gradient}"></div>
    <div class="card-overlay"></div>
    <div class="card-inner">
      <div class="card-category-badge">${meta.emoji} ${meta.label}</div>
      <p class="card-text">${aff.text}</p>
      ${isTop ? `<p class="card-tap-hint">👆 Tap to expand</p>` : ''}
    </div>
    <div class="swipe-indicator swipe-yes">✓ AFFIRM</div>
    <div class="swipe-indicator swipe-no">✕ SKIP</div>
  `;

  // Tap to expand full-screen
  card.addEventListener('click', (e) => {
    if (Math.abs(state._dragDx || 0) < 5) openFullScreen(aff);
  });

  return card;
}

function updateCardCounter() {
  const total = state.cardQueue.length;
  const current = state.cardIndex + 1;
  const remaining = total - state.cardIndex;
  document.getElementById('card-counter').textContent =
    remaining > 0 ? `${current} / ${total}` : '';
}

// ─── SWIPE GESTURE ───────────────────────────────────────────────────────────

function attachSwipeToTop() {
  const top = document.querySelector('.affirm-card.top');
  if (!top) return;
  state.currentCardEl = top;
  state._dragDx = 0;

  const onStart = (e) => {
    const pt = e.touches ? e.touches[0] : e;
    state.isDragging = true;
    state.dragStartX = pt.clientX;
    state.dragStartY = pt.clientY;
    top.style.transition = 'none';
  };

  const onMove = (e) => {
    if (!state.isDragging) return;
    const pt = e.touches ? e.touches[0] : e;
    const dx = pt.clientX - state.dragStartX;
    const dy = pt.clientY - state.dragStartY;
    state._dragDx = dx;

    const rotation = dx * 0.08;
    top.style.transform = `translateX(${dx}px) translateY(${dy * 0.3}px) rotate(${rotation}deg)`;

    // Show swipe indicators
    const yes = top.querySelector('.swipe-yes');
    const no  = top.querySelector('.swipe-no');
    const pct = Math.min(Math.abs(dx) / 80, 1);
    if (dx > 20) { yes.style.opacity = pct; no.style.opacity = 0; }
    else if (dx < -20) { no.style.opacity = pct; yes.style.opacity = 0; }
    else { yes.style.opacity = 0; no.style.opacity = 0; }
  };

  const onEnd = () => {
    if (!state.isDragging) return;
    state.isDragging = false;
    const dx = state._dragDx;
    top.style.transition = '';

    if (dx > 90) {
      // Swiped right = Affirm
      swipeCard('right');
    } else if (dx < -90) {
      // Swiped left = Skip
      swipeCard('left');
    } else {
      // Snap back
      top.style.transform = '';
      top.querySelector('.swipe-yes').style.opacity = 0;
      top.querySelector('.swipe-no').style.opacity = 0;
    }
  };

  top.addEventListener('mousedown',  onStart);
  top.addEventListener('touchstart', onStart, { passive: true });
  window.addEventListener('mousemove',  onMove);
  window.addEventListener('touchmove',  onMove, { passive: true });
  window.addEventListener('mouseup',    onEnd);
  window.addEventListener('touchend',   onEnd);
}

function swipeCard(direction) {
  const top = document.querySelector('.affirm-card.top');
  if (!top) return;

  top.classList.add(direction === 'right' ? 'flying-right' : 'flying-left');

  if (direction === 'right') {
    // Affirmed!
    onAffirm();
  }

  setTimeout(() => {
    state.cardIndex++;
    if (state.cardIndex >= state.cardQueue.length) {
      // Deck finished — refill
      buildCardQueue(state.currentFilter);
    }
    renderCards();
  }, 400);
}

function onAffirm() {
  state.totalAffirmed++;
  const today = todayStr();
  if (!state.completedDays.includes(today)) {
    state.completedDays.push(today);
    // Check streak
    const yesterday = offsetDate(-1);
    if (state.completedDays.includes(yesterday) || state.streak === 0) {
      state.streak++;
    } else {
      state.streak = 1;
    }
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
  }
  updateStreakUI();
  save();
  showToast('✨ Affirmed!');
}

// ─── CARD ACTIONS (BUTTONS) ──────────────────────────────────────────────────

function setupCardActions() {
  document.getElementById('skip-btn').addEventListener('click', () => swipeCard('left'));
  document.getElementById('affirm-btn').addEventListener('click', () => swipeCard('right'));
  document.getElementById('fav-action-btn').addEventListener('click', toggleCurrentFav);
}

function toggleCurrentFav() {
  const top = document.querySelector('.affirm-card.top');
  if (!top) return;
  const text = top.dataset.text;
  const category = top.dataset.category;
  toggleFavorite(text, category, CATEGORY_META[category].emoji);
  updateFavBtn(text);
}

function updateFavBtn(text) {
  const btn = document.getElementById('fav-action-btn');
  const isSaved = state.favorites.some(f => f.text === text);
  btn.classList.toggle('saved', isSaved);
}

// ─── FAVORITES ───────────────────────────────────────────────────────────────

function toggleFavorite(text, category, emoji) {
  const idx = state.favorites.findIndex(f => f.text === text);
  if (idx === -1) {
    state.favorites.unshift({ text, category, emoji });
    showToast('❤️ Saved to favorites!');
  } else {
    state.favorites.splice(idx, 1);
    showToast('Removed from favorites');
  }
  save();
  renderFavorites();
}

function renderFavorites() {
  const list  = document.getElementById('favorites-list');
  const empty = document.getElementById('fav-empty');
  const countText = document.getElementById('fav-count-text');

  list.innerHTML = '';
  const favs = state.favorites;

  if (favs.length === 0) {
    list.classList.add('hidden');
    empty.classList.remove('hidden');
    countText.textContent = 'Your personal collection';
    return;
  }

  list.classList.remove('hidden');
  empty.classList.add('hidden');
  countText.textContent = `${favs.length} affirmation${favs.length !== 1 ? 's' : ''} saved`;

  const totalSaved = document.getElementById('total-saved');
  if (totalSaved) totalSaved.textContent = favs.length;

  favs.forEach((fav, i) => {
    const meta = CATEGORY_META[fav.category] || {};
    const item = document.createElement('div');
    item.className = 'fav-item';
    item.innerHTML = `
      <div class="fav-item-accent" style="background: var(--accent-${accentForCat(fav.category)})"></div>
      <div class="fav-item-emoji">${fav.emoji || meta.emoji || '✨'}</div>
      <div class="fav-item-content">
        <div class="fav-item-cat">${meta.label || fav.category}</div>
        <div class="fav-item-text">${fav.text}</div>
      </div>
      <button class="fav-remove-btn" data-idx="${i}" title="Remove">✕</button>
    `;
    item.querySelector('.fav-remove-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      state.favorites.splice(i, 1);
      save();
      renderFavorites();
      showToast('Removed');
    });
    list.appendChild(item);
  });
}

function accentForCat(cat) {
  const map = {
    confidence: 'blue', gratitude: 'gold', health: 'teal',
    success: 'purple', love: 'pink', mindfulness: 'teal',
    abundance: 'gold', joy: 'pink'
  };
  return map[cat] || 'gold';
}

// ─── EXPLORE GRID ────────────────────────────────────────────────────────────

function buildExploreGrid() {
  const grid = document.getElementById('explore-grid');
  grid.innerHTML = '';
  Object.entries(CATEGORY_META).forEach(([cat, meta]) => {
    const count = AFFIRMATIONS[cat]?.length || 0;
    const card = document.createElement('div');
    card.className = 'explore-card';
    card.innerHTML = `
      <div class="card-gradient ${meta.gradient}"></div>
      <div class="explore-card-inner">
        <div class="explore-emoji">${meta.emoji}</div>
        <div class="explore-name">${meta.label}</div>
        <div class="explore-count">${count} affirmations</div>
      </div>
    `;
    card.addEventListener('click', () => {
      // Switch to home filtered by this category
      setPage('home');
      setFilter(cat);
    });
    grid.appendChild(card);
  });
}

// ─── STREAK & CALENDAR ───────────────────────────────────────────────────────

function updateStreakUI() {
  document.getElementById('streak-count').textContent     = state.streak;
  const bigCount = document.getElementById('streak-big-count');
  if (bigCount) bigCount.textContent = state.streak;
  const totalAffEl = document.getElementById('total-affirmed');
  if (totalAffEl) totalAffEl.textContent = state.totalAffirmed;
  const totalSavedEl = document.getElementById('total-saved');
  if (totalSavedEl) totalSavedEl.textContent = state.favorites.length;
  const bestEl = document.getElementById('best-streak-val');
  if (bestEl) bestEl.textContent = state.bestStreak;
}

function buildCalendar() {
  const label = document.getElementById('cal-month-label');
  const grid  = document.getElementById('calendar-grid');
  if (!label || !grid) return;

  const d    = state.calendarMonth;
  const year = d.getFullYear();
  const month = d.getMonth();
  const today = new Date();

  label.textContent = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  grid.innerHTML = '';

  // Day name headers
  dayNames.forEach(dn => {
    const el = document.createElement('div');
    el.className = 'cal-day-name';
    el.textContent = dn;
    grid.appendChild(el);
  });

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const el = document.createElement('div');
    el.className = 'cal-day empty';
    grid.appendChild(el);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const cellDate = new Date(year, month, day);
    const el = document.createElement('div');
    el.className = 'cal-day';
    el.textContent = day;

    const isToday    = cellDate.toDateString() === today.toDateString();
    const completed  = state.completedDays.includes(dateStr);
    const isFuture   = cellDate > today;

    if (completed)  el.classList.add('completed');
    else if (isToday)    el.classList.add('today');
    else if (isFuture)   el.classList.add('future');

    grid.appendChild(el);
  }
}

function setupStreakPage() {
  document.getElementById('cal-prev').addEventListener('click', () => {
    state.calendarMonth.setMonth(state.calendarMonth.getMonth() - 1);
    buildCalendar();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    state.calendarMonth.setMonth(state.calendarMonth.getMonth() + 1);
    buildCalendar();
  });

  const reminderToggle  = document.getElementById('reminder-toggle');
  const reminderDisplay = document.getElementById('reminder-time-display');
  const reminderInput   = document.getElementById('reminder-time-setting');

  // Sync state to UI
  reminderToggle.checked = state.reminderOn;
  reminderDisplay.textContent = formatTime(state.reminderTime);
  reminderInput.value = state.reminderTime;

  reminderDisplay.addEventListener('click', () => reminderInput.click());
  reminderInput.addEventListener('change', () => {
    state.reminderTime = reminderInput.value;
    reminderDisplay.textContent = formatTime(state.reminderTime);
    save();
    if (state.reminderOn) scheduleNotificationCheck();
  });

  reminderToggle.addEventListener('change', async () => {
    if (reminderToggle.checked) {
      if ('Notification' in window) {
        const perm = await Notification.requestPermission();
        if (perm !== 'granted') {
          reminderToggle.checked = false;
          showToast('⚠️ Notifications blocked in browser');
          return;
        }
      }
      state.reminderOn = true;
      scheduleNotificationCheck();
      showToast('🔔 Daily reminder set!');
    } else {
      state.reminderOn = false;
      showToast('Reminder turned off');
    }
    save();
  });
}

function formatTime(t) {
  if (!t) return '';
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2,'0')} ${ampm}`;
}

// ─── NOTIFICATIONS ────────────────────────────────────────────────────────────

function scheduleNotificationCheck() {
  // We poll every minute to check if it's time for the notification
  if (window._notifInterval) clearInterval(window._notifInterval);
  window._notifInterval = setInterval(() => {
    if (!state.reminderOn) return;
    const now = new Date();
    const [h, m] = state.reminderTime.split(':').map(Number);
    if (now.getHours() === h && now.getMinutes() === m) {
      const today = todayStr();
      if (!state.completedDays.includes(today)) {
        triggerNotification();
      }
    }
  }, 60000);
}

function triggerNotification() {
  if (Notification.permission === 'granted') {
    const random = Object.values(AFFIRMATIONS).flat();
    const pick = random[Math.floor(Math.random() * random.length)];
    new Notification('✨ Your daily affirmation', {
      body: pick.text,
      icon: 'https://em-content.zobj.net/source/apple/391/sparkles_2728.png',
      badge: 'https://em-content.zobj.net/source/apple/391/sparkles_2728.png',
    });
  }
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => setPage(btn.dataset.page));
  });
}

function setPage(page) {
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.classList.add('hidden');
  });
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pageEl = document.getElementById(`page-${page}`);
  const navEl  = document.getElementById(`nav-${page}`);
  if (pageEl) { pageEl.classList.remove('hidden'); pageEl.classList.add('active'); }
  if (navEl)  navEl.classList.add('active');

  if (page === 'streak') { updateStreakUI(); buildCalendar(); }
  if (page === 'favorites') renderFavorites();
}

// ─── CATEGORY FILTER ─────────────────────────────────────────────────────────

function setupCategoryFilter() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => setFilter(chip.dataset.cat));
  });
}

function setFilter(cat) {
  state.currentFilter = cat;
  document.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === cat);
  });

  // Scroll filter chip into view
  const activeChip = document.querySelector(`.filter-chip[data-cat="${cat}"]`);
  if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

  buildCardQueue(cat);
  renderCards();
}

// ─── FULL SCREEN OVERLAY ─────────────────────────────────────────────────────

function openFullScreen(aff) {
  const overlay = document.getElementById('full-screen-overlay');
  const bg      = document.getElementById('full-overlay-bg');
  const meta    = CATEGORY_META[aff.category];

  document.getElementById('full-overlay-emoji').textContent = aff.emoji;
  document.getElementById('full-overlay-text').textContent  = aff.text;
  bg.className = `full-overlay-bg card-gradient ${meta.gradient}`;

  const isSaved = state.favorites.some(f => f.text === aff.text);
  const favBtn  = document.getElementById('overlay-fav-btn');
  favBtn.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="${isSaved ? '#e879b0' : 'none'}" stroke="currentColor" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/>
    </svg> ${isSaved ? 'Saved' : 'Save'}
  `;

  favBtn.onclick = () => {
    toggleFavorite(aff.text, aff.category, aff.emoji);
    const nowSaved = state.favorites.some(f => f.text === aff.text);
    favBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="${nowSaved ? '#e879b0' : 'none'}" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/>
      </svg> ${nowSaved ? 'Saved' : 'Save'}
    `;
    updateFavBtn(aff.text);
  };

  document.getElementById('overlay-share-btn').onclick = () => shareAffirmation(aff.text);
  overlay.classList.remove('hidden');
}

document.getElementById('close-overlay-btn').addEventListener('click', () => {
  document.getElementById('full-screen-overlay').classList.add('hidden');
});

function shareAffirmation(text) {
  if (navigator.share) {
    navigator.share({ title: 'Daily Affirmation ✨', text: text + '\n\n— Affirm App' })
      .catch(() => copyToClipboard(text));
  } else {
    copyToClipboard(text);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text + '\n\n— Affirm App')
    .then(() => showToast('📋 Copied to clipboard!'))
    .catch(() => showToast('Share not available'));
}

// ─── GREETING ────────────────────────────────────────────────────────────────

function updateGreeting() {
  const h = new Date().getHours();
  const el = document.getElementById('greeting-time');
  if (!el) return;
  if (h < 12)      el.textContent = 'Good morning ☀️';
  else if (h < 17) el.textContent = 'Good afternoon 🌤️';
  else             el.textContent = 'Good evening 🌙';
}

// ─── TOAST ────────────────────────────────────────────────────────────────────

let _toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  const hasData = load();

  // Hide splash after 2.8s
  setTimeout(() => {
    document.getElementById('splash-screen').classList.add('hidden');

    if (hasData && state.selectedGoals.length > 0) {
      // Returning user — skip onboarding
      document.getElementById('onboarding').classList.add('hidden');
      launchApp();
      if (state.reminderOn) scheduleNotificationCheck();
    } else {
      // New user — show onboarding
      document.getElementById('onboarding').classList.remove('hidden');
      initOnboarding();
    }
  }, 2900);
});
