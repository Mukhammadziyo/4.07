// const number1 = +prompt("Enter number 1");
// const number2 = +prompt("Enter number 2");
// const action = prompt("* , / , + , -");

// function calculator(n1, n2, action) {}

// calculate(number1, number2, action);

// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini qaytarib bersin.

function sum(x, y) {
  return x + y;
}

console.log(sum(1, 4));

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.

function toSekunds(minutes) {
  return minutes * 60;
}

console.log(toSekunds(2));

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.

function nextInteger(int) {
  return int + 1;
}

console.log(nextInteger(-2));

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi. Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

function uchburchakYuzi(asos, balandlik) {
  return (asos * balandlik) / 2;
}

console.log(uchburchakYuzi(12, 8));

// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb oling.

function ageToDays(age) {
  return age * 365;
}

console.log(ageToDays(16));

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana qismini yozing.

// kub(3) ➞ 27

// kub(5) ➞ 125

// kub(10) ➞ 1000

function cubeOfNumber(cube) {
  return cube ** 3;
}

console.log(cubeOfNumber(4));

// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya yasang.

function firstElement(first) {
  return first[0];
}

console.log(firstElement(`1 , 2, 3`));

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

function power(x, y) {
  return x * y;
}

console.log(power(230, 10));

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.

function hourToSekunds(hour) {
  return hour * 3600;
}

console.log(hourToSekunds(2));

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

function uchinchiTomon(tomon1, tomon2) {
  return tomon1 + tomon2 - 1;
}

console.log(uchinchiTomon(5, 7));

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang.

function qoldiq(son1, son2) {
  return son1 % son2;
}

console.log(qoldiq(1, 3));

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab qaytaradigan funksiya yasang. Formula S = bo’yi * eni

function turtburchakYuzi(boyi, eni) {
  return boyi * eni;
}

console.log(turtburchakYuzi(6, 7));

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi. ushbu funksiya “Something” stringiga " " bo’sh joy va “a” stringini birlashtirib qaytarsin.

function stringQoshish(a) {
  return "Something " + a;
}

console.log(stringQoshish("is better than nothing"));

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.

// kvadrat(5) ➞ 25

// kvadrat(9) ➞ 81

// kvadrat(100) ➞ 10000

function squareOfNumber(square) {
  return square ** 2;
}

console.log(squareOfNumber(6));

// 16.Funksiya ko’p  burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180

function ichkiBurchaklar(n) {
  return (n - 2) * 180;
}

console.log(ichkiBurchaklar(6));

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

function ochkolar(x, y) {
  return x * 2 + y * 3;
}

console.log(ochkolar(38, 8));

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq funksiya yasang.

// Namuna:
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"

function nameString(name) {
  return name + "Edabit";
}

console.log(nameString("Mubashir"));

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.

function ikkitaSon(x, y) {
  return x + y < 100;
}

console.log(ikkitaSon(82, 18));

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

function printArray(array) {
  let result = [];
  for (let i = 0; i < array; i++) {
    result.push(i);
  }
  return result;
}

console.log(printArray(6));

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.

function oyoqlar(tovuq, qoy, sigir) {
  return tovuq * 2 + qoy * 4 + sigir * 4;
}

console.log(oyoqlar(2, 3, 5));

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false

function and(a, b) {
  if ((a = b)) {
    and = true;
  } else {
    and = false;
  }
  return and;
}

console.log(and(true, true));

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala qiymatning ma’lumot turi bir xil bo’lsin.

function tengMi(x, y) {
  if (x === y) {
    tengMi = true;
  } else {
    tengMi = false;
  }
  return tengMi;
}

console.log(tengMi(2, "2"));

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta mag’lubiyat = 0 ochko hisoblanadi.

function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
  return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
}

console.log(futbolOchko(3, 4, 2));

// 25.Funskiya soatlar va minutlarni argument sifatida qabul qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib ularning yig’indisini qaytarsin.

function sekundlar(soat, minut) {
  return soat * 3600 + minut * 60;
}

console.log(sekundlar(1, 3));

// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) ➞ false

// fun(9) ➞ false

// fun(7) ➞ true

function fun(son) {
  if (son === 7) {
    fun = true;
  } else {
    fun = false;
  }
  return fun;
}

console.log(fun(7));

// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat qaytarsin.

function checkEquality(raqam, raqam2) {
  return raqam === raqam2;
}

console.log(checkEquality(10, "10"));

// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya boolean qiymatni stringga o’girib qaytarib bersin.

function booleanToString(bool) {
  return bool.toString();
}

console.log(booleanToString(true));

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki berilgan qiymatni qaytarsin.
// Namuna:
// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true

function arrowFunc(func) {
  return func;
}

console.log(arrowFunc(190));

// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini qaytarsin.

function frameSoni(minut, frame) {
  return minut * 60 * frame;
}

console.log(frameSoni(10, 25));

// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.

function calc(str) {
  return eval(str);
}

console.log(eval("23+4"));
console.log(eval("45-15"));
console.log(eval("13+2-5*2"));
console.log(eval("49/7*2-3"));

// 32.Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on.

function teng10(son1, son2) {
  return son1 === 10 || son2 === 10 || son1 + son2 === 10;
}

console.log(teng10(9, 10));

// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.

function litrMasofa(km) {
  return km * 10;
}

console.log(litrMasofa(23.5));

// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3, 7) ➞ 7

// fun(-1, 0) ➞ 0

// fun(1000, 400) ➞ 1000

function fun(a, b) {
  return Math.max(a, b);
}

// console.log(fun(3, 7));
console.log(fun(-1, 0));
// console.log(fun(1000, 400));

// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.

function arr(x, y) {
  return [x, y];
}

console.log(arr(1, 2));

// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold yolg’on.

function tengStrings(str1, str2) {
  return str1.length === str2.length;
}

console.log(tengStrings("AB", "CD"));

// 37.Shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.

function boshStr(str) {
  return str.length === 0;
}

console.log(boshStr("ab"));

// 38.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.

function bolinsin5(son) {
  return son % 5 == 0;
}

console.log(bolinsin5(-55));

// 39.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.

function bolinsin100(son) {
  return son % 100 == 0;
}

console.log(bolinsin100(1));
console.log(bolinsin100(1000));

// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.

function uzunlik(str, i = 0) {
  if (str === "") {
    return i;
  }

  return uzunlik(str.slice(1), i + 1);
}

console.log(uzunlik("apple"));
