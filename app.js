const som = document.querySelector('#som')
const usd = document.querySelector('#usd')

function Converter(elem,elem2){
    elem.addEventListener('input',()=>{
      const req= new XMLHttpRequest()
      req.open("GET",'valuta.json')
      req.setRequestHeader('Content-type','application/json')
      req.send()
      req.addEventListener('load',()=>{
            const resp=JSON.parse(req.response)
            if(elem===som){
              elem2.value=(elem.value/resp.usd).toFixed(2)
            }else if(elem ===usd){
              elem2.value = (elem.value*resp.usd).toFixed(2)
            }
            if(elem.value===''){
              elem2.value=''
            }
          }
      )
    })
  }
Converter(som,usd)
Converter(usd,som)