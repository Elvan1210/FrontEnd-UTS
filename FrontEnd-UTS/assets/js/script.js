document.addEventListener('DOMContentLoaded', function () {

    // --- Data Kesenian ---
    const kesenianData = [
        {
            title: 'Tari Topeng Betawi',
            image: 'assets/images/kesenian/tari_topeng.jpg',
            description: 'Tari Topeng Betawi adalah tarian yang mengiringi upacara ritual atau pesta rakyat. Penarinya menggunakan topeng saat menari, dengan gerakan yang dinamis dan diiringi musik gamelan.',
            keywords: ['tari topeng', 'topeng', 'ritual']
        },
        {
            title: 'Tari Cokek',
            image: 'assets/images/kesenian/tari_cokek.jpg',
            description: 'Tari Cokek adalah tarian pergaulan yang sering ditampilkan di pesta-pesta rakyat. Tarian ini memiliki gerakan yang lincah dan berpasangan, diiringi oleh musik Gambang Kromong.',
            keywords: ['tari cokek', 'pergaulan', 'pesta']
        },
        {
            title: 'Rebana Biang',
            image: 'assets/images/kesenian/rebana_biang.jpg',
            description: 'Rebana Biang adalah alat musik rebana berukuran besar yang menjadi bagian penting dari musik tradisional Betawi. Alat musik ini dimainkan untuk mengiringi lagu-lagu Islami dan upacara adat.',
            keywords: ['rebana', 'rebana biang', 'islami']
        },
        {
            title: 'Ondel-ondel',
            image: 'assets/images/kesenian/ondel-ondel (2).jpg',
            description: 'Ondel-ondel adalah boneka besar yang menjadi ikon kota Jakarta. Awalnya, ondel-ondel diyakini sebagai penolak bala, namun kini sering ditampilkan dalam berbagai perayaan sebagai hiburan.',
            keywords: ['boneka raksasa', 'ikon jakarta', 'penolak bala', 'ondel', 'ondel-ondel', 'ondel ondel', 'ondelondel']
        },
        {
            title: 'Tanjidor',
            image: 'assets/images/kesenian/tanjidor.jpg',
            description: 'Tanjidor adalah orkes musik tradisional yang merupakan perpaduan budaya Betawi dan Eropa. Alat musiknya terdiri dari klarinet, trombone, dan drum, sering tampil di acara pernikahan atau festival.',
            keywords: ['orkes', 'eropa', 'tanjidor']
        },
        {
            title: 'Gambang Kromong',
            image: 'assets/images/kesenian/gambang_kromong.jpg',
            description: 'Gambang Kromong adalah orkes musik yang menggabungkan instrumen Tiongkok dengan alat musik lokal. Orkestra ini menjadi pengiring utama untuk pertunjukan Lenong dan Tari Cokek.',
            keywords: ['orkes', 'tionghoa', 'gambang', 'gambang kromong']
        },
        {
            title: 'Lenong Betawi',
            image: 'assets/images/kesenian/lenong_betawi.jpg',
            description: 'Lenong adalah teater atau sandiwara tradisional Betawi yang ceritanya diangkat dari kehidupan sehari-hari. Pertunjukan ini dibawakan dengan bahasa Betawi yang lucu, dan diiringi musik Gambang Kromong.',
            keywords: ['lenong', 'lenong betawi' ,'teater', 'sandiwara', 'komedi']
        },
        {
            title: 'Silat Betawi',
            image: 'assets/images/kesenian/silat.jpg',
            description: 'Silat Betawi, atau "Maen Pukulan", adalah seni bela diri khas Betawi. Berbagai alirannya, seperti Beksi dan Cingkrik, sering ditampilkan dalam acara adat seperti Palang Pintu untuk menunjukkan ketangkasan.',
            keywords: ['silat', 'silat betawi' ,'bela diri', 'maen pukulan', 'palang pintu']
        }
    ];

    // --- Logika Kesenian ---
    const kesenianGridContainer = document.querySelector('.kesenian-grid-container');
    const kesenianModal = document.getElementById('kesenianModal');
    const closeKesenianBtn = document.querySelector('.close-kesenian-button');
    const kesenianImage = document.getElementById('kesenianImage');
    const kesenianTitle = document.getElementById('kesenianTitle');
    const kesenianDescription = document.getElementById('kesenianDescription');

    function renderKesenian() {
        kesenianData.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'kesenian-card';
            card.setAttribute('data-index', index);
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
            `;
            kesenianGridContainer.appendChild(card);

            card.addEventListener('click', () => {
                kesenianImage.src = item.image;
                kesenianImage.alt = item.title;
                kesenianTitle.textContent = item.title;
                kesenianDescription.textContent = item.description;
                kesenianModal.style.display = 'block';
            });
        });
    }
    renderKesenian();
    closeKesenianBtn.addEventListener('click', () => { kesenianModal.style.display = 'none'; });
    window.addEventListener('click', (event) => {
        if (event.target === kesenianModal) { kesenianModal.style.display = 'none'; }
    });

    // --- Data Rumah Adat ---
    const rumahAdatData = [
        {
            title: 'Rumah Kebaya',
            image: 'assets/images/rumah_adat/rumah_kebaya.jpg',
            description: 'Rumah Kebaya adalah rumah adat yang paling terkenal dari suku Betawi. Diberi nama demikian karena bentuk atapnya yang unik dan menyerupai lipatan kebaya. Rumah ini memiliki teras yang luas untuk bersantai dan menjamu tamu.',
            keywords: ['rumah kebaya' ,'arsitektur', 'tradisional', 'atap lipat']
        },
        {
            title: 'Rumah Gudang',
            image: 'assets/images/rumah_adat/rumah_gudang.jpg',
            description: 'Rumah Gudang memiliki bentuk persegi panjang dan atap pelana. Meskipun terlihat sederhana, rumah ini sangat efisien karena mampu mengakomodasi banyak ruang dan menjaga suhu interior tetap sejuk.',
            keywords: ['rumah gudang', 'persegi panjang', 'atap pelana']
        },
        {
            title: 'Rumah Panggung',
            image: 'assets/images/rumah_adat/rumah_panggung.jpg',
            description: 'Rumah Panggung adalah jenis rumah adat yang umum ditemukan di daerah pesisir Betawi. Dibangun di atas tiang kayu, rumah ini dirancang untuk menghindari banjir dan melindungi dari hewan liar.',
            keywords: ['rumah panggung', 'pesisir', 'tiang kayu', 'anti banjir']
        },
        {
            title: 'Rumah Betawi Modern',
            image: 'assets/images/rumah_adat/rumah_betawi_modern.jpg',
            description: 'Rumah Betawi Modern adalah interpretasi kontemporer dari arsitektur tradisional. Desainnya menggabungkan elemen khas Betawi seperti teras luas dan ornamen geometris, dengan material dan gaya yang lebih modern dan minimalis.',
            keywords: ['rumah modern', 'rumah betawi', 'rumah betawi modern' ,'kontemporer', 'minimalis', 'modern']
        }
    ];

    // --- Logika Rumah Adat ---
    const rumahAdatGridContainer = document.querySelector('.rumah-adat-grid-container');
    const rumahAdatModal = document.getElementById('rumahAdatModal');
    const closeRumahAdatBtn = document.querySelector('.close-rumah-adat-button');
    const rumahAdatImage = document.getElementById('rumahAdatImage');
    const rumahAdatTitle = document.getElementById('rumahAdatTitle');
    const rumahAdatDescription = document.getElementById('rumahAdatDescription');

    function renderRumahAdat() {
        rumahAdatData.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'rumah-adat-card';
            card.setAttribute('data-index', index);
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
            `;
            rumahAdatGridContainer.appendChild(card);

            card.addEventListener('click', () => {
                rumahAdatImage.src = item.image;
                rumahAdatImage.alt = item.title;
                rumahAdatTitle.textContent = item.title;
                rumahAdatDescription.textContent = item.description;
                rumahAdatModal.style.display = 'block';
            });
        });
    }
    renderRumahAdat();
    closeRumahAdatBtn.addEventListener('click', () => { rumahAdatModal.style.display = 'none'; });
    window.addEventListener('click', (event) => {
        if (event.target === rumahAdatModal) { rumahAdatModal.style.display = 'none'; }
    });

    // --- Data Resep Makanan ---
    const recipes = {
        'kerak-telor': {
            title: 'Resep Kerak Telor',
            ingredients: ['100 gr beras ketan, rendam semalam', '2 butir telur bebek', '2 sdm serundeng', '1 sdm bawang merah goreng', '1 sdm ebi sangrai, haluskan', 'Garam dan merica secukupnya'],
            instructions: ['Panaskan wajan datar, masukkan 2 sdm beras ketan yang sudah direndam.', 'Aduk hingga setengah matang, lalu masukkan telur bebek. Aduk cepat.', 'Bumbui dengan garam dan merica, lalu taburkan serundeng dan bawang goreng.', 'Masak hingga matang dan bagian bawahnya agak berkerak. Balik wajan dan masak bagian atasnya di atas api agar matang sempurna.', 'Angkat dan sajikan selagi hangat.']
        },
        'soto-betawi': {
            title: 'Resep Soto Betawi',
            ingredients: ['500 gr daging sapi (sandung lamur/iga)', '500 ml santan kental', '1 liter santan encer', '2 lembar daun salam', '2 batang serai, memarkan', '3 cm lengkuas, memarkan', 'Bumbu Halus:', '8 siung bawang merah', '4 siung bawang putih', '3 butir kemiri, sangrai', '1 sdt ketumbar', '1/2 sdt jintan', '3 cm jahe', '3 cm kunyit, bakar'],
            instructions: ['Rebus daging hingga empuk, potong-potong. Sisihkan kaldunya.', 'Tumis bumbu halus hingga harum, masukkan serai, lengkuas, dan daun salam. Aduk hingga matang.', 'Masukkan tumisan bumbu ke dalam panci kaldu. Tambahkan santan encer, masak hingga mendidih sambil diaduk.', 'Masukkan potongan daging dan santan kental. Masak hingga matang dan bumbu meresap. Bumbui dengan garam dan gula.', 'Sajikan soto dengan irisan tomat, kentang goreng, dan emping.']
        },
        'bir-pletok': {
            title: 'Resep Bir Pletok',
            ingredients: ['1 liter air', '150 gr jahe, bakar lalu memarkan', '100 gr gula pasir atau gula merah', '1 batang serai, memarkan', '2 lembar daun pandan', '1/2 sdt kayu manis bubuk atau 2 batang kayu manis', '4 butir cengkeh'],
            instructions: ['Didihkan air di dalam panci.', 'Masukkan jahe, serai, daun pandan, kayu manis, dan cengkeh. Masak hingga semua bahan larut dan aroma rempahnya keluar.', 'Saring air rebusan dan tuang ke dalam gelas.', 'Sajikan Bir Pletok selagi hangat. Tambahkan es batu jika ingin disajikan dingin.']
        },
        'nasi-uduk': {
            title: 'Resep Nasi Uduk',
            ingredients: ['300 gr beras', '500 ml santan kental', '2 lembar daun salam', '2 batang serai, memarkan', '1 ruas lengkuas, memarkan', '1 sdt garam'],
            instructions: ['Cuci bersih beras, tiriskan.', 'Masak beras di rice cooker bersama santan, daun salam, serai, lengkuas, dan garam.', 'Aduk sesekali hingga air terserap. Biarkan nasi matang sempurna.', 'Setelah matang, aduk nasi uduk hingga rata. Sajikan dengan lauk pauk khas, seperti ayam goreng, tempe orek, dan sambal.']
        },
        'gabus-pucung': {
            title: 'Resep Gabus Pucung',
            ingredients: ['1 kg ikan gabus', '1 buah jeruk nipis', 'Bumbu Halus:', '8 siung bawang merah', '4 siung bawang putih', '1 ruas kunyit, bakar', '3 butir kemiri, sangrai', '1/2 sdt ketumbar', '1/2 sdt jintan', 'Bumbu Cemplung:', '5 buah kluwek, rendam air hangat', '2 lembar daun salam', '2 batang serai, memarkan', '1 ruas lengkuas, memarkan'],
            instructions: ['Cuci bersih ikan gabus, lumuri dengan jeruk nipis. Goreng hingga matang dan kering.', 'Tumis bumbu halus hingga harum. Masukkan bumbu cemplung, aduk rata.', 'Tambahkan air, masak hingga mendidih. Bumbui dengan garam dan gula.', 'Masukkan ikan gabus goreng, masak hingga bumbu meresap. Sajikan selagi hangat.']
        },
        'sayur-asem-betawi': {
            title: 'Resep Sayur Asem Betawi',
            ingredients: ['100 gr melinjo', '50 gr kacang tanah', '1 labu siam, potong dadu', '1 ikat kacang panjang', '1 buah jagung manis, potong-potong', '1/2 ruas asam jawa', '1 batang serai, memarkan', 'Bumbu Halus:', '5 siung bawang merah', '3 siung bawang putih', '2 butir kemiri, sangrai', '1 cm terasi, bakar', '1/2 sdt ketumbar'],
            instructions: ['Rebus air hingga mendidih. Masukkan jagung manis, melinjo, dan kacang tanah.', 'Tumis bumbu halus hingga harum. Masukkan tumisan bumbu ke dalam panci rebusan.', 'Masukkan sisa sayuran, masak hingga sayuran matang.', 'Larutkan asam jawa dengan air, saring dan masukkan ke dalam sayur. Bumbui dengan garam dan gula, koreksi rasa.', 'Sajikan sayur asem dengan nasi dan lauk lainnya.']
        }
    };

    // --- Logika Modal Kuliner ---
    const modal = document.getElementById('recipeModal');
    if (modal) {
        const modalTitle = document.getElementById('modalTitle');
        const modalIngredients = document.getElementById('modalIngredients');
        const modalInstructions = document.getElementById('modalInstructions');
        const closeButton = document.querySelector('.close-button');

        const closeModal = () => {
            modal.style.display = 'none';
        };

        closeButton.addEventListener('click', closeModal);

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                closeModal();
            }
        });
    }

    // --- Logika Slider Kuliner ---
    const kulinerCardList = document.querySelector('.kuliner-card-list');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.kuliner-dots-container');

    const foodItems = [
        { key: 'kerak-telor', img: 'assets/images/kuliner/kerak_telor.jpg', title: 'Kerak Telor', desc: 'Makanan khas dari beras ketan dan telur bebek, disajikan dengan serundeng.', keywords: ['telur', 'ketan', 'jajanan'] },
        { key: 'soto-betawi', img: 'assets/images/kuliner/soto_betawi.jpg', title: 'Soto Betawi', desc: 'Soto dengan kuah santan atau susu yang kental, berisi daging sapi atau jeroan.', keywords: ['santan', 'daging', 'susu', 'kuah'] },
        { key: 'bir-pletok', img: 'assets/images/kuliner/bir_pletok.jpg', title: 'Bir Pletok', desc: 'Minuman rempah hangat yang terbuat dari jahe, serai, dan kayu manis, tanpa alkohol.', keywords: ['minuman', 'hangat', 'jahe', 'rempah'] },
        { key: 'nasi-uduk', img: 'assets/images/kuliner/nasi_uduk.jpg', title: 'Nasi Uduk', desc: 'Nasi gurih yang dimasak dengan santan dan rempah, disajikan dengan berbagai lauk.', keywords: ['nasi', 'gurih', 'santan'] },
        { key: 'gabus-pucung', img: 'assets/images/kuliner/gabus_pucung.jpg', title: 'Gabus Pucung', desc: 'Hidangan sup ikan gabus khas Betawi dengan kuah kluwek berwarna hitam.', keywords: ['ikan', 'kuah hitam', 'kluwek'] },
        { key: 'sayur-asem-betawi', img: 'assets/images/kuliner/sayur_asem.jpg', title: 'Sayur Asem Betawi', desc: 'Sayur asam dengan rasa yang kaya, berbeda dengan sayur asam Sunda.', keywords: ['sayur', 'kuah', 'asam'] }
    ];

    let currentIndex = 0;

    function renderKuliner() {
        kulinerCardList.innerHTML = '';
        dotsContainer.innerHTML = '';
        foodItems.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'food-card';
            card.setAttribute('data-recipe', item.key);
            card.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
            kulinerCardList.appendChild(card);

            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.setAttribute('data-index', index);
            dotsContainer.appendChild(dot);
        });

        const foodCards = document.querySelectorAll('.food-card');
        foodCards.forEach(card => {
            card.addEventListener('click', () => {
                const recipeKey = card.getAttribute('data-recipe');
                const recipe = recipes[recipeKey];
                if (recipe) {
                    const modalTitle = document.getElementById('modalTitle');
                    const modalIngredients = document.getElementById('modalIngredients');
                    const modalInstructions = document.getElementById('modalInstructions');
                    modalTitle.textContent = recipe.title;
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
                    document.getElementById('recipeModal').style.display = 'block';
                }
            });
        });

        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                updateSliderView();
            });
        });
    }

    function updateSliderView() {
        const cards = document.querySelectorAll('.food-card');
        const dots = document.querySelectorAll('.dot');
        
        cards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        cards[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');

        const container = document.querySelector('.kuliner-slider-container');
        const activeCard = cards[currentIndex];
        const containerCenter = container.offsetWidth / 2;
        const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
        const offset = containerCenter - cardCenter;
        
        kulinerCardList.style.transform = `translateX(${offset}px)`;
    }

    renderKuliner();
    updateSliderView();

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : foodItems.length - 1;
        updateSliderView();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < foodItems.length - 1) ? currentIndex + 1 : 0;
        updateSliderView();
    });

    // --- Logika Interaktif Alat Musik ---
    const musikListItems = document.querySelectorAll('.musik-list-item');
    const musikDisplay = document.getElementById('musik-display');

    musikListItems.forEach(item => {
        item.addEventListener('click', () => {
            musikListItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const descriptionContent = item.querySelector('.musik-hidden-description').innerHTML;
            musikDisplay.innerHTML = descriptionContent;
        });
    });

    // --- LOGIKA PENCARIAN ---
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    const allContentData = [
        ...kesenianData.map(item => ({ ...item, sectionId: 'kesenian', type: 'card' })),
        ...rumahAdatData.map(item => ({ ...item, sectionId: 'rumah-adat', type: 'card' })),
        ...foodItems.map(item => ({ ...item, sectionId: 'kuliner', type: 'card' })),
    ];
    document.querySelectorAll('.musik-list-item').forEach(item => {
        allContentData.push({
            title: item.querySelector('h3').textContent,
            sectionId: 'alat-musik',
            type: 'list-item',
            keywords: ['alat musik', item.querySelector('p').textContent.toLowerCase()]
        });
    });

    const handleSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;

        const match = allContentData.find(item => {
            const queryInTitle = item.title.toLowerCase().includes(query);
            const queryInKeywords = item.keywords && item.keywords.some(keyword => keyword.toLowerCase().includes(query));
            return queryInTitle || queryInKeywords;
        });

        if (match) {
            const targetSection = document.getElementById(match.sectionId);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

            document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
            
            setTimeout(() => {
                let targetElement;
                if (match.type === 'card') {
                    targetElement = Array.from(targetSection.querySelectorAll('h3')).find(h3 => h3.textContent === match.title).parentElement;
                } else if (match.type === 'list-item') {
                    targetElement = Array.from(targetSection.querySelectorAll('.musik-list-item h3')).find(h3 => h3.textContent === match.title).closest('.musik-list-item');
                }
                
                if (targetElement) {
                    targetElement.classList.add('highlight');
                    setTimeout(() => {
                        targetElement.classList.remove('highlight');
                    }, 2500);
                }
            }, 700);

        } else {
            alert('Konten tidak ditemukan. Coba kata kunci lain.');
        }
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // --- LOGIKA FILTER KATEGORI ---
    const filterButton = document.getElementById('filterButton');
    const filterDropdown = document.getElementById('filterDropdown');

    // Tampilkan/sembunyikan dropdown saat tombol di-klik
    filterButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Mencegah window.onclick berjalan saat tombol diklik
        filterDropdown.classList.toggle('show');
    });

    // Tambahkan event listener ke setiap item di dropdown
    document.querySelectorAll('.filter-dropdown-content li').forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll ke section yang dituju
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Sembunyikan dropdown setelah diklik
            filterDropdown.classList.remove('show');
        });
    });

    // Sembunyikan dropdown jika pengguna mengklik di luar area dropdown
    window.addEventListener('click', (event) => {
        if (!filterButton.contains(event.target)) {
            if (filterDropdown.classList.contains('show')) {
                filterDropdown.classList.remove('show');
            }
        }
    });
});