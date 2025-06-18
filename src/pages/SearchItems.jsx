import React from 'react'

const SearchItems = () => {
  return (
    <div className="search-box d-flex justify-content-between mb-2">
      <input type="text" className='flex-lg-fill' placeholder="Search by product code or title" id="searchInput" />
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
      } >Search</button>
      <button onClick={() => document.getElementById('searchInput').value = ''}>Reset</button>
    </div>
  )
}

export default SearchItems