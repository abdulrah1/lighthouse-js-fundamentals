let listNum;

for (i = 100; i <= 200; i++){
  listNum = i;

  if ((listNum % 3 === 0) && (listNum % 4 === 0)) {
    console.log("LoopyLighthouse");
  } else if (listNum % 3 === 0) {
    console.log("Loopy");
  } else if (listNum % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(listNum);
  }
}