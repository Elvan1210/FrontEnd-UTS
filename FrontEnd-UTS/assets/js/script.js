document.addEventListener('DOMContentLoaded', function () {

    // --- Data Resep Makanan ---
    const recipes = {
        'papeda': {
            title: 'Resep Papeda dan Ikan Kuah Kuning',
            ingredients: [
                '100 gr tepung sagu',
                '1 liter air',
                '1/2 sdt garam',
                '1/4 sdt gula pasir',
                'Bahan Ikan Kuah Kuning:',
                '500 gr ikan tongkol atau tuna, potong-potong',
                '1 buah jeruk nipis',
                '5 siung bawang merah',
                '3 siung bawang putih',
                '2 cm kunyit, bakar',
                '2 cm jahe',
                '3 butir kemiri, sangrai',
                '1 batang serai, memarkan',
                '2 lembar daun salam',
                '400 ml santan',
                'Garam, gula, dan merica secukupnya'
            ],
            instructions: [
                'Papeda: Larutkan tepung sagu dengan 200 ml air. Didihkan sisa air (800 ml) bersama garam dan gula. Tuang larutan sagu ke dalam air mendidih sambil diaduk cepat hingga mengental dan bening. Angkat.',
                'Ikan Kuah Kuning: Lumuri ikan dengan air jeruk nipis dan garam, diamkan 15 menit. Haluskan bawang merah, bawang putih, kunyit, jahe, dan kemiri.',
                'Tumis bumbu halus hingga harum, masukkan serai dan daun salam. Aduk hingga matang.',
                'Masukkan potongan ikan, aduk hingga berubah warna.',
                'Tuang santan, tambahkan garam, gula, dan merica. Masak hingga ikan matang dan bumbu meresap.',
                'Sajikan papeda hangat bersama ikan kuah kuning.'
            ]
        },
        'ikan-bakar': {
            title: 'Resep Ikan Bakar Manokwari',
            ingredients: [
                '1 ekor ikan tongkol besar, bersihkan',
                '1 buah jeruk nipis',
                '2 sdm mentega, lelehkan',
                'Garam secukupnya',
                'Bahan Sambal Mentah:',
                '10 buah cabai rawit merah (atau sesuai selera)',
                '5 siung bawang merah',
                '1/2 sdt terasi bakar',
                'Garam dan gula secukupnya'
            ],
            instructions: [
                'Lumuri ikan dengan air jeruk nipis dan garam. Diamkan selama 20 menit.',
                'Bakar ikan di atas bara api atau teflon sambil diolesi mentega hingga matang di kedua sisinya.',
                'Sambal Mentah: Ulek kasar cabai rawit, bawang merah, terasi, garam, dan gula.',
                'Siram sambal mentah di atas ikan bakar sesaat sebelum disajikan.',
                'Sajikan dengan nasi hangat.'
            ]
        },
        'sagu-lempeng': {
            title: 'Resep Sagu Lempeng',
            ingredients: [
                '250 gr tepung sagu',
                '100 gr kelapa parut kasar',
                '50 gr gula merah, sisir halus',
                '1/2 sdt garam'
            ],
            instructions: [
                'Sangrai tepung sagu dengan api kecil hingga terasa ringan dan kering. Angkat dan biarkan dingin.',
                'Campurkan tepung sagu yang sudah disangrai, kelapa parut, gula merah, dan garam. Aduk hingga rata.',
                'Panaskan cetakan khusus sagu lempeng atau wajan teflon anti lengket.',
                'Tuang adonan ke dalam cetakan, padatkan dan ratakan. Masak dengan api sangat kecil.',
                'Balik adonan jika satu sisi sudah kering dan matang. Masak hingga kedua sisi matang sempurna.',
                'Angkat, dinginkan, dan potong-potong sesuai selera. Sagu lempeng siap dinikmati.'
            ]
        }
    };

    // --- Logika Modal ---
// --- Logika Modal ---
    const modal = document.getElementById('recipeModal');

    // Cek dulu apakah elemen modalnya ada atau tidak
    if (modal) {
        const modalTitle = document.getElementById('modalTitle');
        const modalIngredients = document.getElementById('modalIngredients');
        const modalInstructions = document.getElementById('modalInstructions');
        const closeButton = document.querySelector('.close-button');
        const foodCards = document.querySelectorAll('.food-card');

        foodCards.forEach(card => {
            card.addEventListener('click', () => {
                const recipeKey = card.getAttribute('data-recipe');
                const recipe = recipes[recipeKey];

                if (recipe) {
                    // Mengisi konten modal dengan data resep
                    modalTitle.textContent = recipe.title;
                    
                    // Mengosongkan list sebelumnya
                    modalIngredients.innerHTML = '';
                    modalInstructions.innerHTML = '';

                    recipe.ingredients.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        modalIngredients.appendChild(li);
                    });

                    recipe.instructions.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        modalInstructions.appendChild(li);
                    });

                    // Menampilkan modal
                    modal.style.display = 'block';
                }
            });
        });

        // Fungsi untuk menutup modal
        const closeModal = () => {
            modal.style.display = 'none';
        };

        closeButton.addEventListener('click', closeModal);

        // Menutup modal jika pengguna mengklik di luar area konten
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                closeModal();
            }
        });
    } // <-- Tambahkan kurung kurawal penutup ini

        const faunaListItems = document.querySelectorAll('.fauna-list-item');
const faunaDisplay = document.getElementById('fauna-display');

faunaListItems.forEach(item => {
    item.addEventListener('click', () => {
        // Hapus class 'active' dari semua item lain
        faunaListItems.forEach(i => i.classList.remove('active'));

        // Tambahkan class 'active' ke item yang diklik
        item.classList.add('active');

        // Ambil konten HTML dari deskripsi yang tersembunyi
        const descriptionContent = item.querySelector('.fauna-hidden-description').innerHTML;
        
        // Masukkan konten tersebut ke dalam kotak display di sebelah kanan
        faunaDisplay.innerHTML = descriptionContent;
        });
    });
});