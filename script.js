document.getElementById('showBtn').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('messageBox').classList.remove('hidden');
    }, 10000); // 10 seconds
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('messageBox').classList.add('hidden');
});
