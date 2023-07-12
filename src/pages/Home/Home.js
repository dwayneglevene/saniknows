import "./HomeStyle.css";
// import "./Home/.pages/src/assets/images/adlLaundry.jpg"


function Home(){

    function pn(){
        console.log("cool")
    }
    return(
        <div>
           <h1>Sani Knows</h1> 

           <div class="flex-container">
        
            <div class="left">
               <h2>Who we are</h2>
                <p>"Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                
            </div>


        <div class="middle">

            <button >
                Join
            </button>

            <h3>Sani</h3>

            <button>
                Sign In
            </button>

        </div>

            <div class="right">
<img id="pic" src ="https://www.autismspeaks.org/sites/default/files/styles/wysiwyg_large/public/KA-19.jpg?itok=LrWKreRL" height="100%" width="100%"/>

            </div>

           </div>



        </div>
    )
}

export default Home;