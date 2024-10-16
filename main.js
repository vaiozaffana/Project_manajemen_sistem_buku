let books = {
    1: {
        judul: "Hujan di Pagi Hari",
        penulis: "Vaio",
        tahunTerbit: 2024,
        genre: "Fiksi"
    }
};

function addBook(id, judul, penulis, tahunTerbit, genre) {
  books[id] = { judul, penulis, tahunTerbit, genre };
}

function getBookById(id) {
  return books[id];
}

function updateBook(id, updatedJudul, updatedPenulis, updatedTahunTerbit, updatedGenre) {
    if (books[id]) {
        books[id].judul = updatedJudul;
        books[id].penulis = updatedPenulis;
        books[id].tahunTerbit = updatedTahunTerbit;
        books[id].genre = updatedGenre;
    }
}

function deleteBook(id) {
  delete books[id];
}


