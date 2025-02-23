document.getElementById('showBtn').addEventListener('click', function() {
    document.getElementById('messageBox').classList.remove('hidden');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('messageBox').classList.add('hidden');
});
