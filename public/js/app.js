const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const p1=document.querySelector('#p1')
const p2=document.querySelector('#p2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const url='http://localhost:3000/weather?address='+search.value
    p1.textContent='Loading'
    p2.textContent=''
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
                return p1.textContent=data.error
            p1.textContent=data.data
            p2.textContent=data.location
           
        })
    })
    
})