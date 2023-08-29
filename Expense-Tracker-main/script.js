"use strict";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Dec",
];

const account1 = {
  name: "Alina Castaneda",
  email: "alinacasta@gmail.com",
  username: "alinacasta",
  password: "ac123",
  img: "alina",
  actions: [
    {
      name: "4 Families House Tour",
      price: "1000",
      date: "2020-07-15",
      type: "expense",
    },
    {
      name: "Luxury Condo Sale",
      price: "2500000",
      date: "2021-09-20",
      type: "profit",
    },
    {
      name: "Commercial Property Lease",
      price: "5000",
      date: "2022-03-10",
      type: "profit",
    },
    {
      name: "Marketing Campaign",
      price: "3000",
      date: "2022-08-05",
      type: "expense",
    },
    {
      name: "Residential Property Sale",
      price: "1500000",
      date: "2023-01-25",
      type: "profit",
    },
    {
      name: "Office Rent",
      price: "4000",
      date: "2023-06-12",
      type: "expense",
    },
  ],
};

const account2 = {
  name: "John Smith",
  email: "johnsmith@gmail.com",
  username: "johnsmith",
  password: "js123",
  img: "john",
  actions: [
    {
      name: "Apartment Showing",
      price: "800",
      date: "2021-07-10",
      type: "expense",
    },
    {
      name: "Commercial Building Sale",
      price: "4000000",
      date: "2022-11-05",
      type: "profit",
    },
    {
      name: "Property Renovation",
      price: "10000",
      date: "2022-12-20",
      type: "expense",
    },
  ],
};

const account3 = {
  name: "Emma Davis",
  email: "emmadavis@gmail.com",
  username: "emmadavis",
  password: "ed123",
  img: "emma",
  actions: [
    {
      name: "Residential Property Sale",
      price: "1200000",
      date: "2020-09-10",
      type: "profit",
    },
    {
      name: "Property Maintenance",
      price: "500",
      date: "2021-02-15",
      type: "expense",
    },
    {
      name: "Commercial Building Lease",
      price: "6000",
      date: "2022-06-05",
      type: "profit",
    },
    {
      name: "Digital Marketing Campaign",
      price: "3000",
      date: "2023-01-20",
      type: "expense",
    },
  ],
};

const account4 = {
  name: "Sophia Johnson",
  email: "sophiajohnson@gmail.com",
  username: "sophiajohnson",
  password: "sj123",
  img: "sophia",
  actions: [
    {
      name: "Apartment Rental",
      price: "1500",
      date: "2020-12-05",
      type: "profit",
    },
    {
      name: "Property Inspection",
      price: "200",
      date: "2021-03-20",
      type: "expense",
    },
    {
      name: "Land Development Project",
      price: "50000",
      date: "2022-09-15",
      type: "profit",
    },
    {
      name: "Advertising Campaign",
      price: "2500",
      date: "2023-04-10",
      type: "expense",
    },
    {
      name: "Commercial Property Sale",
      price: "1800000",
      date: "2023-07-01",
      type: "profit",
    },
  ],
};

const accounts = [account1, account2, account3, account4];

const signInBtn = document.querySelector(".signin-button");
const navLinks = document.querySelectorAll(".menu__list__item");
const logoutBtn = document.getElementById("logout");

const app = document.querySelector(".app");
const signInForm = document.querySelector(".signin-form");
const profileSection = document.querySelector(".profile__section");
const mainSection = document.querySelector(".main__section");

const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const salesListEl = document.querySelector(".sales__list");

const totalProfitEl = document.getElementById("total-profit");
const recentProfitEl = document.getElementById("recent-profit");
const totalSalesEl = document.getElementById("total-sales");
const perYearEl = document.getElementById("per-year");
const perSelEl = document.getElementById("per-sell");

const profileSectionName = document.querySelector(".profile__section__name");
const profileSectionUserName = document.querySelector(
  ".profile__section__username"
);
const profileSectionPassword = document.querySelector(
  ".profile__section__password"
);

const profileName = document.querySelector(".profile__name");
const profileEmail = document.querySelector(".profile__email");
const profilePicture = document.querySelector(".profile__picture");

let currentAccount;

const displaySales = (sales) => {
  salesListEl.innerHTML = " ";
};

sales.forEach((sale) => {
  const html = `
    <li class=${sale.type}>
    <span class="sale__name">${sale.name}</span>
    <span class="sale__price">$${sale.price}</span>
    <span class="sale__date">${displayDate(sale.date)}</span>
    <button class="delete__btn">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  </li>
    `;

  salesListEl.insertAdjacentHTML("beforeend", html);
});
const displayProfileInfo = (account) => {
  profileName.textContent = account.name;
  profileEmail.textContent = account.email;
  profilePicture.style.backgroundImage = `url("../../Images/${account.img}.jpg")`;
};

const displayBalance = (account) => {
  const profits = account.actions.filter((action) => action.type === "profit");

  const recentYearProfits = account.actions.filter(
    (action) => action.type === "profit" && action.date.slice(0, 4) === "2023"
  );

  const expenses = account.actions.filter(
    (action) => action.type === "expense"
  );

  const recentYearExpenses = account.actions.filter(
    (action) => action.type === "expense" && action.date.slice(0, 4) === "2023"
  );

  const totalProfit = profits.reduce((sum, profit) => sum + +profit.price, 0);
  const totalRecentProfit = recentYearProfits.reduce(
    (sum, profit) => sum + +profit.price,
    0
  );
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + +expense.price,
    0
  );
  const totalRecentExpense = recentYearExpenses.reduce(
    (sum, expense) => sum + +expense.price,
    0
  );

  const balance = totalProfit - totalExpense;
  const recentBalance = totalRecentProfit - totalRecentExpense;

  const activeYears = account.actions.map((action) => action.date.slice(0, 4));

  const uniqueActiveYears = new Set(activeYears);

  totalProfitEl.textContent = `${balance}$`;
  totalSalesEl.textContent = profits.length;
  profileSectionName.textContent = account.name;
  profileSectionUserName.textContent = account.username;
  profileSectionPassword.textContent = account.password;

  recentProfitEl.textContent = `${recentBalance}$`;

  perYearEl.textContent = `average profit per year ${
    balance / uniqueActiveYears.size
  }$`;

  perSelEl.textContent = `average profit per sell ${
    recentBalance / recentYearProfits.length
  }$`;
};

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find(
    (account) => account.username === userNameInput.value
  );

  if (currentAccount.password === passwordInput.value) {
    signInForm.classList.add("hidden");
    profileSection.classList.add("hidden");
    mainSection.classList.remove("hidden");
    app.classList.remove("hidden");

    displaySales(currentAccount.actions);
    displayProfileInfo(currentAccount);
  }

  userNameInput.value = "";
  passwordInput.value = "";
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.id === "profile") {
      profileSection.classList.remove("hidden");
      mainSection.classList.add("hidden");
      displayBalance(currentAccount);
    } else {
      profileSection.classList.add("hidden");
      mainSection.classList.remove("hidden");
      displayProfileInfo(currentAccount);
      displaySales(currentAccount.actions);
    }

    if (this.id === "recents") {
      displayProfileInfo(currentAccount);
      displaySales(currentAccount.actions.slice(0, 4));
    }

    if (this.id === "sells") {
      displayProfileInfo(currentAccount);
      displaySales(
        currentAccount.actions.filter((action) => action.type === "profit")
      );
    }
  });
});

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = undefined;
  app.classList.add("hidden");
  signInForm.classList.remove("hidden");
});

const displayDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${months[month[1] - 1]} ${day} ${year}`;
};
