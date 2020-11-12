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

#divcont{
  width: 70%;
    margin: 0 auto;
}
h1 {
    color: #fff;
    margin: 0 auto;
    padding-top: 3em;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.7em;
}

.inner {max-width:1200px; margin: 0 auto;}


button:first-child {margin-left:0;}

.red {background-color: #ff0000;}
.orange {background-color: #FF5000!important;}
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
.contnav p{
  font-size: 12px;
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

.cardcont {
    display: grid;
    justify-items: center;
    display: grid;
    margin: 0 auto;
    padding-top: 1.5em;
    padding-bottom: 2em;
    display: grid;
    grid-template-columns: [x0] 0fr [x1] 1fr [x2] 0fr [x3];
}
.card{
  width: 20rem;
    margin: 0 auto;
    padding: 25px;
    background-color: white;
    border-radius: 1em;
    margin: 20px 0px 20px 0px;
}

li{
  padding-right: 2em;
}

li img{
  width: 30px;
  cursor:pointer;
  transition:0.8s ;
}

li img:hover{
  transition:0.8s ;
  transform:scale(1.1);
}


li img:active{
  opacity:0.5;
}

.card-title {
    font-size: 18px !important;
    font-weight: bold!important;
    font-family: 'Montserrat',sans-serif;
}

.card-text {
    font-family: 'Poppins',sans-serif;
    font-size: 14px;
}

button {
    cursor: pointer;
    background: #fff;
    border: 0;
    padding: 10px 30px 10px 30px !important;
    color: #fff;
    background-color: #2481cc;
    text-align: center;
    margin: 0 auto;
    font-size: 14px;
    border-radius: 10px;
    text-align: center;
    outline: none;
    font-family: monser;
    border: none;
    justify-content: center;
    font-family: 'Poppins';
    align-items: center;
    font-weight: 600;
    align-content: center;
    margin: 0 auto;
    justify-items: center;
}

`;


export default GlobalStyle;