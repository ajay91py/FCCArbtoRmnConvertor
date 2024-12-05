const convertBtn=document.getElementById('convert-btn')
const output=document.getElementById('output')

const romanArr=[{ value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
]

convertBtn.addEventListener('click',()=>{
    const ArbInput=document.getElementById('number').value
    const inputInt=parseInt(ArbInput)
   isItValid(inputInt)})

   function isItValid(num){
    if(!num)
    {
        output.textContent="Please enter a valid number"
    } else if(num<0){
        output.textContent="Please enter a number greater than or equal to 1"
    }
    else if(num>3999) {
        output.textContent="Please enter a number less than or equal to 3999"
    }
    else 

    {
        output.innerText=convertToRoman(num)
  function convertToRoman(num){
    if (num===0) return "";
    else{
        let str='';
    for (let i = 0; i < romanArr.length; i++) {
    if (num >= romanArr[i].value) {
       str+=romanArr[i].numeral+convertToRoman(num-romanArr[i].value);
    console.log(romanArr[i].numeral)
       return str
    }
        }
      }
}
        
    }
   }
   
  

  