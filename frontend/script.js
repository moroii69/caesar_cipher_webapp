async function performAction(action) {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    
    if (text.trim() === '') {
        showError('Text cannot be empty.');
        return;
    }

    if (isNaN(shift)) {
        showError('Shift value must be a number.');
        return;
    }

    if (shift < 0 || shift > 25) {
        showError('Shift value must be between 0 and 25.');
        return;
    }

    try {
        const response = await fetch(`http://127.0.0.1:5000/${action}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, shift }),
        });

        if (!response.ok) {
            showError('An error occurred while processing your request.');
            return;
        }

        const result = await response.json();
        document.getElementById('result-text').innerText = result.result;
        document.getElementById('copy-button').style.display = 'inline-block';
    } catch (error) {
        showError('An error occurred. Please try again.');
    }
}

function copyResult() {
    const resultText = document.getElementById('result-text').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        showNotification();
    });
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}


function showError(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
        notification.innerText = 'Result copied to clipboard!';
    }, 3000);
}

document.getElementById('year').innerText = new Date().getFullYear();
