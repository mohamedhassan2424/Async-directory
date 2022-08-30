let sentence = "hello there from lighthouse labs";
sentence=sentence.split('')
let totalLengt
let duration=1000
console.log(sentence)
for (const char of sentence) {
    setTimeout(  ()=>{
        process.stdout.write(char)},duration);
        duration+=50;
  }
 setTimeout(()=>{
    console.log('\n')
 },duration)