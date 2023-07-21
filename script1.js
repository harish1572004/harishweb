// Function to handle search
function searchTextbook() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const list = document.getElementById('textbooksList');
    const textbooks = list.getElementsByTagName('li');

    for (let i = 0; i < textbooks.length; i++) {
        const textbook = textbooks[i].getElementsByTagName('span')[0];
        const author = textbooks[i].getElementsByTagName('span')[1];
        const text = textbook.textContent || textbook.innerText;
        const authorName = author.textContent || author.innerText;

        if (text.toUpperCase().indexOf(filter) > -1 || authorName.toUpperCase().indexOf(filter) > -1) {
            textbooks[i].style.display = '';
        } else {
            textbooks[i].style.display = 'none';
        }
    }
}

// Attach event listener for the search input
document.getElementById('searchInput').addEventListener('input', searchTextbook);
