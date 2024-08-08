const apiUrl = 'http://localhost:3000/api/resources';
let currentResourceId;

async function fetchResources() {
    const response = await fetch(apiUrl);
    const resources = await response.json();
    const tableBody = document.querySelector('#scoreTable tbody');
    tableBody.innerHTML = '';
    resources.forEach(resource => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${resource.id}</td>
            <td>${resource.username}</td>
            <td>${resource.score}</td>
            <td>
                <button id="delete" onclick="deleteResource(${resource.id})">Delete</button>
                <button onclick="openModal(${resource.id}, '${resource.username}', ${resource.score})">Update</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

async function createResource() {
    const username = document.getElementById('username').value;
    const score = parseInt(document.getElementById('score').value);
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, score })
    });
    fetchResources();
}

async function deleteResource(id) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
    fetchResources();
}

function openModal(id, username, score) {
    currentResourceId = id;
    document.getElementById('update-username').value = username;
    document.getElementById('update-score').value = score;
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

async function submitUpdate() {
    const newUsername = document.getElementById('update-username').value;
    const newScore = parseInt(document.getElementById('update-score').value);
    await fetch(`${apiUrl}/${currentResourceId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, score: newScore })
    });
    closeModal();
    fetchResources();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', fetchResources);