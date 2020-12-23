import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

a{
  text-decoration: none;
    color: white;
    cursor:pointer;
}

#divcont{
  width: 70%;
    margin: 0 auto;
    min-height: 95.2vh;
    padding-bottom: 4em;
}

#nonebu{
  background: #fff0;
  padding: 0px !important;
    margin: 0 auto !important;
}


h1 {
  color: #fff;
    margin: 0 auto;
    padding-top: 5.5em;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
    padding-bottom: 1em;
}

.mod{
  width: 50%;
    margin-left: 2em;
    margin-right: 2em;
}

#tic2{
  margin-left: 1.9em!important;
  transition:0.6s all;
}
#tic2:hover{
  transition:0.6s all;
  transform:scale(1.1);
}

#tic{
  width: 45.5% !important;
    cursor: pointer;
    transition:0.6s all;
}

#tic:hover{
  transition:0.6s all;
  transform:scale(1.1);
}

.inner {max-width:1200px; margin: 0 auto;}


button:first-child {margin-left:0;}

.red {background-color: #ff0000;}
.hightlight {background-color: #F0B40A; color: #320A46;}
.hightlight_over {background-color: #eee; color: #320A46;}

* {
  box-sizing: border-box;
}

@media (max-width: 860px) {
    .inner {padding:0 30px;}
}

.contnav{
  width: 50%;
    
    align-items: center;
    align-content: center;
    justify-content: center;
    font-style: oblique;
    color: #b5b5b5;
}
.contnav p {
    font-size: 16px;
    font-style: normal;
    color: white;
    margin-top: 0 auto;
    /* justify-content: center; */
    /* align-items: center; */
    /* align-content: center; */
    margin-top: 12px;
}

.contnav img{
  cursor:pointer;
  transition:0.8s all;
}

.contnav img:hover{
  cursor:pointer;
  transition:0.8s all;
  transform:scale(1.1);
}

ul{
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    float: right;
    -webkit-text-decoration: none;
    text-decoration: none;
    list-style: none;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
}
.redes{
  width: 25.5px;
  margin-right: 1em;
}

.editaryeliminar{
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  
  
    padding-bottom: 10px;
}

#titd{
  color: #fff;
    margin: 0 auto;
    padding-top: 5.5em;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    padding-bottom: 1em;
    text-align: left;
}

.cardcont {
  justify-items: center;
    display: flex;
    padding-top: 2em;
    width: 110%;
    display: flex;
    flex-wrap: wrap;
}

.contuni{
  width: 10.4%;
    margin: 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #192850;
    padding: 2em;
    margin: 0 auto;
    text-align: center;
    -webkit-transition: 0.6s all;
    transition: 0.6s all;
    border-radius: 6em;
    margin-top: 2em !important;
}


.contuni:hover{
  
    margin: 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    /* opacity: 0; */
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #bce7e5;
    padding: 2em;
    margin: 0 auto;
    text-align: center;
    -webkit-transition: 0.6s all;
    transition: 0.6s all;
    border-radius: 1em;
    box-shadow: 0px 3px 10px -4px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 3px 10px -4px rgb(0 0 0 / 43%);
    -moz-box-shadow: 0px 3px 10px -4px rgba(0,0,0,0.77);
}

.contuni a img{
  transition:0.6s all;
}

.contuni a img:hover{
  transform:scale(1.1);
  transition:0.6s all;
}

.card{
    margin: 0 auto;
    padding: 25px;
    background-color: white;
    border-radius: 1em;
    margin:20px 30px 20px 0px;
    box-shadow: 0px 3px 10px -4px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 3px 10px -4px rgb(0 0 0 / 43%);
    -moz-box-shadow: 0px 3px 10px -4px rgba(0,0,0,0.77);
    transition:0.6s all;
}

.cardcont2{
  justify-items: center;
    padding-top: 2em;
    display: grid;
 
}

#question{
  background-color: #1f82d5;
    color: white;
    padding:0px 0px 0px 20px;
    border-radius: 2em;
    position: fixed;
    top: 750px;
    left: 1730px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    transition:0.8s all;
    font-size:13px;
}

#question:hover{
  background-color: #1f82d5;
    color: white;
    padding:0px 0px 0px 20px;
    font-size:13px;
    border-radius: 2em;
    position: fixed;
    top: 750px;
    left: 1030px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    transition:0.8s all;
}

#comoes{
  margin-right: 3em;
}

#comoest{
     width: 36%;
}

.card:hover{
  transition:0.6s all;
  width: 38rem !important;
}

li{
  padding-right: 2em;
}

#conf{
  width: 30px;
}

li img{
  width: 25px;
    cursor: pointer;
 
    transition: 0.8s;
}

li img:hover{
  transition:0.8s;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 6, 0, 0, 1) !important;
}

.error_message{
  display:none;
}

li img:active{
  opacity:0.5;
}

.card-title {
  font-size: 20px !important;
    font-weight: bold!important;
    text-transform: capitalize;
    font-family: 'Montserrat',sans-serif;
}

.card-text {
  font-family: 'Poppins',sans-serif;
    font-size: 15px;
    color: #5f5f5f;
    height: 60px;
}

.card a{
  text-decoration: none;
    color: #fefeff;
    /* font-weight: 900; */
    background-color: #192850;
    padding: 8px 23px 8px 23px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    margin: 10px 0px 0px 0px;
    float: right;
    font-weight: 500;
    text-transform: capitalize;
    transition: 0.6s all;
    outline:none;
    border:none;
}

#userh{
  transition: 0.8s all;
}

#userh:hover{

  transition: 0.8s all !important;
    transform: scale(1.1) !important;

}

.userp{
  font-family: 'Poppins';
    font-size: 13px;
    font-weight: 550;
    color: #797979 !important;
    padding-top: 1.6em;
}

.contcont{
  min-height: 95.22vh;
  
}

.flechusa {
  text-decoration: none !important;
  outline:none;
  border:none
}

.flechusa p{
  cursor:pointer;
    color: #55b4ff;
    font-style: initial;
    font-size: 30px;
    transition:0.8s;

}

.flechusa p:hover{
  transition:0.8s;
  transform: matrix(1, 0, 0, 1, -6, 0) !important;
}

.card a:hover{
 opacity:0.8;
  transition: 0.6s all;
  outline:none;
    border:none;
}

button {
  cursor: pointer;
    background: #fff;
    border: 0;
    padding: 15px 25px 15px 25px !important;
    color: #fff;
    background-color: #2481cc;
    text-align: center;
    margin: 0 auto;
    font-size: 13px;
    border-radius: 6px;
    text-align: center;
    outline: none;
    font-family: monser;
    border: none;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: 'Poppins';
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    margin: 0 auto;
    justify-items: center;
    transition:0.7s;
}

form{
  padding: 30px;
    width: 100% !important;
    display: grid !important;
    -webkit-box-pack: center !important;
    -webkit-justify-content: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    height: 50vh !important;
    margin: 0px auto !important;
    text-align: center !important;
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
    -webkit-box-pack: center !important;
    outline: none !important;
    margin: 0 auto !important;
    padding: 0px !important;
    font-family: 'Poppins';
    border-radius: 0em !important;
}


.kKcyHH input, .kKcyHH select, .kKcyHH textarea {
  width: 100%;
    min-height: 60px;
    line-height: 34px;
    border: none;
    border-radius:10px;
    background: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding-left: 12px;
    padding-bottom: 1em;
    padding-right: 4em;
    resize: none;
    font-size: 17px;
    margin-bottom: 10px;
    font-family: 'Poppins';
    outline:none;
}
.tit{
  text-align: center;
    color: #00d0ff;
    font-size: 20px;
    font-style: oblique;
    font-weight: 500;
    font-family: 'Montserrat';
}


.kuQQik input, .kuQQik select, .kuQQik textarea {
    width: 100%;
    min-height: 50px;
    line-height: 34px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 0.5em;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding-left: 12px;
    font-size: 16px;
    font-family: 'Poppins';
    margin-bottom: 10px;
}

.kKcyHH .input_row div {
    position: absolute;
    top: 19px;
    font-size: 13px;
    right: 22px;
    color: #8a8a8a;
}

.dash input {
    padding: 20px 50px;
    border-radius: 11em;
    outline: none!important;
    border: none!important;
    font-size: 18px;
    font-family: 'Poppins',sans-serif;
}

.dash textarea{
    resize: none;
    width: 100%;
    height: 20vh;
    padding: 20px;
    font-size: 20px;
    border-radius: 1em;
    outline:none;
    border:none;
    font-family: 'Poppins',sans-serif;
}

.button2 {
    cursor: pointer;
    background: #fff;
    border: 0;
    padding: 15px 25px 15px 25px !important;
    color: #fff;
    background-color: #2481cc;
    text-align: center;
    margin: 0 auto;
    font-size: 15px;
    border-radius: 6px;
    text-align: center;
    outline: none;
    font-family: monser;
    border: none;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: 'Poppins';
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    margin: 0 auto;
    justify-items: center;
    -webkit-transition: 0.7s;
    transition: 0.7s;
}

.contcla{    
width: 60%;
    margin: 0 auto;
    padding-top: 1em;
    /* display: list-item; */
    /* display: contents; */
    background-color: white;
    /* color: beige; */
    border-radius: 1em;
    padding: 25px;
    position: absolute;
    top: 150px;
    /* float: left; */
    transition: 0.6s all;
    left: 340px;
}

.tituloss{
    padding: 20px;
}

.titcont{
  color: #525252;
    margin: 0 auto;
    padding-top: 0px;
    font-family: 'Montserrat',sans-serif;
    font-size: 2.1em;
    font-weight: 700;
    text-align: inherit;
    padding-bottom: 1em;
}


.titsub{
    text-align: center;
    color: #9c9c9c;
    font-size: 1.1em;
    font-style: oblique;
    margin-right: 10px;
  
    text-align: inherit;
    margin: 0 auto;
    font-family: 'Montserrat',sans-serif;
}

.titp{
  padding: 20px;
    font-size: 15px;
    line-height: 1.6;
    margin: 0 auto;
    font-family: 'Poppins',sans-serif;
}

.mail{
  text-align: center;
    padding-top: 8.3em;
    color: #ffffff;
    font-size: 1.5em;
    /* font-style: oblique; */
    font-weight: 700;
    margin: 0 auto;
    font-family: 'Montserrat';
    margin-bottom: 1.3em;
}

button:hover{
  background-color: #2454cc;
    -webkit-transition: 0.7s;
    transition: 0.7s;
}

.kKcyHH input[type='submit'], .kKcyHH button {
    width: 100px;
    cursor: pointer;
    opacity: 1.8;
    background: #192850 !important;
    border: 0;
    text-transform: uppercase;
    border-radius: 3em;
    padding: 10px 10px !important;
    margin-top: 20px;
    color: #fff;
    background-color: #000;
    margin: 0 auto;
}

.conton{
    width: 100%;
    display: flex;
    min-height: 90vh;
    justify-content: center;
    justify-items: center;
    align-items: center;
}
.coniniz{
  width: 60%;
    margin: 0 auto;
    -webkit-box-pack: center;
    min-height: 100vh;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    background-size: cover;
    background-image: url(./assets/fondoder.jpg);
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    margin: 0 auto;
    justify-content: center;
}

.coninder{
width: 50%;
    margin: 0 auto;
    padding-top: 2.5em;
}

h2{
  text-align: center;
    color: white;
    /* font-style: oblique; */
    font-size: 28px;
    margin-right: 10px;
    font-family: 'Poppins',sans-serif;
}

#saludo{
  margin-left: 8em;
    margin-top: 20em;
}


input{
  padding: 20px 50px;
    border-radius: 1em;
    outline: none!important;
    border: none!important;
}

.hola{
  color: #ffffff;
    padding: 0px !important;
    margin: 0 auto;
    font-size: 5em;
    font-weight: bold;
    margin-left: 6px;
    font-family: 'Montserrat',sans-serif;
    text-align: left !important;

}

.irasing{
  text-align: center;
    color: white;
}
.irasing p{
  margin:0 auto !important;
    font-style: oblique;
    font-size: 14px;
    transition:0.7s all;
    font-family: 'Poppins',sans-serif;
}


.irasing a{
  text-decoration:none !important;
  color: aqua;
  transition:0.7s all;
}


.irasing a:hover{
  opacity:0.7;
 transition:0.7s all;
}

`;


export default GlobalStyle;