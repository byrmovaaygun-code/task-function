// İki ədədin cəmini tapan funksiya yaz.

// let a=parseInt(prompt("eded daxil edin"))
// let b=parseInt(prompt("eded daxil edin"))
// function addition(a,b) {
//     return a+b
// } alert("cem"+addition(a,b))
//addition(a,b)

//  Verilmiş ədədin cüt və ya tək olduğunu müəyyən edən funksiya yaz.

// let a=parseInt(prompt("eded daxil edin"))
// function oparation() {
//    if (a%2===0) {
//     alert("cut ededdir")
//    }
//    else{
//     alert("tek ededdir")
//    }
//    return a
// } oparation()

//  Selsi temperaturunu Farenhayta çevirən funksiya yaz.

// let c=parseInt(prompt("selsi daxil edin"))
// function faranheyt() {
//    alert(9/5*c+32) }
   
//     faranheyt()

    //  Üç ədəd içərisində ən böyüyünü tapan funksiya yaz.
    // let a=parseInt(prompt("1eded daxil edin"))
    // let b=parseInt(prompt("2eded daxil edin"))
    // let c=parseInt(prompt("3eded daxil edin"))

    // function number() {
    //     if (a>b&&a>c) {
    //         alert("en boyuk eded"+a)
    //     }
    //     else if(b>a&&b>c){
    //         alert("en boyuk eded"+b)
    //     }
    //     else{
    //         alert("en boyuk eded"+c)
    //     }
    // }number()
//  Verilmiş ədədin faktorialını hesablayan funksiya yaz. 
// let a=parseInt(prompt("1eded daxil edin"))
// let faktorial=1
// function num() {
//     for (let i = 1; i <= a; i++) {
//     faktorial= faktorial*i
       
//     }
//     return faktorial
  
// }  
//   alert(num())


// Verilmiş sətiri tərsinə çevirən funksiya yaz.
// function ters(s) {
//     return s.split('').reverse().join('');
//   }
  
//   let metn = "Aygun";
//   let soz = ters(metn);
//   console.log(soz);

//  Verilmiş sözün palindrom olub olmadığını yoxlayan funksiya yaz 
// function palindrom(sss) {

//     let soz = sss.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let ters = soz.split('').reverse().join('');
//     return soz === ters;
//   }

//   console.log(palindrom("Ana")); 

// (Palindrom: tərsinə oxunduqda da eyni olan sözlər, məsələn: “amma”)


//  Verilmiş sətirdə neçə sait hərf olduğunu sayan funksiya yaz. 
// function sait() {
//     let say = 0;
//  const slm=prompt("deyer daxil et")
  
//     for (let i = 0; i < slm.length; i++) {
//       let herf = slm[i];
//       if (herf === 'a' || herf === 'e' || herf === 'ə' || herf === 'ı' ||
//           herf === 'i' || herf === 'o' || herf === 'ö' || herf === 'u' || herf === 'ü') {
//         say++;
//       }
//     }
  
//     return say;
//   }
  
//   console.log(sait());


// Bir cümlədəki hər sözün ilk hərfini böyük edən funksiya yaz. 
// const slm=  prompt("sozu daxil edin")
// function ilksoz(slm) {
//     return slm
//       .split(' ')           
//       .map(soz => soz[0].toUpperCase() + soz.slice(1).toLowerCase()) 
//       .join(' ');         
//   }
  

//   console.log(ilksoz(slm));
// Array (massiv) içindəki təkrar dəyərləri silən funksiya yaz. 

// Array içində müəyyən bir dəyərin olub-olmadığını yoxlayan funksiya yaz. 

// Verilmiş sətirdə hər bir simvoldan neçə dəfə olduğunu sayan funksiya yaz.
