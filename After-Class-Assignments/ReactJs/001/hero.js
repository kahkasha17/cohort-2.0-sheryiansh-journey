const heroSection=()=>{
     const heroImg=React.createElement('img',{className:'heroImg',src: './Public/images/heroimg.png',
  alt: 'logo not found'});

  const ProjectCount=React.createElement('p',null,'+200');
  const StartupRaised=React.createElement('p',null,'+50');
  const Projectp=React.createElement('span',null,'Project Completed');
  const Startupp=React.createElement('span',null,'Startup raised');

  const heroProject=React.createElement('div',{id:'heroProject'},[ProjectCount,Projectp]);
  const heroStartup=React.createElement('div',{id:'heroStartup'},[StartupRaised,Startupp]);
  const heroLeftTop=React.createElement('div',{id:'heroLeftTop'},[heroProject,heroStartup]);

  const Herotitle=React.createElement('h1',null,'Hello');
  const HeroPara=React.createElement('p',null,'- Its Galaxy a design wizard');
 const heroLeftCenter=React.createElement('div',{id:'heroLeftCenter'},[Herotitle,HeroPara]);

const HeroButtomPara = React.createElement(
  'p',
  null,
  'Scroll down ',
  React.createElement('i', {
    className: 'ri-arrow-down-line'
  })
);


 const heroLeftButtom=React.createElement('div',{id:'heroLeftButtom'},HeroButtomPara)

 const heroLeft=React.createElement('div',{id:'heroLeft'},[heroLeftTop,heroLeftCenter,heroLeftButtom])
 const heroRight=React.createElement('div',{id:'heroRight'},heroImg)
 const heroSection=React.createElement('div',{id:'heroSection'},[heroLeft,heroRight])

  

return heroSection;
}

export default heroSection;