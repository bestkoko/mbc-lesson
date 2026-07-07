document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openSheet');
    const closeBtn = document.getElementById('closeSheet');
    const overlay = document.getElementById('overlay');
    const actionSheet = document.getElementById('actionSheet');

    const toggleSheet = (show) => {
        if (show) {
            overlay.classList.add('active');
            actionSheet.classList.add('active');
        } else {
            overlay.classList.remove('active');
            actionSheet.classList.remove('active');
        }
    };

    openBtn.addEventListener('click', () => toggleSheet(true));
    closeBtn.addEventListener('click', () => toggleSheet(false));
    overlay.addEventListener('click', () => toggleSheet(false));

    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleSheet(false);
    });
});
