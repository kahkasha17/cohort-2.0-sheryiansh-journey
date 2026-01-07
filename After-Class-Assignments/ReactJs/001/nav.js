const navitems=()=>{

    const AboutMe=React.createElement('h3',{className:'navItems'},'AboutMe'); 
    const Portfolio=React.createElement('h3',{className:'navItems'},'Portfolio'); 
    const Services=React.createElement('h3',{className:'navItems'},'Services'); 
    const Blog=React.createElement('h3',{className:'navItems'},'Blog');
   const CTAButton = React.createElement(
  'button',
  { className: 'Cta-button' },
  'Book a Call ',
  React.createElement('i', {
    className: 'ri-arrow-right-up-line'
  })
);

    const logo=React.createElement('img',{className:'logo',src: './Public/images/logo.png',
  alt: 'logo not found'});
    
//    const navItems=[];
  const navItems=React.createElement('div',{id:'navItems'},[AboutMe,Portfolio,Services,Blog])
  const leftContainer=React.createElement('div',{id:'leftContainer'},navItems)// div 1
  const rightContainer=React.createElement('div',{id:'rightContainer'},CTAButton) // div 2
  const navContainer=React.createElement('div',{id:'navContainer'},[logo,leftContainer,rightContainer]) //main div
 

    return navContainer;

}
export default navitems;