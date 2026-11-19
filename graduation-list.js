(function () {
  "use strict";

  const baseFirstNames = [
    "Amanya", "Marvin", "Bless", "Collins", "Mary", "Sarah", "David", "Joseph",
    "Grace", "Samuel", "Aisha", "Daniel", "Rebecca", "Brian", "Patricia", "Peter",
    "Esther", "Paul", "Ruth", "James", "Mariam", "Ivan", "Christine", "John",
    "Joy", "Stephen", "Doreen", "Robert", "Alice", "Ronald", "Faith", "Michael","Linda", "Charles", "Sandra", "Anthony", "Dorothy", "Joshua", "Barbara", "Andrew", "Jennifer", "Kenneth", "Elizabeth", "Kevin", "Maria", "Brian", "Susan", "George",
    "Margaret", "Edward", "Dorothy", "Ronald", "Lisa", "Timothy", "Nancy", "Jason",
    "Karen", "Jeffrey", "Betty", "Ryan", "Helen", "Jacob", "Sandra", "Gary",
    "Donna", "Nicholas", "Carol", "Eric", "Ruth"
  ];

  const baseLastNames = [
    "Abaasa", "Abaho", "Akampurira", "Atukunda", "Busingye", "Byamukama", "Kamara",
    "Katusiime", "Kigundu", "Kobusingye", "Kyomuhangi", "Mugisha", "Mulungi",
    "Mwesigwa", "Nakato", "Namara", "Nabukenya", "Ninsiima", "Nsubuga", "Rwabuto",
    "Ssekitooleko", "Tumusiime", "Turyamureeba", "Twesigye","Wamala", "Wandera", "Wanyama", "Yiga", "Zziwa", "Kakembo", "Kakooza", "Kakuru",
    "Kakungulu", "Kakwezi", "Kalema", "Kalibala", "Kalungi", "Kamoga", "Kamugisha",
    "Kamya", "Kanakulya", "Kandole", "Kanduyi", "Kangave", "Kangwagye", "Kanungu",
    "Kanyesigye"
  ];

  const additionalFirstNames = [
    "Abdallah", "Abdu", "Abubakar", "Adnan", "Achan", "Asha", "Ayoub", "Bakhita",
    "Basil", "Chantal", "Damalie", "Evans", "Gabriel", "Hajarah", "Ismail", "Jalia",
    "Kizito", "Mwaka", "Nabil", "Rukia", "Shadia", "Tendo", "Zubeda", "Aaliyah",
    "Adela", "Biira", "Cathy", "Consolata", "Fiona", "Gilda", "Halidah", "Iddi",
    "Jamil", "Katushabe", "Kiiza", "Latif", "Mable", "Mutesi", "Najib", "Naki",
    "Pendo", "Quinn", "Rema", "Shaban", "Teddy", "Uchenna", "Vivian", "Yasin",
    "Zula", "Abaasa", "Afiya", "Aloysius", "Anwar", "Baraka", "Chloe", "Dorah",
    "Ephraim", "Fatumah", "Gideon", "Hamza", "Ibrahim", "Jovan", "Khadija", "Lukman",
    "Mariam", "Nadia", "Omar", "Patience", "Salim", "Tabitha", "Umar", "Yvonne"
  ];

  const additionalLastNames = [
    "Abiriga", "Adyebo", "Ahebwa", "Aliguma", "Atukwase", "Babirye", "Baluku", "Bamwine",
    "Baryomunsi", "Egesa", "Kabuye", "Kagimu", "Kalyegira", "Kanyomozi", "Kasangaki",
    "Kasujja", "Kibirige", "Kigongo", "Kisembo", "Kivumbi", "Kyeyune", "Lumu", "Muwanga",
    "Nambasa", "Nampiima", "Nankya", "Nankunda", "Nanyonjo", "Ntegeka", "Ssewanyana",
    "Ssewankambo", "Tukamushaba", "Twebaze", "Baguma", "Kagoda", "Kakande", "Kisakye",
    "Mugabi", "Mujuni", "Nabaggala", "Nabiruma", "Nakiranda", "Namagembe", "Namutebi",
    "Ssekandi", "Ssekitoleko", "Sserwanga", "Tibenderana", "Tumwebaze", "Tushabe",
    "Wasswa", "Abdalla", "Akena", "Asiimwe", "Bukenya", "Businge", "Byamugisha",
    "Kakooza", "Kasule", "Kato", "Kawuma", "Kiconco", "Kisakye", "Kiyingi", "Lukwago",
    "Mugabe", "Mugabi", "Mugisha", "Mugisha", "Nabirye", "Nakalema", "Nakimuli",
    "Nakiyingi", "Namanya", "Nambuya", "Nankabirwa", "Nassali", "Nawanyago", "Ntege",
    "Ochieng", "Okwera", "Onyango", "Opira", "Ssebisubi", "Ssebuggwawo", "Ssebufu",
    "Ssekyewa", "Ssenfuka", "Ssenyonga", "Turyahikayo", "Wanyama", "Wasswa", "Yeko"
  ];

  const firstNames = [...new Set([...baseFirstNames, ...additionalFirstNames])];
  const lastNames = [...new Set([...baseLastNames, ...additionalLastNames])];

  const programmes = [
    "BMC", "BTHM", "BBA", "BSN", "BEd",
    "LLB", "BCS", "DIT", "BBA", "BPH"
  ];

  const PAGE_SIZE = 50;
  let currentPage = 1;
  let filteredStudents = [];

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createRegistrationNumbers(count) {
    const numbers = new Set();
    while (numbers.size < count) {
      const registrationNumber = `2023-08-${String(randomInt(10000, 99999)).padStart(5, "0")}`;
      if (registrationNumber !== "2024-08-28375" && registrationNumber !== "2024-08-31963") {
        numbers.add(registrationNumber);
      }
    }
    return Array.from(numbers);
  }

  function generateStudents(count) {
    const registrationNumbers = createRegistrationNumbers(count);
    const generatedNames = new Set();
    return registrationNumbers.map((registrationNumber, index) => {
      let name;
      do {
        const firstName = firstNames[randomInt(0, firstNames.length - 1)];
        const lastName = lastNames[randomInt(0, lastNames.length - 1)];
        name = `${lastName} ${firstName}`;
      } while (generatedNames.has(name.toLowerCase()));
      generatedNames.add(name.toLowerCase());

      const certificateReady = randomInt(0, 3) !== 0;

      return {
        id: index + 1,
        name,
        registrationNumber,
        programme: programmes[randomInt(0, programmes.length - 1)],
        gender: randomInt(0, 1) === 0 ? "Female" : "Male",
        certificateReady
      };
    });
  }

  const students = generateStudents(1998);
  students.push({
    id: 1999,
    name: "Ssembatya Joseph",
    registrationNumber: "2024-08-28375",
    programme: "DIT",
    gender: "Male",
    certificateReady: false
  });
  students.push({
    id: 2000,
    name: "MUNGUFEN Santos Marcelino",
    registrationNumber: "2024-08-31963",
    programme: "BBA",
    gender: "Male",
    certificateReady: true
  });
  students.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

  const studentList = document.getElementById("studentList");
  const pagination = document.getElementById("pagination");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("studentSearch");
  const publishedCount = document.getElementById("publishedCount");
  const shownCount = document.getElementById("shownCount");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function renderStudents() {
    if (filteredStudents.length === 0) {
      studentList.innerHTML = '<div class="no-results">No students match your search.</div>';
      shownCount.textContent = "0";
      pagination.innerHTML = "";
      return;
    }

    const totalPages = Math.ceil(filteredStudents.length / PAGE_SIZE);
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, filteredStudents.length);
    const pageItems = filteredStudents.slice(start, end);

    studentList.innerHTML = pageItems.map((student) => `
      <article class="student-card">
        <div class="avatar">${escapeHtml(student.name.trim().charAt(0).toUpperCase())}</div>
        <div class="student-identity">
          <div class="student-name">${escapeHtml(student.name)}</div>
          <div class="registration">${escapeHtml(student.registrationNumber)}</div>
        </div>
        <div class="student-programme">
          <div class="programme">${escapeHtml(student.programme)}</div>
          <div class="programme-sub">Cleared to Graduate</div>
          <div class="gender">Gender <strong>${escapeHtml(student.gender)}</strong></div>
        </div>
        <div class="status-column">
          <div class="cleared">Cleared to Graduate</div>
          <div class="certificate ${student.certificateReady ? "" : "not-ready"}">
            ${student.certificateReady ? "Certificate ready" : "Certificate not ready"}
          </div>
        </div>
      </article>
    `).join("");

    shownCount.textContent = `${start + 1}-${end}`;
    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      pagination.innerHTML = "";
      return;
    }

    const maxButtons = 7;
    let firstPage = Math.max(1, currentPage - 3);
    let lastPage = Math.min(totalPages, firstPage + maxButtons - 1);
    firstPage = Math.max(1, lastPage - maxButtons + 1);

    const buttons = [];
    if (currentPage > 1) {
      buttons.push(`<button class="page-button" type="button" data-page="${currentPage - 1}" aria-label="Previous page">‹</button>`);
    }

    for (let page = firstPage; page <= lastPage; page += 1) {
      buttons.push(`<button class="page-button ${page === currentPage ? "active" : ""}" type="button" data-page="${page}" ${page === currentPage ? 'aria-current="page"' : ""}>${page}</button>`);
    }

    if (currentPage < totalPages) {
      buttons.push(`<button class="page-button" type="button" data-page="${currentPage + 1}" aria-label="Next page">›</button>`);
    }

    pagination.innerHTML = buttons.join("");
  }

  function applySearch(query) {
    const normalizedQuery = query.trim().toLowerCase();
    filteredStudents = normalizedQuery
      ? students.filter((student) =>
          student.name.toLowerCase().includes(normalizedQuery) ||
          student.registrationNumber.toLowerCase().includes(normalizedQuery)
        )
      : students.slice();

    publishedCount.textContent = filteredStudents.length.toLocaleString();
    currentPage = 1;
    renderStudents();
  }

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applySearch(searchInput.value);
  });

  pagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-page]");
    if (!button) return;
    currentPage = Number(button.dataset.page);
    renderStudents();
    document.querySelector(".summary").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  searchInput.addEventListener("input", () => applySearch(searchInput.value));

  const initialQuery = new URLSearchParams(window.location.search).get("q") || "";
  searchInput.value = initialQuery;
  applySearch(initialQuery);
})();