import React from 'react'

const SearchItems = () => {
  return (
    <div className="search-box">
          <input type="text" placeholder="Search by product code or title" id="searchInput" />
          <button onClick={() => {
            const searchValue = document.getElementById('searchInput').value.toLowerCase();
            const rows = document.querySelectorAll('#productTable tr');
            rows.forEach(row => {
              const cells = row.querySelectorAll('td');
              let found = false;
              cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(searchValue)) {
                  found = true;
                }
              });
              row.style.display = found ? '' : 'none';
            });
          }
          }>Search</button>
          <button onClick={() => document.getElementById('searchInput').value = ''}>Reset</button>
          <button onClick={() => window.location.href = '/package'}>Go to Package Team</button>
        </div>
  )
}

export default SearchItems