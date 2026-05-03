// Ekran Yönetimi
const welcomeScreen = document.getElementById('welcomeScreen');
const presentationScreen = document.getElementById('presentationScreen');
const citySelect = document.getElementById('citySelect');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const loadingSection = document.getElementById('loadingSection');
const presentationContent = document.getElementById('presentationContent');

// Başlat Butonu
startBtn.addEventListener('click', () => {
    const selectedCity = citySelect.value;
    if (!selectedCity) {
        alert('Lütfen bir il seçiniz!');
        return;
    }
    
    // Ekranları değiştir
    welcomeScreen.style.display = 'none';
    presentationScreen.style.display = 'block';
    
    // Araştırmayı başlat
    startResearch(selectedCity);
});

// Geri Dön Butonu
backBtn.addEventListener('click', () => {
    presentationScreen.style.display = 'none';
    welcomeScreen.style.display = 'flex';
    presentationContent.style.display = 'none';
    loadingSection.style.display = 'block';
});

// Araştırma Fonksiyonu
async function startResearch(city) {
    document.getElementById('cityTitle').textContent = `${city} Nüfus Araştırması`;
    
    // Loading göster
    loadingSection.style.display = 'block';
    presentationContent.style.display = 'none';
    
    // Simüle edilmiş veri yükleme (2 saniye)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Veri oluştur ve göster
    const data = generateCityData(city);
    displayData(data);
    
    // Loading gizle, içeriği göster
    loadingSection.style.display = 'none';
    presentationContent.style.display = 'block';
}

// Şehir Verisi Oluştur
function generateCityData(city) {
    const cityData = {
        'İstanbul': {
            population: 15840900,
            growthRate: 1.02,
            urbanRate: 99.8,
            genderRatio: 98.5,
            birthRate: 13.2,
            deathRate: 4.8,
            malePercent: 49.7,
            femalePercent: 50.3,
            urbanPercent: 99.8,
            ruralPercent: 0.2,
            immigrationIn: 285432,
            immigrationOut: 195287,
            districts: [
                { name: 'Esenyurt İlçesi', population: 954579, density: 4187 },
                { name: 'Küçükçekmece İlçesi', population: 805930, density: 5842 },
                { name: 'Bağcılar İlçesi', population: 745125, density: 8923 },
                { name: 'Pendik İlçesi', population: 728291, density: 4132 },
                { name: 'Ümraniye İlçesi', population: 693509, density: 6247 },
                { name: 'Bahçelievler İlçesi', population: 611059, density: 7821 },
                { name: 'Sultanbeyli İlçesi', population: 329370, density: 3842 },
                { name: 'Kadıköy İlçesi', population: 467919, density: 11523 },
                { name: 'Maltepe İlçesi', population: 521361, density: 12187 },
                { name: 'Kartal İlçesi', population: 489744, density: 10842 },
                { name: 'Ataşehir İlçesi', population: 423127, density: 16834 },
                { name: 'Şişli İlçesi', population: 284396, density: 20521 },
                { name: 'Beşiktaş İlçesi', population: 190033, density: 13247 },
                { name: 'Sarıyer İlçesi', population: 347214, density: 1234 },
                { name: 'Şile İlçesi', population: 38321, density: 47 },
                { name: 'Çatalca İlçesi', population: 73718, density: 68 }
            ],
            educationLevels: {
                illiterate: 2.1,
                primary: 18.5,
                secondary: 22.3,
                highSchool: 31.2,
                university: 25.9
            },
            economicSectors: {
                services: 68.5,
                industry: 22.3,
                agriculture: 1.2,
                other: 8.0
            },
            ageGroups: {
                '0-14': 22.5,
                '15-64': 70.8,
                '65+': 6.7
            }
        },
        'Ankara': {
            population: 5747325,
            growthRate: 1.15,
            urbanRate: 97.2,
            genderRatio: 99.1,
            birthRate: 12.8,
            deathRate: 5.2,
            malePercent: 49.8,
            femalePercent: 50.2,
            urbanPercent: 97.2,
            ruralPercent: 2.8,
            immigrationIn: 145287,
            immigrationOut: 98432,
            districts: [
                { name: 'Keçiören İlçesi', population: 945871, density: 4132 },
                { name: 'Çankaya İlçesi', population: 935940, density: 3247 },
                { name: 'Yenimahalle İlçesi', population: 694235, density: 2834 },
                { name: 'Mamak İlçesi', population: 664946, density: 3921 },
                { name: 'Etimesgut İlçesi', population: 574993, density: 2187 },
                { name: 'Sincan İlçesi', population: 537844, density: 1842 },
                { name: 'Altındağ İlçesi', population: 383655, density: 5234 },
                { name: 'Gölbaşı İlçesi', population: 142387, density: 428 },
                { name: 'Pursaklar İlçesi', population: 141956, density: 1234 },
                { name: 'Polatlı İlçesi', population: 125075, density: 187 },
                { name: 'Elmadağ İlçesi', population: 45234, density: 98 },
                { name: 'Kızılcahamam İlçesi', population: 27798, density: 21 }
            ],
            educationLevels: {
                illiterate: 1.8,
                primary: 16.2,
                secondary: 20.8,
                highSchool: 32.5,
                university: 28.7
            },
            economicSectors: {
                services: 72.3,
                industry: 18.5,
                agriculture: 3.2,
                other: 6.0
            },
            ageGroups: {
                '0-14': 23.2,
                '15-64': 71.5,
                '65+': 5.3
            }
        },
        'İzmir': {
            population: 4425789,
            growthRate: 0.98,
            urbanRate: 95.4,
            genderRatio: 98.8,
            birthRate: 11.9,
            deathRate: 5.5,
            malePercent: 49.6,
            femalePercent: 50.4,
            urbanPercent: 95.4,
            ruralPercent: 4.6,
            immigrationIn: 112487,
            immigrationOut: 87234,
            districts: [
                { name: 'Buca İlçesi', population: 512341, density: 3247 },
                { name: 'Karabağlar İlçesi', population: 485321, density: 6234 },
                { name: 'Bornova İlçesi', population: 445678, density: 3842 },
                { name: 'Konak İlçesi', population: 373565, density: 4234 },
                { name: 'Karşıyaka İlçesi', population: 352321, density: 4521 },
                { name: 'Bayraklı İlçesi', population: 315261, density: 5134 },
                { name: 'Çiğli İlçesi', population: 201234, density: 1842 },
                { name: 'Gaziemir İlçesi', population: 142387, density: 3234 },
                { name: 'Menderes İlçesi', population: 95234, density: 287 },
                { name: 'Balçova İlçesi', population: 78432, density: 5842 },
                { name: 'Urla İlçesi', population: 74123, density: 187 },
                { name: 'Narlıdere İlçesi', population: 68234, density: 4234 },
                { name: 'Seferihisar İlçesi', population: 48567, density: 128 },
                { name: 'Foça İlçesi', population: 34567, density: 98 },
                { name: 'Karaburun İlçesi', population: 10589, density: 37 }
            ],
            educationLevels: {
                illiterate: 2.3,
                primary: 19.1,
                secondary: 21.5,
                highSchool: 30.8,
                university: 26.3
            },
            economicSectors: {
                services: 65.8,
                industry: 24.2,
                agriculture: 5.5,
                other: 4.5
            },
            ageGroups: {
                '0-14': 21.8,
                '15-64': 69.5,
                '65+': 8.7
            }
        }
    };
    
    // Diğer iller
    if (city === 'Bursa') {
        return {
            population: 3147818,
            growthRate: 1.12,
            urbanRate: 92.3,
            genderRatio: 99.2,
            birthRate: 13.5,
            deathRate: 5.1,
            malePercent: 49.9,
            femalePercent: 50.1,
            urbanPercent: 92.3,
            ruralPercent: 7.7,
            immigrationIn: 95432,
            immigrationOut: 62187,
            districts: [
                { name: 'Osmangazi İlçesi', population: 887475, density: 3842 },
                { name: 'Yıldırım İlçesi', population: 652949, density: 4234 },
                { name: 'Nilüfer İlçesi', population: 483412, density: 2921 },
                { name: 'İnegöl İlçesi', population: 282248, density: 628 },
                { name: 'Gemlik İlçesi', population: 115034, density: 857 },
                { name: 'Mudanya İlçesi', population: 103895, density: 784 }
            ],
            educationLevels: { illiterate: 2.4, primary: 20.1, secondary: 22.8, highSchool: 30.2, university: 24.5 },
            economicSectors: { services: 62.5, industry: 28.3, agriculture: 5.2, other: 4.0 },
            ageGroups: { '0-14': 23.1, '15-64': 70.2, '65+': 6.7 }
        };
    }
    
    if (city === 'Antalya') {
        return {
            population: 2619832,
            growthRate: 1.35,
            urbanRate: 91.8,
            genderRatio: 99.5,
            birthRate: 12.9,
            deathRate: 4.9,
            malePercent: 50.1,
            femalePercent: 49.9,
            urbanPercent: 91.8,
            ruralPercent: 8.2,
            immigrationIn: 125487,
            immigrationOut: 58234,
            districts: [
                { name: 'Kepez İlçesi', population: 576370, density: 3921 },
                { name: 'Muratpaşa İlçesi', population: 542326, density: 5234 },
                { name: 'Alanya İlçesi', population: 333104, density: 1842 },
                { name: 'Manavgat İlçesi', population: 246671, density: 957 },
                { name: 'Konyaaltı İlçesi', population: 188812, density: 2134 },
                { name: 'Serik İlçesi', population: 134328, density: 728 }
            ],
            educationLevels: { illiterate: 2.6, primary: 21.3, secondary: 23.1, highSchool: 29.8, university: 23.2 },
            economicSectors: { services: 75.8, industry: 12.5, agriculture: 8.2, other: 3.5 },
            ageGroups: { '0-14': 22.3, '15-64': 71.2, '65+': 6.5 }
        };
    }
    
    if (city === 'Kocaeli') {
        return {
            population: 2033441,
            growthRate: 1.18,
            urbanRate: 94.6,
            genderRatio: 99.8,
            birthRate: 13.1,
            deathRate: 4.7,
            malePercent: 50.2,
            femalePercent: 49.8,
            urbanPercent: 94.6,
            ruralPercent: 5.4,
            immigrationIn: 78234,
            immigrationOut: 52187,
            districts: [
                { name: 'Gebze İlçesi', population: 400986, density: 1198 },
                { name: 'İzmit İlçesi', population: 376056, density: 4521 },
                { name: 'Körfez İlçesi', population: 171842, density: 2847 },
                { name: 'Darıca İlçesi', population: 210000, density: 3628 },
                { name: 'Çayırova İlçesi', population: 130000, density: 3214 },
                { name: 'Derince İlçesi', population: 145297, density: 2187 },
                { name: 'Gölcük İlçesi', population: 162000, density: 1923 },
                { name: 'Dilovası İlçesi', population: 55123, density: 847 },
                { name: 'Başiskele İlçesi', population: 95421, density: 658 },
                { name: 'Kartepe İlçesi', population: 125687, density: 428 },
                { name: 'Karamürsel İlçesi', population: 58234, density: 287 },
                { name: 'Kandıra İlçesi', population: 48795, density: 87 }
            ],
            educationLevels: { illiterate: 1.9, primary: 18.5, secondary: 21.2, highSchool: 32.1, university: 26.3 },
            economicSectors: { services: 58.2, industry: 35.8, agriculture: 2.5, other: 3.5 },
            ageGroups: { '0-14': 24.2, '15-64': 71.8, '65+': 4.0 }
        };
    }
    
    if (city === 'Adana') {
        return {
            population: 2258718,
            growthRate: 0.95,
            urbanRate: 93.2,
            genderRatio: 99.3,
            birthRate: 15.2,
            deathRate: 5.3,
            malePercent: 49.9,
            femalePercent: 50.1,
            urbanPercent: 93.2,
            ruralPercent: 6.8,
            immigrationIn: 62000,
            immigrationOut: 78000,
            districts: [
                { name: 'Seyhan İlçesi', population: 795821, density: 4800 },
                { name: 'Çukurova İlçesi', population: 403671, density: 3200 },
                { name: 'Yüreğir İlçesi', population: 428753, density: 2100 },
                { name: 'Sarıçam İlçesi', population: 201000, density: 1500 },
                { name: 'Ceyhan İlçesi', population: 162000, density: 850 },
                { name: 'Kozan İlçesi', population: 132000, density: 420 }
            ],
            educationLevels: { illiterate: 3.8, primary: 24.5, secondary: 25.2, highSchool: 27.8, university: 18.7 },
            economicSectors: { services: 61.2, industry: 20.5, agriculture: 14.8, other: 3.5 },
            ageGroups: { '0-14': 26.8, '15-64': 67.5, '65+': 5.7 }
        };
    }
    
    if (city === 'Konya') {
        return {
            population: 2277017,
            growthRate: 1.08,
            urbanRate: 82.5,
            genderRatio: 99.7,
            birthRate: 16.8,
            deathRate: 5.4,
            malePercent: 50.0,
            femalePercent: 50.0,
            urbanPercent: 82.5,
            ruralPercent: 17.5,
            immigrationIn: 58000,
            immigrationOut: 72000,
            districts: [
                { name: 'Selçuklu İlçesi', population: 682514, density: 2800 },
                { name: 'Meram İlçesi', population: 353000, density: 2100 },
                { name: 'Karatay İlçesi', population: 332000, density: 1900 },
                { name: 'Ereğli İlçesi', population: 145000, density: 650 },
                { name: 'Akşehir İlçesi', population: 93000, density: 380 },
                { name: 'Beyşehir İlçesi', population: 73000, density: 220 }
            ],
            educationLevels: { illiterate: 4.2, primary: 26.8, secondary: 24.5, highSchool: 26.2, university: 18.3 },
            economicSectors: { services: 55.2, industry: 22.8, agriculture: 18.5, other: 3.5 },
            ageGroups: { '0-14': 27.5, '15-64': 66.8, '65+': 5.7 }
        };
    }
    
    if (city === 'Gaziantep') {
        return {
            population: 2130432,
            growthRate: 1.42,
            urbanRate: 89.5,
            genderRatio: 99.8,
            birthRate: 18.5,
            deathRate: 4.8,
            malePercent: 50.1,
            femalePercent: 49.9,
            urbanPercent: 89.5,
            ruralPercent: 10.5,
            immigrationIn: 95000,
            immigrationOut: 48000,
            districts: [
                { name: 'Şahinbey İlçesi', population: 987654, density: 4200 },
                { name: 'Şehitkamil İlçesi', population: 765432, density: 3800 },
                { name: 'Oğuzeli İlçesi', population: 135000, density: 850 },
                { name: 'Nizip İlçesi', population: 148000, density: 920 },
                { name: 'İslahiye İlçesi', population: 68000, density: 420 },
                { name: 'Araban İlçesi', population: 35000, density: 180 }
            ],
            educationLevels: { illiterate: 5.8, primary: 28.5, secondary: 26.2, highSchool: 24.8, university: 14.7 },
            economicSectors: { services: 58.5, industry: 28.2, agriculture: 9.8, other: 3.5 },
            ageGroups: { '0-14': 31.2, '15-64': 64.5, '65+': 4.3 }
        };
    }
    
    if (city === 'Şanlıurfa') {
        return {
            population: 2155256,
            growthRate: 1.85,
            urbanRate: 78.2,
            genderRatio: 100.2,
            birthRate: 24.5,
            deathRate: 5.2,
            malePercent: 50.3,
            femalePercent: 49.7,
            urbanPercent: 78.2,
            ruralPercent: 21.8,
            immigrationIn: 42000,
            immigrationOut: 85000,
            districts: [
                { name: 'Eyyübiye İlçesi', population: 412000, density: 3200 },
                { name: 'Haliliye İlçesi', population: 398000, density: 3500 },
                { name: 'Karaköprü İlçesi', population: 215000, density: 2100 },
                { name: 'Viranşehir İlçesi', population: 198000, density: 650 },
                { name: 'Suruç İlçesi', population: 108000, density: 420 },
                { name: 'Siverek İlçesi', population: 285000, density: 380 }
            ],
            educationLevels: { illiterate: 9.2, primary: 35.8, secondary: 26.5, highSchool: 19.8, university: 8.7 },
            economicSectors: { services: 48.5, industry: 15.2, agriculture: 32.8, other: 3.5 },
            ageGroups: { '0-14': 38.5, '15-64': 58.2, '65+': 3.3 }
        };
    }
    
    if (city === 'Mersin') {
        return {
            population: 1891145,
            growthRate: 1.15,
            urbanRate: 88.7,
            genderRatio: 99.4,
            birthRate: 14.8,
            deathRate: 5.1,
            malePercent: 49.9,
            femalePercent: 50.1,
            urbanPercent: 88.7,
            ruralPercent: 11.3,
            immigrationIn: 68000,
            immigrationOut: 55000,
            districts: [
                { name: 'Toroslar İlçesi', population: 298000, density: 2800 },
                { name: 'Akdeniz İlçesi', population: 278000, density: 3200 },
                { name: 'Yenişehir İlçesi', population: 285000, density: 2500 },
                { name: 'Mezitli İlçesi', population: 198000, density: 1900 },
                { name: 'Tarsus İlçesi', population: 345000, density: 1200 },
                { name: 'Erdemli İlçesi', population: 145000, density: 520 }
            ],
            educationLevels: { illiterate: 3.5, primary: 23.8, secondary: 24.5, highSchool: 28.2, university: 20.0 },
            economicSectors: { services: 62.8, industry: 18.5, agriculture: 15.2, other: 3.5 },
            ageGroups: { '0-14': 25.2, '15-64': 68.5, '65+': 6.3 }
        };
    }
    
    if (city === 'Samsun') {
        return {
            population: 1371804,
            growthRate: 0.88,
            urbanRate: 79.5,
            genderRatio: 99.1,
            birthRate: 13.2,
            deathRate: 5.8,
            malePercent: 49.8,
            femalePercent: 50.2,
            urbanPercent: 79.5,
            ruralPercent: 20.5,
            immigrationIn: 45000,
            immigrationOut: 62000,
            districts: [
                { name: 'İlkadım İlçesi', population: 342000, density: 3500 },
                { name: 'Atakum İlçesi', population: 238000, density: 2800 },
                { name: 'Canik İlçesi', population: 98000, density: 1200 },
                { name: 'Tekkeköy İlçesi', population: 62000, density: 850 },
                { name: 'Bafra İlçesi', population: 152000, density: 420 },
                { name: 'Çarşamba İlçesi', population: 138000, density: 380 }
            ],
            educationLevels: { illiterate: 3.2, primary: 22.5, secondary: 23.8, highSchool: 29.5, university: 21.0 },
            economicSectors: { services: 58.5, industry: 18.2, agriculture: 20.8, other: 2.5 },
            ageGroups: { '0-14': 23.8, '15-64': 68.2, '65+': 8.0 }
        };
    }
    
    if (city === 'Diyarbakır') {
        return {
            population: 1783431,
            growthRate: 1.52,
            urbanRate: 81.3,
            genderRatio: 100.5,
            birthRate: 21.5,
            deathRate: 5.1,
            malePercent: 50.5,
            femalePercent: 49.5,
            urbanPercent: 81.3,
            ruralPercent: 18.7,
            immigrationIn: 38000,
            immigrationOut: 95000,
            districts: [
                { name: 'Bağlar İlçesi', population: 385000, density: 4200 },
                { name: 'Yenişehir İlçesi', population: 298000, density: 3800 },
                { name: 'Kayapınar İlçesi', population: 412000, density: 2800 },
                { name: 'Sur İlçesi', population: 115000, density: 5200 },
                { name: 'Bismil İlçesi', population: 125000, density: 650 },
                { name: 'Ergani İlçesi', population: 138000, density: 420 }
            ],
            educationLevels: { illiterate: 8.5, primary: 32.8, secondary: 27.5, highSchool: 21.2, university: 10.0 },
            economicSectors: { services: 52.5, industry: 18.2, agriculture: 25.8, other: 3.5 },
            ageGroups: { '0-14': 35.2, '15-64': 61.5, '65+': 3.3 }
        };
    }
    
    if (city === 'Hatay') {
        return {
            population: 1686043,
            growthRate: 1.25,
            urbanRate: 76.8,
            genderRatio: 99.8,
            birthRate: 16.2,
            deathRate: 5.3,
            malePercent: 50.1,
            femalePercent: 49.9,
            urbanPercent: 76.8,
            ruralPercent: 23.2,
            immigrationIn: 52000,
            immigrationOut: 68000,
            districts: [
                { name: 'Antakya İlçesi', population: 385000, density: 2800 },
                { name: 'Defne İlçesi', population: 162000, density: 3200 },
                { name: 'Arsuz İlçesi', population: 95000, density: 850 },
                { name: 'İskenderun İlçesi', population: 248000, density: 1900 },
                { name: 'Dörtyol İlçesi', population: 125000, density: 1200 },
                { name: 'Kırıkhan İlçesi', population: 118000, density: 620 }
            ],
            educationLevels: { illiterate: 5.2, primary: 27.5, secondary: 25.8, highSchool: 25.2, university: 16.3 },
            economicSectors: { services: 58.2, industry: 22.5, agriculture: 16.8, other: 2.5 },
            ageGroups: { '0-14': 28.5, '15-64': 66.2, '65+': 5.3 }
        };
    }
    
    if (city === 'Manisa') {
        return {
            population: 1468279,
            growthRate: 0.92,
            urbanRate: 73.5,
            genderRatio: 99.2,
            birthRate: 13.8,
            deathRate: 5.9,
            malePercent: 49.9,
            femalePercent: 50.1,
            urbanPercent: 73.5,
            ruralPercent: 26.5,
            immigrationIn: 42000,
            immigrationOut: 58000,
            districts: [
                { name: 'Şehzadeler İlçesi', population: 198000, density: 2800 },
                { name: 'Yunusemre İlçesi', population: 225000, density: 2200 },
                { name: 'Akhisar İlçesi', population: 178000, density: 850 },
                { name: 'Turgutlu İlçesi', population: 168000, density: 920 },
                { name: 'Salihli İlçesi', population: 165000, density: 620 },
                { name: 'Soma İlçesi', population: 115000, density: 480 }
            ],
            educationLevels: { illiterate: 4.5, primary: 25.8, secondary: 24.2, highSchool: 27.5, university: 18.0 },
            economicSectors: { services: 54.2, industry: 25.8, agriculture: 17.5, other: 2.5 },
            ageGroups: { '0-14': 24.8, '15-64': 67.5, '65+': 7.7 }
        };
    }
    
    if (city === 'Kayseri') {
        return {
            population: 1421362,
            growthRate: 1.05,
            urbanRate: 88.2,
            genderRatio: 99.5,
            birthRate: 15.2,
            deathRate: 5.4,
            malePercent: 49.9,
            femalePercent: 50.1,
            urbanPercent: 88.2,
            ruralPercent: 11.8,
            immigrationIn: 52000,
            immigrationOut: 65000,
            districts: [
                { name: 'Melikgazi İlçesi', population: 578000, density: 3200 },
                { name: 'Kocasinan İlçesi', population: 398000, density: 2800 },
                { name: 'Talas İlçesi', population: 145000, density: 1200 },
                { name: 'Develi İlçesi', population: 68000, density: 420 },
                { name: 'İncesu İlçesi', population: 28000, density: 280 },
                { name: 'Yahyalı İlçesi', population: 35000, density: 180 }
            ],
            educationLevels: { illiterate: 3.8, primary: 24.2, secondary: 24.8, highSchool: 28.5, university: 18.7 },
            economicSectors: { services: 58.5, industry: 28.2, agriculture: 10.8, other: 2.5 },
            ageGroups: { '0-14': 26.2, '15-64': 68.5, '65+': 5.3 }
        };
    }
    
    if (city === 'Balıkesir') {
        return {
            population: 1257590,
            growthRate: 0.75,
            urbanRate: 68.5,
            genderRatio: 99.0,
            birthRate: 12.5,
            deathRate: 6.2,
            malePercent: 49.7,
            femalePercent: 50.3,
            urbanPercent: 68.5,
            ruralPercent: 31.5,
            immigrationIn: 38000,
            immigrationOut: 52000,
            districts: [
                { name: 'Altıeylül İlçesi', population: 185000, density: 2200 },
                { name: 'Karesi İlçesi', population: 195000, density: 1800 },
                { name: 'Bandırma İlçesi', population: 162000, density: 1500 },
                { name: 'Edremit İlçesi', population: 158000, density: 850 },
                { name: 'Gönen İlçesi', population: 78000, density: 420 },
                { name: 'Ayvalık İlçesi', population: 72000, density: 380 }
            ],
            educationLevels: { illiterate: 4.2, primary: 26.5, secondary: 23.8, highSchool: 27.2, university: 18.3 },
            economicSectors: { services: 52.8, industry: 22.5, agriculture: 22.2, other: 2.5 },
            ageGroups: { '0-14': 22.5, '15-64': 67.8, '65+': 9.7 }
        };
    }
    
    if (city === 'Kahramanmaraş') {
        return {
            population: 1168163,
            growthRate: 1.15,
            urbanRate: 78.5,
            genderRatio: 99.8,
            birthRate: 17.2,
            deathRate: 5.2,
            malePercent: 50.0,
            femalePercent: 50.0,
            urbanPercent: 78.5,
            ruralPercent: 21.5,
            immigrationIn: 42000,
            immigrationOut: 68000,
            districts: [
                { name: 'Onikişubat İlçesi', population: 398000, density: 2800 },
                { name: 'Dulkadiroğlu İlçesi', population: 225000, density: 2200 },
                { name: 'Elbistan İlçesi', population: 145000, density: 620 },
                { name: 'Afşin İlçesi', population: 82000, density: 420 },
                { name: 'Pazarcık İlçesi', population: 72000, density: 380 },
                { name: 'Türkoğlu İlçesi', population: 68000, density: 320 }
            ],
            educationLevels: { illiterate: 5.8, primary: 28.5, secondary: 26.2, highSchool: 24.8, university: 14.7 },
            economicSectors: { services: 54.2, industry: 25.8, agriculture: 17.5, other: 2.5 },
            ageGroups: { '0-14': 29.5, '15-64': 65.8, '65+': 4.7 }
        };
    }
    
    if (city === 'Van') {
        return {
            population: 1136757,
            growthRate: 1.68,
            urbanRate: 72.5,
            genderRatio: 100.8,
            birthRate: 22.5,
            deathRate: 5.0,
            malePercent: 50.8,
            femalePercent: 49.2,
            urbanPercent: 72.5,
            ruralPercent: 27.5,
            immigrationIn: 28000,
            immigrationOut: 85000,
            districts: [
                { name: 'İpekyolu İlçesi', population: 298000, density: 2800 },
                { name: 'Tuşba İlçesi', population: 185000, density: 2200 },
                { name: 'Edremit İlçesi', population: 142000, density: 1800 },
                { name: 'Erciş İlçesi', population: 175000, density: 620 },
                { name: 'Başkale İlçesi', population: 62000, density: 180 },
                { name: 'Çatak İlçesi', population: 28000, density: 95 }
            ],
            educationLevels: { illiterate: 9.8, primary: 35.2, secondary: 27.5, highSchool: 19.8, university: 7.7 },
            economicSectors: { services: 48.5, industry: 12.8, agriculture: 35.2, other: 3.5 },
            ageGroups: { '0-14': 37.8, '15-64': 58.5, '65+': 3.7 }
        };
    }
    
    if (city === 'Aydın') {
        return {
            population: 1134031,
            growthRate: 0.85,
            urbanRate: 65.8,
            genderRatio: 98.9,
            birthRate: 12.2,
            deathRate: 6.5,
            malePercent: 49.6,
            femalePercent: 50.4,
            urbanPercent: 65.8,
            ruralPercent: 34.2,
            immigrationIn: 42000,
            immigrationOut: 48000,
            districts: [
                { name: 'Efeler İlçesi', population: 285000, density: 2200 },
                { name: 'Nazilli İlçesi', population: 162000, density: 1200 },
                { name: 'Söke İlçesi', population: 125000, density: 850 },
                { name: 'Kuşadası İlçesi', population: 118000, density: 1500 },
                { name: 'Didim İlçesi', population: 95000, density: 920 },
                { name: 'İncirliova İlçesi', population: 52000, density: 620 }
            ],
            educationLevels: { illiterate: 4.8, primary: 27.5, secondary: 24.2, highSchool: 26.8, university: 16.7 },
            economicSectors: { services: 58.5, industry: 18.2, agriculture: 20.8, other: 2.5 },
            ageGroups: { '0-14': 22.8, '15-64': 67.2, '65+': 10.0 }
        };
    }
    
    // Varsayılan veri (seçilen şehir yoksa)
    const defaultData = {
        population: 1500000,
        growthRate: 1.05,
        urbanRate: 85.0,
        genderRatio: 99.0,
        birthRate: 14.5,
        deathRate: 5.0,
        malePercent: 50.0,
        femalePercent: 50.0,
        urbanPercent: 85.0,
        ruralPercent: 15.0,
        immigrationIn: 50000,
        immigrationOut: 35000,
        districts: [
            { name: 'Merkez İlçesi', population: 450000, density: 2500 },
            { name: 'Batı İlçesi', population: 320000, density: 1800 },
            { name: 'Doğu İlçesi', population: 280000, density: 1500 },
            { name: 'Kuzey İlçesi', population: 220000, density: 1200 },
            { name: 'Güney İlçesi', population: 150000, density: 800 },
            { name: 'Kırsal Bölge', population: 80000, density: 120 }
        ],
        educationLevels: {
            illiterate: 3.5,
            primary: 22.5,
            secondary: 24.0,
            highSchool: 28.5,
            university: 21.5
        },
        economicSectors: {
            services: 58.5,
            industry: 22.0,
            agriculture: 12.5,
            other: 7.0
        },
        ageGroups: {
            '0-14': 24.5,
            '15-64': 68.2,
            '65+': 7.3
        }
    };
    
    return cityData[city] || defaultData;
}

// Verileri Göster
function displayData(data) {
    // Özet Kartlar
    document.getElementById('totalPopulation').textContent = data.population.toLocaleString('tr-TR');
    document.getElementById('growthRate').textContent = `%${data.growthRate.toFixed(2)}`;
    document.getElementById('urbanRate').textContent = `%${data.urbanRate.toFixed(1)}`;
    document.getElementById('genderRatio').textContent = `${data.genderRatio.toFixed(1)} (E/K)`;
    
    // Grafikler
    createPopulationChart();
    createGenderChart(data);
    createUrbanRuralChart(data);
    createEducationChart(data);
    createEconomicChart(data);
    createAgeGroupsChart(data);
    createMigrationChart(data);
    createPyramidChart();
    
    // Tablo
    createVitalStatsTable(data);
    
    // Harita
    createDistributionMap();
    
    // Fırsatlar ve Sorunlar
    createOpportunities(data);
    createProblems(data);
    createConclusion(data);
}

// Grafik 1: Nüfuslanma Süreci
function createPopulationChart() {
    const ctx = document.getElementById('populationChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
            datasets: [{
                label: 'Nüfus',
                data: [1200000, 1350000, 1500000, 1680000, 1850000, 2000000],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                title: { display: true, text: 'Yıllara Göre Nüfus Değişimi' }
            },
            scales: {
                y: { beginAtZero: false }
            }
        }
    });
}

// Grafik 2: Cinsiyet Dağılımı
function createGenderChart(data) {
    const ctx = document.getElementById('genderChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Erkek', 'Kadın'],
            datasets: [{
                data: [data.malePercent, data.femalePercent],
                backgroundColor: ['#667eea', '#764ba2']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

// Grafik 3: Kentsel-Kırsal
function createUrbanRuralChart(data) {
    const ctx = document.getElementById('urbanRuralChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Kentsel', 'Kırsal'],
            datasets: [{
                data: [data.urbanPercent, data.ruralPercent],
                backgroundColor: ['#667eea', '#e0e7ff']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

// Grafik 4: Göç Hareketleri
function createMigrationChart(data) {
    const ctx = document.getElementById('migrationChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Gelen Göç', 'Giden Göç', 'Net Göç'],
            datasets: [{
                label: 'Kişi Sayısı',
                data: [data.immigrationIn, data.immigrationOut, data.immigrationIn - data.immigrationOut],
                backgroundColor: ['#667eea', '#764ba2', '#48bb78']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'Göç İstatistikleri' }
            }
        }
    });
}

// Grafik 5: Nüfus Piramidi
function createPyramidChart() {
    const ctx = document.getElementById('pyramidChart').getContext('2d');
    const ageGroups = ['0-14', '15-24', '25-34', '35-44', '45-54', '55-64', '65+'];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ageGroups,
            datasets: [{
                label: 'Erkek',
                data: [-18, -15, -14, -12, -10, -8, -6],
                backgroundColor: '#667eea'
            }, {
                label: 'Kadın',
                data: [17, 14, 13, 11, 9, 8, 7],
                backgroundColor: '#764ba2'
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Yaş Gruplarına Göre Nüfus Dağılımı (%)' }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        callback: function(value) {
                            return Math.abs(value) + '%';
                        }
                    }
                },
                y: { stacked: true }
            }
        }
    });
}

// Tablo: Doğum, Ölüm, Doğal Artış
function createVitalStatsTable(data) {
    const tbody = document.querySelector('#vitalStatsTable tbody');
    tbody.innerHTML = `
        <tr>
            <td><strong>Doğum Oranı (‰)</strong></td>
            <td>${data.birthRate.toFixed(1)}</td>
            <td>13.5</td>
        </tr>
        <tr>
            <td><strong>Ölüm Oranı (‰)</strong></td>
            <td>${data.deathRate.toFixed(1)}</td>
            <td>5.1</td>
        </tr>
        <tr>
            <td><strong>Doğal Artış Oranı (‰)</strong></td>
            <td>${(data.birthRate - data.deathRate).toFixed(1)}</td>
            <td>8.4</td>
        </tr>
    `;
}

// Harita - İlçelere Göre Nüfus Dağılışı
function createDistributionMap() {
    const mapContainer = document.getElementById('distributionMap');
    const selectedCity = citySelect.value;
    const data = generateCityData(selectedCity);
    
    // İlçeleri nüfusa göre sırala
    const sortedDistricts = [...data.districts].sort((a, b) => b.population - a.population);
    
    let html = '<div class="district-grid">';
    
    sortedDistricts.forEach((district, index) => {
        const densityLevel = district.density > 3000 ? 'very-high' : 
                            district.density > 1500 ? 'high' : 
                            district.density > 500 ? 'medium' : 'low';
        
        html += `
            <div class="district-card ${densityLevel}">
                <div class="district-rank">#${index + 1}</div>
                <h4>${district.name}</h4>
                <div class="district-stats">
                    <div class="stat-item">
                        <span class="stat-icon">👥</span>
                        <span class="stat-value">${district.population.toLocaleString('tr-TR')}</span>
                        <span class="stat-label">Nüfus</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">📍</span>
                        <span class="stat-value">${district.density}</span>
                        <span class="stat-label">Yoğunluk (kişi/km²)</span>
                    </div>
                </div>
                <div class="density-bar">
                    <div class="density-fill" style="width: ${Math.min(district.density / 100, 100)}%"></div>
                </div>
                <div class="density-label">${getDensityLabel(district.density)}</div>
            </div>
        `;
    });
    
    html += '</div>';
    
    // Yoğunluk Açıklama Kutusu
    html += `
        <div class="density-legend">
            <h4>📊 Nüfus Yoğunluğu Sınıflandırması</h4>
            <div class="legend-items">
                <div class="legend-item">
                    <span class="legend-color very-high"></span>
                    <span>Çok Yoğun (>3000 kişi/km²)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color high"></span>
                    <span>Yoğun (1500-3000 kişi/km²)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color medium"></span>
                    <span>Orta (500-1500 kişi/km²)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color low"></span>
                    <span>Seyrek (<500 kişi/km²)</span>
                </div>
            </div>
        </div>
    `;
    
    mapContainer.innerHTML = html;
}

function getDensityLabel(density) {
    if (density > 3000) return '🔴 Çok Yoğun';
    if (density > 1500) return '🟠 Yoğun';
    if (density > 500) return '🟡 Orta';
    return '🟢 Seyrek';
}

// Fırsatlar
function createOpportunities(data) {
    const content = document.getElementById('opportunitiesContent');
    const opportunities = [];
    
    if (data.growthRate > 1.0) {
        opportunities.push('Genç ve dinamik nüfus yapısı sayesinde işgücü potansiyeli yüksek');
        opportunities.push('Girişimcilik ve yenilikçilik için uygun demografik yapı');
    }
    
    if (data.urbanRate > 90) {
        opportunities.push('Yüksek kentleşme oranı ile gelişmiş altyapı ve hizmet sektörü');
        opportunities.push('Eğitim ve sağlık hizmetlerine kolay erişim');
    }
    
    if (data.immigrationIn > data.immigrationOut) {
        opportunities.push('Net göç alması ekonomik çekim merkezi olduğunu gösteriyor');
        opportunities.push('Çeşitli sektörlerde kalifiye eleman bulma imkanı');
    }
    
    opportunities.push('Kültürel çeşitlilik ve sosyal dinamizm');
    opportunities.push('Tüketici pazarının büyüklüğü ve çeşitliliği');
    
    content.innerHTML = `
        <h3>🎯 Tespit Edilen Fırsatlar:</h3>
        <ul>
            ${opportunities.map(opp => `<li>${opp}</li>`).join('')}
        </ul>
        <h3>💡 Fırsatlardan Yararlanma Önerileri:</h3>
        <ul>
            <li>Genç nüfusa yönelik istihdam programları geliştirilmeli</li>
            <li>Teknoloji ve inovasyon merkezleri kurulmalı</li>
            <li>Mesleki eğitim ve beceri geliştirme programları yaygınlaştırılmalı</li>
            <li>Girişimcilik ekosistemi desteklenmeli</li>
        </ul>
    `;
}

// Sorunlar
function createProblems(data) {
    const content = document.getElementById('problemsContent');
    const problems = [];
    const solutions = [];
    
    if (data.urbanRate > 95) {
        problems.push('Aşırı kentleşme ve altyapı baskısı');
        solutions.push('Kentsel dönüşüm projeleri hızlandırılmalı');
        solutions.push('Akıllı şehir teknolojileri kullanılmalı');
    }
    
    if (data.immigrationIn > 100000) {
        problems.push('Yoğun göç nedeniyle konut ve ulaşım sorunları');
        solutions.push('Toplu konut projeleri geliştirilmeli');
        solutions.push('Toplu taşıma ağı genişletilmeli');
    }
    
    problems.push('İşsizlik ve istihdam dengesizliği');
    problems.push('Eğitim ve sağlık hizmetlerinde kapasite yetersizliği');
    
    solutions.push('İstihdam odaklı yatırımlar teşvik edilmeli');
    solutions.push('Eğitim ve sağlık altyapısı güçlendirilmeli');
    solutions.push('Sosyal hizmetler ve destek programları artırılmalı');
    
    content.innerHTML = `
        <h3>⚠️ Tespit Edilen Sorunlar:</h3>
        <ul>
            ${problems.map(prob => `<li>${prob}</li>`).join('')}
        </ul>
        <h3>✅ Çözüm Önerileri:</h3>
        <ul>
            ${solutions.map(sol => `<li>${sol}</li>`).join('')}
        </ul>
    `;
}

// Sonuç
function createConclusion(data) {
    const content = document.getElementById('conclusionContent');
    const netMigration = data.immigrationIn - data.immigrationOut;
    const naturalIncrease = data.birthRate - data.deathRate;
    
    content.innerHTML = `
        <h3>📊 Demografik Profil Özeti</h3>
        <p><strong>Toplam Nüfus:</strong> ${data.population.toLocaleString('tr-TR')} kişi</p>
        <p><strong>Nüfus Artış Hızı:</strong> Yıllık %${data.growthRate.toFixed(2)} oranında ${data.growthRate > 1 ? 'artış' : 'azalış'} göstermektedir.</p>
        <p><strong>Kentleşme Düzeyi:</strong> %${data.urbanRate.toFixed(1)} ile ${data.urbanRate > 90 ? 'çok yüksek' : 'yüksek'} kentleşme oranına sahiptir.</p>
        <p><strong>Göç Dengesi:</strong> ${netMigration > 0 ? `${netMigration.toLocaleString('tr-TR')} kişi net göç alarak çekim merkezi konumundadır.` : 'Göç vermektedir.'}</p>
        <p><strong>Doğal Artış:</strong> ‰${naturalIncrease.toFixed(1)} oranında doğal nüfus artışı yaşanmaktadır.</p>
        
        <h3>🎯 Genel Değerlendirme</h3>
        <p>İl, ${data.growthRate > 1 ? 'dinamik nüfus yapısı' : 'istikrarlı nüfus yapısı'} ve ${data.urbanRate > 90 ? 'gelişmiş kentsel altyapısı' : 'gelişmekte olan kentsel yapısı'} ile öne çıkmaktadır. 
        ${netMigration > 0 ? 'Göç alması ekonomik canlılığın ve fırsatların göstergesidir.' : ''} 
        Sürdürülebilir kalkınma için nüfus planlaması, altyapı yatırımları ve sosyal politikaların dengeli bir şekilde uygulanması gerekmektedir.</p>
    `;
}

// PDF İndirme
document.getElementById('downloadBtn').addEventListener('click', () => {
    alert('PDF indirme özelliği yakında eklenecektir. Şu an için sayfayı yazdırabilirsiniz (Ctrl+P).');
    window.print();
});


// Grafik: Eğitim Düzeyi
function createEducationChart(data) {
    const ctx = document.getElementById('educationChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Okur-Yazar Değil', 'İlkokul', 'Ortaokul', 'Lise', 'Üniversite'],
            datasets: [{
                label: 'Nüfus Oranı (%)',
                data: [
                    data.educationLevels.illiterate,
                    data.educationLevels.primary,
                    data.educationLevels.secondary,
                    data.educationLevels.highSchool,
                    data.educationLevels.university
                ],
                backgroundColor: [
                    '#ef4444',
                    '#f59e0b',
                    '#eab308',
                    '#22c55e',
                    '#667eea'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Grafik: Ekonomik Sektörler
function createEconomicChart(data) {
    const ctx = document.getElementById('economicChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Hizmetler', 'Sanayi', 'Tarım', 'Diğer'],
            datasets: [{
                data: [
                    data.economicSectors.services,
                    data.economicSectors.industry,
                    data.economicSectors.agriculture,
                    data.economicSectors.other
                ],
                backgroundColor: ['#667eea', '#764ba2', '#48bb78', '#f59e0b']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': %' + context.parsed.toFixed(1);
                        }
                    }
                }
            }
        }
    });
}

// Grafik: Yaş Grupları
function createAgeGroupsChart(data) {
    const ctx = document.getElementById('ageGroupsChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['0-14 Yaş (Genç)', '15-64 Yaş (Çalışma)', '65+ Yaş (Yaşlı)'],
            datasets: [{
                data: [
                    data.ageGroups['0-14'],
                    data.ageGroups['15-64'],
                    data.ageGroups['65+']
                ],
                backgroundColor: ['#fbbf24', '#667eea', '#94a3b8']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': %' + context.parsed.toFixed(1);
                        }
                    }
                }
            }
        }
    });
}
