export function debounce(fn, wait){
    let timer;
   return function(...args){
     if(timer) {
        clearTimeout(timer); // clear any pre-existing timer
     }
     const context = this; // get the current context
     console.log('context',context);
     console.log('context',args);
     console.log('context',fn);
     
     timer = setTimeout(()=>{
        fn.apply(context, args); // call the function if time expires
     }, wait);
   }
}

export default debounce