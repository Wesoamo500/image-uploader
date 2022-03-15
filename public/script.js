function _(selector) {
    return document.querySelector(selector);
}

_('.btn-submit').addEventListener('click', () => {
    _('#file-upload').click();
});

_('#file-upload').addEventListener('change', () => {
    _('.card').classList.add('hidden');
    _('.progress').classList.remove('hidden');
    const file = _('#file-upload').files[0];
    uploadFile(file);
});

_('.img_doc').addEventListener('dragover', (event) => {
    event.preventDefault();
});

_('.img_doc').addEventListener('drop', (event) => {
    event.preventDefault();
    _('.card').classList.add('hidden');
    _('.progress').classList.remove('hidden');
    const file = event.dataTransfer.files[0];
    uploadFile(file);
});

_('.copy_btn').addEventListener('click', () => {
    navigator.clipboard.writeText(_('#image-result').src);
    _('.copy_btn').innerHTML = 'Copied!';
});

async function uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/api/images', {
        method: 'POST',
        body: formData,
    });
    const data = await response.json();
    if (data.success) {
        _('.progress ').classList.add('hidden');
        _('.completed').classList.remove('hidden');
        _('.output').innerHTML = data.imageLink;
        _('#image-result').src = data.imageLink;
        return;
    }
    _('.progress').classList.add('hidden');
    _('.card').classList.remove('hidden');
    if (data.error) {
        alert(data.error);
    }
}
