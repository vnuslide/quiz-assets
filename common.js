// =============================================================
// FILE DÙNG CHUNG - COMMON.JS
// =============================================================

// ✅ CẤU HÌNH TRUNG TÂM
const QUIZ_DATA_URL = "https://script.google.com/macros/s/AKfycbwDtCc3fD8gJcVf0lhQ91IUzBATKd3JaeWSirBW5BHRNPyhtwmS2WmjpOBV8abKdL32Zw/exec";
const LS_KEY_SAVE = "quiz_progress_v3";
const LS_KEY_HIST = "quiz_history_v3";

// ✅ HÀM TIỆN ÍCH DÙNG CHUNG
const $ = (s, sc = document) => sc.querySelector(s);
const getParam = (name) => { const u = new URL(location.href); return u.searchParams.get(name); };
const escapeHTML = str => String(str ?? '').replace(/[&<>"']/g, m => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[m]);
const formatTime = sec => { const m = String(Math.floor(sec / 60)).padStart(2, '0'); const s = String(sec % 60).padStart(2, '0'); return `${m}:${s}`; };

// ✅ HÀM QUẢN LÝ NGƯỜI DÙNG
function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem("quiz_user_v1") || "null");
    } catch (e) {
        return null;
    }
}
