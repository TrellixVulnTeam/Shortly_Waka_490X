window.onload = inicio;

const btn = document.getElementById(`btn_Sorten`);
const linkShorten = document.getElementById(`link_shorten`);
const inputShorten = document.getElementById(`input_shorten`);
const errShorten = document.getElementById(`err_shorten`);
const Api = {
              key:`9551a0c48987ee4ffadb06dcc3f46ac24ebe9`,
              url:`https://cutt.ly/api/api.php`
               }

function inicio(){
   btn.addEventListener('click',shorten);

}

async function shorten(e){
    e.preventDefault();
    if(inputShorten.value === ``){
       errShorten.value;
       errShorten.style.visibility="visible"
       errShorten.textContent = 'Please, Complete field.';
       errShorten.style.color = 'red';
       
    }
    else{
      try{
        const apirest = await fetch(`?q=${Api.url}&appid=${Api.key}`);
        const data = await apirest.json();
        console.log(data)    
        const text = inputShorten.value;
        const li = document.createElement('li');
        const p = document.createElement('p');
         p.textContent = text;
    
        li.appendChild(p);
        li.appendChild(addDelete());
        linkShorten.appendChild(li);
    
        linkShorten.style.display=`block`;
        li.style.display=`flex`;
        li.style.justifyContent=`space-between`;
        li.style.alignItems=`center`;
        p.style.cursor= `pointer`
        
        inputShorten.value=``;
        errShorten.style.visibility="hidden"
      }
      catch(err){
        console.log(err)
    }
} 
}

function addDelete(){
    const deleteBtn = document.createElement(`button`);

    deleteBtn.textContent = `X`;
    deleteBtn.style.backgroundColor = `red`;
    deleteBtn.style.border = `none`;
    deleteBtn.style.padding = `2px 8px`;
    deleteBtn.style.borderRadius = `100px`;
    deleteBtn.className = `btn-delete`

    deleteBtn.addEventListener('click',(e) =>{
        const item = e.target.parentElement;
        linkShorten.removeChild(item);

        for(let i = 0; i=item.length; i++) {
            if(item[i].pop() === ``){
                linkShorten.appendChild(item[i]);
            }
        }
        

    });
    return deleteBtn;
}

