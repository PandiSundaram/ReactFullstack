

const Hoc = (Component) =>{

   const isLoggedIn = true; // we can write the logic to check whether logged in or not, HOC will return function


   return () => {
    if(isLoggedIn){
        return <Component />;
    }else{
       return(<div>not logged in</div>);
    }
   }

  

}

export default Hoc;