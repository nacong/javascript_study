const log = console.log;

const Passport = {
    "Type id": "W983tr23",
    "Country Code": "KOR",
    "Surname": "Yang",
    "Given names": "Nabeen",
    "Birth": "040804",
    "Sex": "F",
    "Nationality": "Republic Of Korea",
};
log(Passport);
const DB = [
    { ...Passport },
    { ...Passport },
    { ...Passport },
    { ...Passport },
    { ...Passport },
];
log(DB);

const copy = { ...Passport };
copy["Country Code"] = "USA";
log(copy);
