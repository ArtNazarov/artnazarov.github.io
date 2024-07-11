const host = "https://fleek.ipfs.io/ipfs/QmYeNpu3m3LAkJdSXJMWta8zt4nmBzq4AQYU6rP46qx88x"; // заменить на нужный хост
const navLinks = document.querySelectorAll(".nav-menu"); // выбираем все элементы с классом nav-menu
navLinks.forEach(link => {
  const oldHref = link.getAttribute("href"); // получаем старое значение href
  link.setAttribute("href", host + oldHref); // устанавливаем новое значение href
});


function getMenuLink(item, index){

      return <div style={{flex: 1, padding: '10px', textAlign: 'center', margin: '10px auto'}} key={index}>
            <span
            onClick={(ev)=>{ev.preventDefault();   document.location.assign(item.link);}}
            style={{cursor: 'pointer', textDecoration: 'none', color: 'red', backgroundColor: 'white'}}
            title={item.title}  href={`${item.link}.html`}>{item.title}</span></div>
}

function Menu(){
 const menu_links = [

      { 'title' : 'Главная', 'link' : 'index.html'},
      { 'title' : 'HtmlBuilder', 'link' : '/section_htmlbuilder.html'},
      { 'title' : 'Linux', 'link' : '/section_linux.html'},
      { 'title' : 'Yii2', 'link' : '/section_yii2.html'},
      { 'title' : 'Android', 'link' : '/section_android.html'},
      { 'title' : 'Windows', 'link' : '/section_windows.html'},
      { 'title' : 'Прочее', 'link' : '/section_etc.html'},
      { 'title' : 'Контакты', 'link' : '/support.html'}
];
 return (<nav style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
        { menu_links.map( getMenuLink ) }
 </nav>)
 }


     // Подчиненный компонент (заголовок с текстом и без свойств)
       const hc = <header><Menu></Menu></header>
      // Выбрать элемент для корневого контейнера
      const ac = document.getElementById('app')
            // Создаем корневой контейнер
      const root = ReactDOM.createRoot(ac)
            // Отображаем подчиненный компонент внутрь корня
      root.render(hc)



